var fs;

fs = (function () {
    "use strict";

    var fileSystemPromise;
    var tempFileSystemPromise;
    var fsRoots;

    var fileCopy;
    var fileMove;
    var fileEntry;
    var fileEntryFromURL;
    var fileExists;
    var fileRead;
    var fileWrite;
    var fileRemove;

    var fileWriter;

    var dirCreate;
    var dirEntry;
    var dirList;
    var dirRemove;
    var dirRead;

    fsRoots = {
        app: null,
        temp: null
    };
    fileSystemPromise = fc.promise(
        function (resolve, reject) {
            requestFileSystem(
                LocalFileSystem.PERSISTENT,
                0,
                function (fileSystem) {
                    fsRoots.app = fileSystem.root;
                    resolve(fileSystem.root);
                },
                function (error) {
                    console.error(error);
                    reject(error);
                }
            );
        }
    );
    tempFileSystemPromise = fc.promise(
        function (resolve, reject) {
            requestFileSystem(
                LocalFileSystem.TEMPORARY,
                0,
                function (tempFileSystem) {
                    fsRoots.temp = tempFileSystem.root;
                    resolve(tempFileSystem.root);
                },
                function (error) {
                    console.error(error);
                    reject(error);
                }
            );
        }
    );

    fileEntry = function (fsp, fileName, options) {
        return fsp.then(
            function (fileSys) {
                return fc.promise(
                    function (resolve, reject) {
                        fileSys.getFile(
                            fileName,
                            options || null,
                            resolve,
                            reject
                        );
                    }
                );
            }
        );
    };
    fileEntryFromURL = function (url) {
        return fc.promise(
            function (resolve, reject) {
                resolveLocalFileSystemURL(url, resolve);
            }
        );
    };

    fileWriter = function (sourceFile) {
        return fc.promise(
            function (resolve, reject) {
                sourceFile.createWriter(resolve, reject);
            }
        );
    };
    fileWrite = function (sourceFile, data, mode) {
        var done;

        mode = mode || 'truncate';
        done = fc.promise();

        fileWriter(sourceFile).then(
            function (writer) {
                var writableData;

                writableData = data;
                if (typeof data === 'string') {
                    writableData = new Blob([data], {type: "text/plain"});
                }
                console.log(sourceFile, writableData);

                if (mode === 'truncate' && writer.length !== 0) {
                    writer.seek(0);
                    writer.onwriteend = function () {
                        writer.onwriteend = function () {
                            done.resolve(null);
                        };
                        writer.write(writableData);
                    };
                    writer.truncate(0);
                    return;
                }

                if (mode === 'append') {
                    writer.seek(writer.length);
                }
                writer.onwriteend = function () {
                    done.resolve(null);
                };
                writer.write(writableData);
            }
        );

        return done;
    };

    fileRead = function (sourceFile, type) {
        type = type || 'text';

        return fc.promise(
            function (resolve, reject) {
                sourceFile.file(function (file) {
                    var reader;

                    reader = new FileReader();
                    reader.onloadend = function () {
                        resolve(reader.result);
                    };

                    switch(type) {
                        case 'text': {
                            reader.readAsText(file);
                            break;
                        }
                        case 'url': {
                            reader.readAsDataURL(file);
                            break;
                        }
                        default: {
                            throw new Error("Unknown read type: "+type);
                        }
                    }
                });
            }
        );
    };

    fileExists = function (fsp, fileName, options) {
        return fsp.then(
            function (fileSys) {
                return fc.promise(
                    function (resolve, reject) {
                        fileSys.getFile(
                            fileName,
                            options || null,
                            function () {
                                resolve(true);
                            },
                            function (error) {
                                if (error.code === FileError.NOT_FOUND_ERR) {
                                    resolve (false);
                                } else {
                                    reject(error);
                                }
                            }
                        );
                    }
                );
            }
        );
    };

    fileCopy = function (sourceFile, destFolder, fileName) {
        return fc.promise(
            function (resolve, reject) {
                sourceFile.copyTo(destFolder, fileName, resolve, reject);
            }
        );
    };
    fileMove = function (sourceFile, destFolder, fileName) {
        return fc.promise(
            function (resolve, reject) {
                sourceFile.moveTo(destFolder, fileName, resolve, reject);
            }
        );
    };

    fileRemove = function (sourceFile) {
        return fc.promise(
            function (resolve, reject) {
                if (sourceFile.isFile === true) {
                    sourceFile.remove(resolve, reject);
                } else {
                    sourceFile.removeRecursively(resolve, reject);
                }
            }
        );
    };

    dirEntry = function (fsp, dirName, options) {
        return fsp.then(
            function (fileSys) {
                return fc.promise(
                    function (resolve, reject) {
                        fileSys.getDirectory(
                            dirName,
                            options || null,
                            resolve,
                            reject
                        );
                    }
                );
            }
        );
    };

    dirCreate = function (fsp, dirName) {
        return dirEntry(fsp, dirName, {create: true});
    };

    dirRead = function (sourceDir) {
        return fc.promise(
            function (resolve, reject) {
                var reader;

                reader = sourceDir.createReader();
                reader.readEntries(resolve, reject);
            }
        );
    };

    return Object.freeze({
        resolveURL: fileEntryFromURL,
        copy: function (sourceFile, destFolder, fileName) {
            var fileNameFunc;

            fileNameFunc = fileName;
            if (typeof fileName === 'string') {
                fileNameFunc = function () {
                    return fileName;
                };
            }
            if (Array.isArray(sourceFile) === false) {
                sourceFile = [sourceFile];
            }

            return fc.promise.all.apply(
                null,
                sourceFile.map(
                    function (source, index) {
                        return fileCopy(source, destFolder, fileNameFunc(source, index));
                    }
                )
            );
        },
        move: function (sourceFile, destFolder, fileName) {
            var fileNameFunc;

            fileNameFunc = fileName;
            if (typeof fileName === 'string') {
                fileNameFunc = function () {
                    return fileName;
                };
            }
            if (Array.isArray(sourceFile) === false) {
                sourceFile = [sourceFile];
            }

            return fc.promise.all.apply(
                null,
                sourceFile.map(
                    function (source, index) {
                        return fileMove(source, destFolder, fileNameFunc(source, index));
                    }
                )
            );
        },
        read: function (sourceFile, type) {
            if (Array.isArray(sourceFile) === false) {
                sourceFile = [sourceFile];
            }

            return fc.promise.all.apply(
                null,
                sourceFile.map(
                    function (source) {
                        if (source.isFile === true) {
                            return fileRead(source, type);
                        } else {
                            return dirRead(source);
                        }
                    }
                )
            );
        },
        write: function (sourceFile, data, mode) {
            if (Array.isArray(data) === false) {
                data = [data];
            }
            if (Array.isArray(sourceFile) === false) {
                sourceFile = [sourceFile];
            }

            return fc.promise.all.apply(
                null,
                sourceFile.map(
                    function (source, index) {
                        return fileWrite(source, data[index], mode);
                    }
                )
            );
        },
        remove: function (sourceFile) {
            if (Array.isArray(sourceFile) === false) {
                sourceFile = [sourceFile];
            }

            return fc.promise.all.apply(
                null,
                sourceFile.map(
                    function (source) {
                        return fileRemove(source);
                    }
                )
            );
        },
        root: fsRoots,
        file: Object.freeze({
            create: function (fileName) {
                return fileEntry(fileSystemPromise, fileName, {create: true});
            },
            entry: function (fileName, options) {
                return fileEntry(fileSystemPromise, fileName, options);
            },
            exists: function (fileName, options) {
                return fileExists(fileSystemPromise, fileName, options);
            }
        }),
        dir: Object.freeze({
            create: function (dirName) {
                return dirCreate(fileSystemPromise, dirName);
            },
            entry: function (dirName, options) {
                return dirEntry (fileSystemPromise, dirName, options);
            }
        }),
        fsp: fileSystemPromise,
        tfsp: tempFileSystemPromise
    });
})();
