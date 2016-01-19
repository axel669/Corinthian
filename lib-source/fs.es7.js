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

const getPrototcol = fileName => fileName.substr(0, fileName.indexOf("://"));
const resolveURL = url => new Promise(
    resolve => resolveLocalFileSystemURL(url, resolve, () => resolve(null))
);

const fsType = {
    file: "getFile",
    dir: "getDirectory"
};
// const create = (root, type, fileName) => new Promise(
//     (resolve, reject) => root[type](fileName, {create: true}, resolve, reject)
// );
const get = (type, fileName, options = null) => new Promise(
    async (resolve, reject) => {
        const protocol = getPrototcol(fileName);
        const root = await ((protocol === 'app') ? appFileSystem : tempFileSystem);

        root[type](
            fileName.slice(protocol.length + 3),
            options,
            resolve,
            reject
        );
    }
);
const exists = (type, fileName) => new Promise(
    async (resolve, reject) => {
        const protocol = getPrototcol(fileName);
        const root = await ((protocol === 'app') ? appFileSystem : tempFileSystem);

        console.log(root, fileName.slice(protocol.length + 3));

        root[type](
            fileName.slice(protocol.length + 3),
            {create: false},
            () => resolve(true),
            err => {
                if (err.code === 1) {
                    resolve(false);
                } else {
                    reject(err);
                }
            }
        );
    }
);
const getNativeURL = async (name, isFile) => {
    const protocol = getPrototcol(name);

    if (protocol === 'app' || protocol === 'temp') {
        const file = get(fsType.file, name);
        return file.nativeURL;
    }

    return name;

    // switch (protocol) {
    //     case 'app': {
    //         const file = await get(fsType.file, name);
    //         return file.nativeURL;
    //     }
    //     case 'temp': {
    //         const file = await getFile(fsType.file, name);
    //         return file.nativeURL;
    //     }
    //     default: {
    //         return name;
    //     }
    // }
};

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

export default {
    file: {
        async exists(fileName) {
            const protocol = getPrototcol(fileName);

            if (protocol !== 'app' && protocol !== 'temp') {
                throw new Error("Should not be checking for external file existence");
            }

            return await exists(fsType.file, name);

            // if (protocol === 'app') {
            //     return await exists(await appFileSystem, fsType.file, fileName.slice(6));
            // }
            // if (protocol === 'temp') {
            //     return await exists(await tempFileSystem, fsType.file, fileName.slice(7));
            // }
        },
        async read(fileName, type = 'text') {
            const nativeURL = await getNativeURL(fileName, true);

            if (type === 'text') {
                type = null;
            }

            return (await factotum.ajax(nativeURL, {type})).response;
        },
        async write(fileName, data, mode = 'truncate') {
            const protocol = getPrototcol(fileName);

            // if (protocol === 'app') {
            //     fileEntry = await create(await appFileSystem, fsType.file, fileName.slice(6));
            // }
            // if (protocol === 'temp') {
            //     fileEntry = await create(await tempFileSystem, fsType.file, fileName.slice(7));
            // }

            if (protocol !== 'app' && protocol !== 'temp') {
                throw new Error("Should not be writing to ecternal files directly");
            }

            if (typeof data === 'string') {
                data = new Blob([data], {type: 'text/plain'});
            }

            return writeFile(await get(fsType.file, name, {create: true}), data, mode);
        }
    },
    resolveURL
};
