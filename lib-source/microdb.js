import factotum from "lib-source/factotum.es7.js";

let readLocal;
let writeLocal;
let removeLocal

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

export default {
    table: name => loadTable(name),
    get tableList () {
        return tables;
    }
};
