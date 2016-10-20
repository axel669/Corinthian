import "lib-source/v2/deviceready";

const appFileSystem = new Promise(
    async (resolve, reject) => {
        await deviceReady;
        if (typeof requestFileSystem === 'undefined') {
            resolve(null);
            return;
        }
        requestFileSystem(
            LocalFileSystem.PERSISTENT,
            0,
            fs => resolve(fs.root),
            error => reject(error)
        );
    }
);
const tempFileSystem = new Promise(
    async (resolve, reject) => {
        await deviceReady;
        if (typeof requestFileSystem === 'undefined') {
            resolve(null);
            return;
        }
        requestFileSystem(
            LocalFileSystem.TEMPORARY,
            0,
            fs => resolve(fs.root),
            error => reject(error)
        );
    }
);

const protoSeparater = "::";
const fsType = {
    file: "getFile",
    dir: "getDirectory"
};
const getInfo = name => {
    const info = name.split(protoSeparater);

    if (info.length === 1) {
        return [null, info[0]];
    }
    return info;
};
const isFile = name => name.slice(-1) !== '/';
const getName = name => {
    if (isFile(name) === false) {
        name = name.slice(0, -1);
        return name.slice(name.lastIndexOf('/') + 1) + '/';
    }

    return name.slice(name.lastIndexOf('/') + 1);
};
const getPath = name => {
    if (isFile(name) === false) {
        name = name.slice(0, -1);
    }

    return name.slice(0, name.lastIndexOf('/') + 1);
};
const getType = name => {
    if (isFile(name) === true) {
        return fsType.file;
    }
    return fsType.dir;
};

const resolveURL = url => new Promise(
    resolve => resolveLocalFileSystemURL(url, resolve, () => resolve(null))
);

const get = (name, options = null) => new Promise(
    async (resolve, reject) => {
        const [protocol, fullPath] = getInfo(name);

        if (protocol === null) {
            resolve(await resolveURL(fullPath));
        } else {
            const root = await ((protocol === 'app') ? appFileSystem : tempFileSystem);
            const type = getType(name);

            root[type](
                fullPath,
                options,
                resolve,
                reject
            );
        }
    }
);
const exists = name => new Promise(
    async (resolve, reject) => {
        const [protocol, path] = getInfo(name);
        const type = getType(name);
        const root = await ((protocol === 'app') ? appFileSystem : tempFileSystem);

        root[type](
            path,
            {create: false},
            () => resolve(true),
            err => {
                if (err.code === 1 || err.code === 11) {
                    resolve(false);
                } else {
                    reject(err);
                }
            }
        );
    }
);
const getNativeURL = async (name, isFile) => {
    const [protocol] = getInfo(name);

    if (protocol !== null) {
        const file = await get(name, {create: false});
        return file.nativeURL;
    }

    return name;
};

const readFunctions = {
    text: 'readAsText',
    binary: 'readAsBinaryString',
    url: 'readAsDataURL',
    arraybuffer: 'readAsArrayBuffer'
};
const readfile = (name, type) => new Promise(
    async (resolve, reject) => {
        try {
            const entry = await get(name, {create: false});
            const reader = new FileReader();
            const readFunc = readFunctions[type];

            reader.onloadend = () => resolve(reader.result);
            entry.file(file => reader[readFunc](file, 'utf-8'));
        } catch (error) {
            reject(error);
        }
    }
);
const getFileWriter = entry => new Promise((resolve, reject) => entry.createWriter(resolve, reject));
const writeFile = (fileEntry, data, mode) => new Promise(
    async (resolve, reject) => {
        const fileWriter = await getFileWriter(fileEntry);
        const writeData = () => {
            fileWriter.onwriteend = () => resolve(null);
            fileWriter.write(data);
        };

        if (mode === 'truncate' && fileWriter.length !== 0) {
            fileWriter.seek(0);
            fileWriter.onwriteend = writeData;
            fileWriter.truncate(0);
        } else {
            if (mode === 'append') {
                fileWriter.seek(fileWriter.length);
            }
            writeData();
        }
    }
);

const readdir = name => new Promise(
    async (resolve, reject) => {
        try{
            const [protocol] = getInfo(name);
            const entry = await get(name, {create: false});
            let dirReader = entry.createReader();

            dirReader.readEntries(
                entries => resolve(entries.map(entry => `${protocol}${protoSeparater}${entry.fullPath}`)),
                reject
            );
        } catch(error) {
            reject(error);
        }
    }
);

const removeEntry = (name, functionName) => new Promise(
    async (resolve, reject) => {
        const entry = await get(name);
        entry[functionName](
            () => resolve(true),
            reject
        );
    }
);
const moveEntry = (source, dest) => new Promise(
    async (resolve, reject) => {
        const destName = getName(dest);
        const destPath = getPath(dest);
        const [sourceEntry, destDirEntry] = await Promise.all([
            get(source),
            get(destPath)
        ]);

        sourceEntry.moveTo(
            destDirEntry,
            destName,
            () => resolve(true),
            reject
        );
    }
);
const copyEntry = (source, dest) => new Promise(
    async (resolve, reject) => {
        const destName = getName(dest);
        const destPath = getPath(dest);
        const [sourceEntry, destDirEntry] = await Promise.all([
            get(source),
            get(destPath)
        ]);

        sourceEntry.copyTo(
            destDirEntry,
            destName,
            () => resolve(true),
            reject
        );
    }
);

let rootURL;
(async () => {
    const appRoot = await appFileSystem;
    const tempRoot = await tempFileSystem;

    rootURL = {
        app: appRoot,
        temp: tempRoot
    };
})();

/**
    @type Object
    @name fs
*/
export default {
    /**
        @type Function
        @name fileRead
        @parent fs
        @returns {Promise}
    */
    async fileRead(name, type = 'text') {
        return await readfile(name, type);
    },
    /**
        @type Function
        @name dirRead
        @parent fs
        @returns {Promise}
    */
    async dirRead(name) {
        if (isFile(name) === true) {
            throw new TypeError("Cannot call dirRead on a file");
        }
        return await readdir(name);
    },
    /**
        @type Function
        @name fileWrite
        @parent fs
        @returns {Promise}
    */
    async fileWrite(name, data, mode = 'truncate') {
        const [protocol] = getInfo(name);
        let entry;

        if (protocol === null) {
            throw new Error("Should not be writing to external files directly");
        }

        entry = await get(name, {create: true});
        if (isFile(entry.fullPath) === false) {
            throw new TypeError("Directory exists with that name already");
        }
        if (typeof data === 'string') {
            data = new Blob([data], {type: 'text/plain'});
        }

        await writeFile(entry, data, mode);
        return true;
    },
    /**
        @type Function
        @name fileCreate
        @parent fs
        @returns {Promise}
    */
    async fileCreate(name) {
        return await get(name, {create: true});
    },
    /**
        @type Function
        @name dirCreate
        @parent fs
        @returns {Promise}
    */
    async dirCreate(name) {
        return await get(name, {create: true});
    },
    /**
        @type Function
        @name fileRemove
        @parent fs
        @returns {Promise}
    */
    async fileRemove(name) {
        return await removeEntry(name, 'remove');
    },
    /**
        @type Function
        @name dirRemove
        @parent fs
        @returns {Promise}
    */
    async dirRemove(name, recursive = false) {
        const functionName = (recursive === true) ? "removeRecursively" : "remove";
        return await removeEntry(name, functionName);
    },
    /**
        @type Function
        @name fileExists
        @parent fs
        @returns {Promise}
    */
    fileExists: exists,
    /**
        @type Function
        @name dirExists
        @parent fs
        @returns {Promise}
    */
    dirExists: exists,
    /**
        @type Function
        @name fileMove
        @parent fs
        @returns {Promise}
    */
    async fileMove(source, dest) {
        if (isFile(source) !== isFile(dest)) {
            throw new TypeError("Files can only be moved into other files");
        }
        return await moveEntry(source, dest);
    },
    /**
        @type Function
        @name fileCopy
        @parent fs
        @returns {Promise}
    */
    async fileCopy(source, dest) {
        if (isFile(source) !== isFile(dest)) {
            throw new TypeError("Files can only be moved into other files");
        }
        return await copyEntry(source, dest);
    },
    /**
        @type Function
        @name dirMove
        @parent fs
        @returns {Promise}
    */
    async dirMove(source, dest) {
        if (isFile(source) !== isFile(dest)) {
            throw new TypeError("Directories can only be moved into other files");
        }
        return await moveEntry(source, dest);
    },
    /**
        @type Function
        @name dirTree
        @parent fs
        @returns {Promise}
    */
    async dirTree(name, files = []) {
        const list = await fs.dirRead(name);

        for(const entry of list) {
            files.push(entry);
            if (isFile(entry) === false) {
                await fs.dirTree(entry, files);
            }
        }

        return files;
    },
    /**
        @type Function
        @name url
        @parent fs
        @returns {String}
    */
    url(fileName) {
        const [protocol, fullPath] = getInfo(fileName);
        return `${rootURL[protocol].nativeURL}${fullPath}`;
    },
    /**
        @type Function
        @name entry
        @parent fs
        @returns {Promise}
    */
    async entry(url) {
        return await get(url, {create: false});
    }
};
