import "external/zip.js";
import "external/zip-ext.js";

import deflateSource from "external/deflate.js.source";
import inflateSource from "external/inflate.js.source";
import workerSource from "external/z-worker.js.source";

const createURL = source => {
    const blob = new Blob([source], {type: "application/javascript"});
    return URL.createObjectURL(blob);
};

const workerURL = createURL(workerSource);
const inflateURL = createURL(inflateSource);
const deflateURL = createURL(deflateSource);

// zip.workerScriptsPath = workerURL;
zip.workerScripts = {
    inflater: [workerURL, inflateURL],
    deflater: [workerURL, deflateURL]
};

const zipLib = zip;

window.zip = null;

// let Zip;
// let ZipEntry;

// let read;

// read = (entry, writer) => {
//     return new Promise(
//         resolve => entry.getData(writer, data => resolve(data))
//     );
// };

// ZipEntry = (entry) => {
//     return {
//         readText: () => read(entry, new zip.TextWriter()),
//         readBlob: () => read(entry, new zip.BlobWriter()),
//         entry
//     };
// };
// Zip = (entries, reader) => {
//     let setFileObj;

//     entries = entries.sort((a, b) => {
//         if (a.filename < b.filename) {
//             return -1;
//         }
//         if (a.filename > b.filename) {
//             return 1;
//         }
//         return 0;
//     });
//     console.log(entries);

//     setFileObj = (obj, name, value) => {
//         let current;

//         name = name.replace(/\/$/, "").split("/");
//         if (value.entry.directory === true) {
//             value = {};
//         }

//         current = obj;
//         name.slice(0, -1).forEach(prop => current = current[prop]);
//         current[name.slice(-1)[0]] = value;
//     };

//     return {
//         files: entries.reduce(
//             (files, entry) => {
//                 setFileObj(files, entry.filename, ZipEntry(entry));
//                 // files[entry.filename] = ZipEntry(entry);
//                 return files;
//             },
//             {}
//         ),
//         fileList: entries.map(ZipEntry),
//         close () {
//             reader.close();
//         }
//     };
// };
// Zip.download = (url) => {
//     return new Promise(
//         (resolve, reject) => {
//             zip.createReader(new zip.HttpReader(url), reader => {
//                 reader.getEntries(entries => {
//                     resolve(Zip(entries, reader));
//                 });
//             });
//         }
//     );
// };
// Zip.readArrayBuffer = buffer => {
//     return new Promise(
//         (resolve, reject) => {
//             zip.createReader(new zip.ArrayBufferReader(buffer), reader => {
//                 reader.getEntries(entries => {
//                     resolve(Zip(entries, reader));
//                 });
//             });
//         }
//     );
// };

const download = url => new Promise(
    (resolve, reject) => {
        zipLib.createReader(
            new zipLib.HttpReader(url),
            reader => {
                reader.getEntries(entries => resolve([entries, reader]));
            }
        );
    }
);

const zipFile = ([entries, reader]) => {
    const entrySort = (first, second) => {
        if (first.filename < second.filename) {
            return -1;
        }
        if (first.filename > second.filename) {
            return 1;
        }
        return 0;
    };

    entries = entries.sort(entrySort);

    console.log(entries);

    return {
        getFile(
        close() {
            reader.close();
        }
    };
};

export default {
    async download(url) {
        const zipInfo = await download(url);
        return zipFile(zipInfo);
    }
};
