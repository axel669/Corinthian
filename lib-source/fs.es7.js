// let appFileSystem;
// let tempFileSystem;

// let resolveURL;

// let createFile;
// let getEntry;
// let exists;
// let read;
// let write;
// let move;
// let copy;
// let removeFile;

// let createDir;
// let getDirEntry;
// let moveDir;
// let copyDir;
// let readDir;
// let removeDir;
// let dirExists;

// let genFileFunctions;
// let genDirFunctions;

// appFileSystem = new Promise(
//     (resolve, reject) => {
//         if (typeof requestFileSystem === 'undefined') {
//             resolve(null);
//             return;
//         }
//         requestFileSystem(
//             LocalFileSystem.PERSISTENT,
//             0,
//             fs => resolve(fs.root),
//             error => reject(error)
//         );
//     }
// );
// tempFileSystem = new Promise(
//     (resolve, reject) => {
//         if (typeof requestFileSystem === 'undefined') {
//             resolve(null);
//             return;
//         }
//         requestFileSystem(
//             LocalFileSystem.TEMPORARY,
//             0,
//             fs => resolve(fs.root),
//             error => reject(error)
//         );
//     }
// );

// resolveURL = url => {
//     return new Promise(
//         resolve => resolveLocalFileSystemURL(url, resolve)
//     );
// };

// createFile = (fs, name) => getEntry(fs, name, {create: true});

// getEntry = (fs, name, options) => {
//     return new Promise(
//         (resolve, reject) => {
//             fs.getFile(name, options || null, resolve, reject);
//         }
//     );
// };

// exists = (fs, name) => {
//     return new Promise(
//         (resolve, reject) => {
//             fs.getFile(
//                 name,
//                 null,
//                 () => resolve(true),
//                 (error) => {
//                     if (error.code === FileError.NOT_FOUND_ERR) {
//                         resolve(false);
//                     } else {
//                         resolve(error);
//                     }
//                 }
//             );
//         }
//     );
// };

// read = (entry, type = null) => {
//     return new Promise(
//         async (resolve, reject) => {
//             try {
//                 let ajaxRes = await factotum.ajax.get(entry.nativeURL, {type});
//                 resolve(ajaxRes.response);
//             } catch(e) {
//                 reject(e);
//             }
//         }
//     );
// };

// write = (entry, data, mode) => {
//     return new Promise(
//         async (resolve, reject) => {
//             let fileWriter;
//             let writeData;

//             fileWriter = await write.getWriter(entry);

//             mode = mode || 'truncate';
//             if (typeof data === 'string') {
//                 data = new Blob([data], {type: "text/plain"});
//             }

//             writeData = () => {
//                 fileWriter.onwriteend = () => resolve(null);
//                 fileWriter.write(data);
//             };

//             if (mode === 'truncate' && fileWriter.length !== 0) {
//                 fileWriter.seek(0);
//                 fileWriter.onwriteend = writeData;
//                 fileWriter.truncate(0);
//             } else {
//                 if (mode === 'append') {
//                     fileWriter.seek(fileWriter.length);
//                 }
//                 writeData();
//             }
//         }
//     );
// };
// write.getWriter = entry => new Promise((resolve, reject) => entry.createWriter(resolve, reject));

// move = (entry, destFolder, destName) => {
//     destName = destName || entry.name;
//     return new Promise(
//         (resolve, reject) => {
//             entry.moveTo(destFolder, destName, resolve, reject);
//         }
//     );
// };
// copy = (entry, destFolder, destName) => {
//     return new Promise(
//         async (resolve, reject) => {
//             try {
//                 destName = destName || entry.name;
//                 let fileBlob = await fs.file.read(entry, 'blob');
//                 await write(await fs.file.create(destFolder.fullPath + destName), fileBlob, 'truncate');
//                 resolve(true);
//             } catch(e) {
//                 reject(e);
//             }
//         }
//     );
//     // destName = destName || entry.name;
//     // return new Promise(
//     //     (resolve, reject) => {
//     //         entry.copyTo(destFolder, destName, resolve, reject);
//     //     }
//     // );
// };

// removeFile = (entry) => {
//     return new Promise(
//         (resolve, reject) => entry.remove(resolve, reject)
//     );
// };


// createDir = (fs, name) => getDirEntry(fs, name, {create: true});

// getDirEntry = (fs, name, options) => {
//     return new Promise(
//         (resolve, reject) => {
//             fs.getDirectory(name, options || null, resolve, reject);
//         }
//     );
// };

// readDir = (entry) => {
//     return new Promise(
//         (resolve, reject) => {
//             let reader;

//             reader = entry.createReader();
//             reader.readEntries(resolve, reject);
//         }
//     );
// };

// moveDir = (entry, destFolder, destName) => {
//     destName = destName || entry.name;
//     return new Promise(
//         (resolve, reject) => {
//             entry.moveTo(destFolder, destName, resolve, reject);
//         }
//     );
// };
// copyDir = (entry, destFolder, destName) => {
//     destName = destName || entry.name;
//     return new Promise(
//         (resolve, reject) => {
//             entry.copyTo(destFolder, destName, resolve, reject);
//         }
//     );
// };
// removeDir = (entry) => {
//     return new Promise(
//         (resolve, reject) => entry.removeRecursively(resolve, reject)
//     );
// };

// dirExists = (fs, name) => {
//     return new Promise(
//         (resolve, reject) => {
//             fs.getDirectory(
//                 name,
//                 null,
//                 () => resolve(true),
//                 (error) => {
//                     if (error.code === FileError.NOT_FOUND_ERR) {
//                         resolve(false);
//                     } else {
//                         resolve(error);
//                     }
//                 }
//             );
//         }
//     );
// };


// genFileFunctions = (fileSys) => {
//     return {
//         create: async name => {
//             let fs;
//             fs = await fileSys;
//             return await createFile(fs, name);
//         },
//         entry: async (name, options) => {
//             let fs;
//             fs = await fileSys;
//             return await getEntry(fs, name, options);
//         },
//         exists: async name => {
//             let fs;
//             fs = await fileSys;
//             return await exists(fs, name);
//         },
//         remove: removeFile,
//         read,
//         write,
//         move,
//         copy
//     };
// };

// genDirFunctions = (fileSys) => {
//     return {
//         create: async name => {
//             let fs;
//             fs = await fileSys;
//             return await createDir(fs, name);
//         },
//         entry: async name => {
//             let fs;
//             fs = await fileSys;
//             return await getDirEntry(fs, name);
//         },
//         exists: async name => {
//             let fs;
//             fs = await fileSys;
//             return await dirExists(fs, name);
//         },
//         move: moveDir,
//         copy: copyDir,
//         read: readDir,
//         remove: removeDir
//     };
// };

// export default {
//     file: genFileFunctions(appFileSystem),
//     dir: genDirFunctions(appFileSystem),
//     temp: {
//         file: genFileFunctions(tempFileSystem),
//         dir: genDirFunctions(tempFileSystem)
//     },
//     resolveURL,
//     appFileSystem
// };

const appFileSystem = new Promise(
    (resolve, reject) => {
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
    (resolve, reject) => {
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

const readfile = async (name, type) => {
    const nativeURL = await getNativeURL(name, true);
    let ajaxResponse;

    if (type === 'text') {
        type = null;
    }

    ajaxResponse = await factotum.ajax(nativeURL, {type});
    return ajaxResponse.response;
}
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
    async (resove, reject) => {
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

export default {
    async fileRead(name, type = 'text') {
        return await readfile(name, type);
    },
    async dirRead(name) {
        if (isFile(name) === true) {
            throw new TypeError("Cannot call dirRead on a file");
        }
        return await readdir(name);
    },
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
    async fileCreate(name) {
        return await get(name, {create: true});
    },
    async dirCreate(name) {
        return await get(name, {create: true});
    },
    async fileRemove(name) {
        return await removeEntry(name, 'remove');
    },
    async dirRemove(name, recursive = false) {
        const functionName = (recursive === true) ? "removeRecursively" : "remove";
        return await removeEntry(name, functionName);
    },
    fileExists: exists,
    dirExists: exists,
    async fileMove(source, dest) {
        if (isFile(source) !== isFile(dest)) {
            throw new TypeError("Files can only be moved into other files");
        }
        return await moveEntry(source, dest);
    },
    async fileCopy(source, dest) {
        if (isFile(source) !== isFile(dest)) {
            throw new TypeError("Files can only be moved into other files");
        }
        return await copyEntry(source, dest);
    },
    async dirTree(name) {
        const list = await fs.dirRead(name);
        let files;

        files = [];
    },
    url(fileName) {
        const [protocol, fullPath] = getInfo(fileName);
        return `${rootURL[protocol].nativeURL}${fullPath}`;
    }
};
