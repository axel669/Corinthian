import factotum from "lib-source/factotum.es7.js";

let readLocal;
let writeLocal;
let removeLocal

let tables;
let push;
let filter;
let remove;
let getID;
let removeID;
let createTable;

let table;


let loadTable;
let queueUpdate;

loadTable = name => {
    let tableKey;
    let rows;
    let info;

    let push;
    let filter;
    let getID;
    let update;
    let updateID;
    let remove;
    let removeID;

    tableKey = `table:${name}`;
    info = readLocal(tableKey);

    rows = {};
    for(let rowID of info.entries) {
        rows[rowID] = readLocal(`${tableKey}:${rowID}`);
    }

    push = data => {
        data = {
            ...data,
            rowID: info.nextID
        };
        info.nextID += 1;
        info.entries.push(data.rowID);

        queueUpdate(info, [data]);
    };

    filter = predicate => {
        return info.entries.filter(rowID => predicate(rows[rowID])).map(id => rows[id]);
    };

    getID = id => {
        if (rows.hasOwnProperty(id) === true) {
            return rows[id];
        }
        return null;
    };

    update = (predicate, updateFunc) => {
        let updates;

        updates = [];
        info.entries.forEach(rowID => {
            let row;

            row = rows[rowID];
            if (predicate(row) === true) {
                row = updateFunc({...row});
                rows[rowID] = row;
                updates.push(row);
            }
        });

        queueUpdate(name, updates);

        return updates;
    };
    updateID = (id, data) => {
        let row;

        row = {
            ...rows[id],
            ...data
        };
        rows[id] = row;
        queueUpdate(info, [row]);
        return row;
    };

    remove = predicate => {
        let updates;
        let entries;

        updates = [];
        info.entries = info.entries.filter(id => {
            let row;

            row = rows[id];
            if (predicate(row) === true) {
                updates.push(row);
                return false;
            }

            return true;
        });

        queueUpdate(info, updates);
        return updates;
    };

    return {
        push,
        filter,
        getID,
        update,
        updateID,
        remove
    };
};

queueUpdate = (info, rows, remove = false) => {
    process.nextTick(() => {
        let tableKey;

        tableKey = `table:${info.name}`;
        rows.forEach(row => {
            let {rowID} = row;
            if (remove === true) {
                removeLocal(`${tableKey}:${rowID}`);
            } else {
                writeLocal(`${tableKey}:${rowID}`, row);
            }
        });
        writeLocal(tableKey, info);
    });
};


readLocal = (key, def) => {
    let value;

    value = localStorage.getItem(key);
    if (value !== null) {
        value = JSON.parse(value);
    } else {
        value = def;
    }

    return value;
};
writeLocal = (key, value) => {
    localStorage[key] = JSON.stringify(value);
};
removeLocal = key => localStorage.removeItem(key);

tables = readLocal("microdb:tables", []);

table = name => {
    let info;
    let tableKey;

    tableKey = `table:${name}`;
    info = readLocal(tableKey);
    return {
        filter: func => filter(info, func),
        push: data => {
            let row;

            row = push(info, data);
            writeLocal(tableKey, info);

            return row;
        },
        remove: func => {
            remove(info, func);
            writeLocal(tableKey, info);
        },
        getID: id => getID(info, id),
        removeID: id => {
            removeID(info, id);
            writeLocal(tableKey, info);
        },
        reset: () => {
            info.entries.forEach(entry => {
                localStorage.removeItem(`${tableKey}:${entry}`);
            });
            info.nextID = 0;
            info.entries = [];
            writeLocal(tableKey, info);
        }
    };
};

push = (table, data) => {
    let rowKey;

    data = {
        ...data,
        rowID: table.nextID
    };
    table.nextID += 1;
    table.entries.push(data.rowID);

    rowKey = `table:${table.name}:${data.rowID}`;
    writeLocal(rowKey, data);

    return data;
    // localStorage[rowKey] = JSON.stringify(data);
};
filter = (table, test) => {
    let results;

    results = [];
    table.entries.forEach(entry => {
        let data;

        data = readLocal(`table:${table.name}:${entry}`);
        if (test(data) === true) {
            results.push(data);
        }
    });

    return results;
};
remove = (table, test) => {
    let removedIDs;
    let remainingIDs;

    removedIDs = [];
    remainingIDs = [];

    table.entries.forEach(entry => {
        let data;

        data = readLocal(`table:${table.name}:${entry}`);
        if (test(data) === true) {
            removedIDs.push(entry);
        } else {
            remainingIDs.push(entry);
        }
    });

    table.entries = remainingIDs;
    removedIDs.forEach(entry => localStorage.removeItem(`table:${table.name}:${entry}`));
};
getID = (table, id) => {
    let key;

    key = `table:${table.name}:${id}`;
    if (localStorage.hasOwnProperty(key) === true) {
        return readLocal(key);
    }

    return null;
};
removeID = (table, id) => {
    let index;

    index = table.entries.indexOf(id);
    if (index === -1) {
        return;
    }
    table.entries = factotum.remove(table.entries, index);
    localStorage.removeItem(`table:${table.name}:${id}`);
};

createTable = name => {
    let tableName;
    tableName = `table:${name}`;
    if (localStorage.hasOwnProperty(tableName) === false) {
        // localStorage[tableName] = JSON.stringify({nextID: 0, entries: [], name});
        writeLocal(tableName, {nextID: 0, entries: [], name});
        tables.push(name);
        writeLocal("microdb:tables", tables);
    }

    return table(name);
};

export default {
    table: name => createTable(name),
    newTable: name => loadTable(name),
    get tableList () {
        return tables;
    }
};
