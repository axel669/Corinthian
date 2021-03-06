import "external/zip.js";
import "external/zip-ext.js";

import deflateSource from "external/deflate.js.source";
import inflateSource from "external/inflate.js.source";
import workerSource from "external/z-worker.js.source";

const zip = window.zip;
const createURL = source => {
    const blob = new Blob([source], {type: "application/javascript"});
    return URL.createObjectURL(blob);
};

const workerURL = createURL(workerSource);
const inflateURL = createURL(inflateSource);
const deflateURL = createURL(deflateSource);

zip.workerScripts = {
    inflater: [workerURL, inflateURL],
    deflater: [workerURL, deflateURL]
};

const zipLib = zip;

const readEntry = (entry, writer) => new Promise(
    resolve => entry.getData(writer, resolve)
);
const zipEntry = entry => {
    return {
        readText() {
            return readEntry(entry, new zipLib.TextWriter());
        },
        readBlob() {
            return readEntry(entry, new zipLib.BlobWriter());
        },
        get entry() {
            return entry;
        }
    };
};

const readArrayBuffer = buffer => new Promise(
    (resolve, reject) => {
        zipLib.createReader(
            new zipLib.ArrayBufferReader(buffer),
            reader => {
                reader.getEntries(entries => resolve([entries, reader]));
            }
        );
    }
);
const download = async (url, onProgress) => {
    const buffer = await ajax(url, {type: 'arraybuffer', onProgress});
    return await readArrayBuffer(buffer.response);
};

/**
    @type constructor [internal]
    @name ZipFile
*/
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
    const files = entries.sort(entrySort).reduce(
        (collection, entry) => {
            collection[entry.filename] = entry;
            return collection;
        },
        {}
    );
    entries = entries.sort(entrySort);

    return {
        /**
            @type Function
            @name getFile
            @parent ZipFile
        */
        getFile(name) {
            if (files.hasOwnProperty(name) === true) {
                return zipEntry(files[name]);
            }
            return null;
        },
        /**
            @type Function
            @name getEntries
            @parent ZipFile
        */
        getEntries() {
            return entries.map(zipEntry);
        },
        /**
            @type Function
            @name extractTo
            @parent ZipFile
        */
        async extractTo(dest, onProgress = () => {}) {
            let index;

            index = 0;
            for(const entry of entries) {
                const {filename} = entry;

                if (entry.directory === true) {
                    await fs.dirCreate(`${dest}${filename}`);
                } else {
                    await fs.fileWrite(
                        `${dest}${filename}`,
                        await zipEntry(entry).readBlob()
                    );
                }
                index += 1;
                onProgress({
                    extracted: index,
                    total: entries.length,
                    currentFile: zipEntry(entry),
                    nextFile: (index < entries.length) ? zipEntry(entries[index]) : null
                });
            }
            return true;
        },
        close() {
            reader.close();
        }
    };
};

/**
    @type Object
    @name zip
*/
export default {
	/**
		@name download
		@type Function
		@parent zip
        @desc Downloads a zip file and gives back the ZipFile object for it.
        @param {String} url
            The url of the zip file.
        @param {Function} [optional] onProgress
        	A function to call while the zip file is being downloaded.
        @return {Promise}
	*/
    async download(url, onProgress) {
        const zipInfo = await download(url, onProgress);
        return zipFile(zipInfo);
    }
};
