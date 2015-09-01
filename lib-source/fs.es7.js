let appFileSystem;
let tempFileSystem;

let resolveURL;

let createFile;
let getEntry;
let exists;
let read;
let write;
let move;
let copy;
let removeFile;

let createDir;
let getDirEntry;
let moveDir;
let copyDir;
let readDir;
let removeDir;
let dirExists;

let genFileFunctions;
let genDirFunctions;

appFileSystem = new Promise(
    (resolve, reject) => {
        requestFileSystem(
            LocalFileSystem.PERSISTENT,
            0,
            fs => resolve(fs.root),
            error => reject(error)
        );
    }
);
tempFileSystem = new Promise(
    (resolve, reject) => {
        requestFileSystem(
            LocalFileSystem.TEMPORARY,
            0,
            fs => resolve(fs.root),
            error => reject(error)
        );
    }
);

resolveURL = url => {
    return new Promise(
        resolve => resolveLocalFileSystemURL(url, resolve)
    );
};

createFile = (fs, name) => getEntry(fs, name, {create: true});

getEntry = (fs, name, options) => {
    return new Promise(
        (resolve, reject) => {
            fs.getFile(name, options || null, resolve, reject);
        }
    );
};

exists = (fs, name) => {
    return new Promise(
        (resolve, reject) => {
            fs.getFile(
                name,
                null,
                () => resolve(true),
                (error) => {
                    if (error.code === FileError.NOT_FOUND_ERR) {
                        resolve(false);
                    } else {
                        resolve(error);
                    }
                }
            );
        }
    );
};

read = (entry, type) => {
    return new Promise(
        (resolve, reject) => {
            entry.file(
                file => {
                    let reader;

                    reader = new FileReader();
                    type = type || 'text';

                    reader.onloadend = () => resolve(reader.result);

                    switch (type) {
                        case "text":
                            reader.readAsText(file);
                            break;
                        case "url":
                            reader.readAsDataURL(file);
                            break;
                        default:
                            throw new Error(`Unknown file read type: ${type}`);
                    }
                }
            );
        }
    );
};

write = (entry, data, mode) => {
    return new Promise(
        async (resolve, reject) => {
            let fileWriter;
            let writeData;

            fileWriter = await write.getWriter(entry);

            mode = mode || 'truncate';
            if (typeof data === 'string') {
                data = new Blob([data], {type: "text/plain"});
            }

            writeData = () => {
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
};
write.getWriter = entry => new Promise((resolve, reject) => entry.createWriter(resolve, reject));

move = (entry, destFolder, destName) => {
    destName = destName || entry.name;
    return new Promise(
        (resolve, reject) => {
            entry.moveTo(destFolder, destName, resolve, reject);
        }
    );
};
copy = (entry, destFolder, destName) => {
    destName = destName || entry.name;
    return new Promise(
        (resolve, reject) => {
            entry.copyTo(destFolder, destName, resolve, reject);
        }
    );
};

removeFile = (entry) => {
    return new Promise(
        (resolve, reject) => entry.remove(resolve, reject)
    );
};


createDir = (fs, name) => getDirEntry(fs, name, {create: true});

getDirEntry = (fs, name, options) => {
    return new Promise(
        (resolve, reject) => {
            fs.getDirectory(name, options || null, resolve, reject);
        }
    );
};

readDir = (entry) => {
    return new Promise(
        (resolve, reject) => {
            let reader;

            reader = entry.createReader();
            reader.readEntries(resolve, reject);
        }
    );
};

moveDir = (entry, destFolder, destName) => {
    destName = destName || entry.name;
    return new Promise(
        (resolve, reject) => {
            entry.moveTo(destFolder, destName, resolve, reject);
        }
    );
};
copyDir = (entry, destFolder, destName) => {
    destName = destName || entry.name;
    return new Promise(
        (resolve, reject) => {
            entry.copyTo(destFolder, destName, resolve, reject);
        }
    );
};
removeDir = (entry) => {
    return new Promise(
        (resolve, reject) => entry.removeRecursively(resolve, reject)
    );
};

dirExists = (fs, name) => {
    return new Promise(
        (resolve, reject) => {
            fs.getDirectory(
                name,
                null,
                () => resolve(true),
                (error) => {
                    if (error.code === FileError.NOT_FOUND_ERR) {
                        resolve(false);
                    } else {
                        resolve(error);
                    }
                }
            );
        }
    );
};


genFileFunctions = (fileSys) => {
    return {
        create: async name => {
            let fs;
            fs = await fileSys;
            return await createFile(fs, name);
        },
        entry: async (name, options) => {
            let fs;
            fs = await fileSys;
            return await getEntry(fs, name, options);
        },
        exists: async name => {
            let fs;
            fs = await fileSys;
            return await exists(fs, name);
        },
        remove: removeFile,
        read,
        write,
        move,
        copy
    };
};

genDirFunctions = (fileSys) => {
    return {
        create: async name => {
            let fs;
            fs = await fileSys;
            return await createDir(fs, name);
        },
        entry: async name => {
            let fs;
            fs = await fileSys;
            return await getDirEntry(fs, name);
        },
        exists: async name => {
            let fs;
            fs = await fileSys;
            return await dirExists(fs, name);
        },
        move: moveDir,
        copy: copyDir,
        read: readDir,
        remove: removeDir
    };
};

export default {
    file: genFileFunctions(appFileSystem),
    dir: genDirFunctions(appFileSystem),
    temp: {
        file: genFileFunctions(tempFileSystem),
        dir: genDirFunctions(tempFileSystem)
    },
    resolveURL
};
