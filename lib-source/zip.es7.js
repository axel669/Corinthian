let Zip;
let ZipEntry;

let read;

read = (entry, writer) => {
    return new Promise(
        resolve => entry.getData(writer, data => resolve(data))
    );
};

ZipEntry = (entry) => {
    return {
        readText: () => read(entry, new zip.TextWriter()),
        readBlob: () => read(entry, new zip.BlobWriter()),
        entry
    };
};
Zip = (entries, reader) => {
    let setFileObj;

    entries = entries.sort((a, b) => {
        if (a.filename < b.filename) {
            return -1;
        }
        if (a.filename > b.filename) {
            return 1;
        }
        return 0;
    });
    console.log(entries);

    setFileObj = (obj, name, value) => {
        let current;

        name = name.replace(/\/$/, "").split("/");
        if (value.entry.directory === true) {
            value = {};
        }

        current = obj;
        name.slice(0, -1).forEach(prop => current = current[prop]);
        current[name.slice(-1)[0]] = value;
    };

    return {
        files: entries.reduce(
            (files, entry) => {
                setFileObj(files, entry.filename, ZipEntry(entry));
                // files[entry.filename] = ZipEntry(entry);
                return files;
            },
            {}
        ),
        fileList: entries.map(ZipEntry),
        close () {
            reader.close();
        }
    };
};
Zip.download = (url) => {
    return new Promise(
        (resolve, reject) => {
            zip.createReader(new zip.HttpReader(url), reader => {
                reader.getEntries(entries => {
                    resolve(Zip(entries, reader));
                });
            });
        }
    );
};
Zip.readArrayBuffer = buffer => {
    return new Promise(
        (resolve, reject) => {
            zip.createReader(new zip.ArrayBufferReader(buffer), reader => {
                reader.getEntries(entries => {
                    resolve(Zip(entries, reader));
                });
            });
        }
    );
};

export default {Zip};
