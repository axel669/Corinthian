var args = require("minimist")(process.argv.slice(2), {default: {t: []}});

console.log(args);
