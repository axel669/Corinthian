const axeldocParser = require("./axeldoc-parser.js");
const fs = require("fs");

const mergeModule = (dest, source) => {
    for (const entry of Object.entries(source)) {
        const [key, value] = entry;
        console.log(key);
    }
};

const glob = async (dir, pattern, exclusions = []) => {
    const list = await afs.readdirr(dir);
    const exclude = new Set(exclusions);
    return list.filter(
        file => pattern.test(file) === true && exclude.has(file) === false
    ).sort();
};
const getDocs = string => {
    const match = /\/\* \-AxelDoc\-((.|\r|\n)+?)\*\//gm.exec(string);
    if (match !== null) {
        return match[1];
    }
    return "";
};

// fs.readFile(
//     "lib-source/ui/button.js",
//     {encoding: 'utf8'},
//     (err, data) => {
//         console.log(
//             axeldocParser.parse(
//                 /\/\* \-AxelDoc\-((.|\r|\n)+?)\*\//gm.exec(data)[1]
//             )
//         );
//     }
// );

const afs = Object.freeze({
    readdir (dir) {
        return new Promise(
            resolve =>
                fs.readdir(dir, (err, files) => resolve(files))
        );
    },
    readdirr (dir) {
        return new Promise(
            async resolve => {
                const files = (await afs.readdir(dir)).map(file => `${dir}/${file}`);
                const stats = (await Promise.all(files.map(file => afs.stat(file)))).map(stat => stat.isDirectory());
                let finalList;

                finalList = files;
                for (const [index, isDir] of Object.entries(stats)) {
                    // console.log("checking", files[index], isDir);
                    if (isDir === true) {
                        finalList = [
                            ...finalList,
                            ...(await afs.readdirr(files[index]))
                        ];
                    }
                }
                resolve(finalList);
            }
        );
    },
    stat (path) {
        return new Promise(
            resolve =>
                fs.stat(path, (err, stats) => resolve(stats))
        );
    },
    readFile (file, options = {encoding: 'utf8'}) {
        return new Promise(
            resolve =>
                fs.readFile(file, options, (err, data) => resolve(data))
        );
    }
});

(async () => {
    try {
        const files = await glob("lib-source", /\.js$/);
        const allTheData = await Promise.all(files.map(file => afs.readFile(file)));
        const docs = allTheData.map(data => getDocs(data));

        fs.writeFile("docs.js", docs.join("\n"), {encoding: 'utf8'});
    } catch (e) {
        console.error(e);
    }
})();
