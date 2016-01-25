const definedStyles = {};

const getClassName = (name) => {
    return name.replace(/\//g, "_")
            .replace(":", '-')
            .toLowerCase();
};
const genClassName = name => `.${getClassName(name)}`;

const parseKeyPiece = (lib, key) => {
    switch (key.charAt(0)) {
        case '.': {
            return genClassName(`${lib}:${key.slice(1)}`);
        }

        case "$": {
            return genClassName(key.slice(1).trim());
        }

        case ">": {
            return `> ${parseKeyPiece(lib, key.slice(1).trim())}`;
        }

        case ":": {
            return key;
        }

        case "~": {
            return key.slice(1).trim();
        }
    }
};
const parseKey = (lib, key) => {
    return key.split("+")
            .map(key => parseKeyPiece(lib, key.trim()));
};

const cssNoMeasurement = new Set([
    "animationIterationCount",
    "boxFlex",
    "boxFlexGroup",
    "boxOrdinalGroup",
    "columnCount",
    "fillOpacity",
    "flex",
    "flexGrow",
    "flexPositive",
    "flexShrink",
    "flexNegative",
    "flexOrder",
    "fontWeight",
    "lineClamp",
    "lineHeight",
    "opacity",
    "order",
    "orphans",
    "stopOpacity",
    "strokeDashoffset",
    "strokeOpacity",
    "strokeWidth",
    "tabSize",
    "widows",
    "zIndex",
    "zoom"
]);
const getCSSValue = (name, value) => {
    if (typeof value === 'function') {
        value = value();
    }

    if (typeof value === 'number' && cssNoMeasurement.has(name) === false) {
        return `${value}px`;
    }
    return value;
};

const testRegex = {
    singleClass: /^\.(\w+)$/
};
const create = (name, def, rules = [], path = []) => {
    definedStyles[name] = def;
};

const processDefHelper = (name, key, def, rules, path) => {
    const className = parseKey(name, key).join('');
    let defs;
    let nestedDefs;

    defs = [];
    nestedDefs = [];
    for(const defName of Object.keys(def)) {
        if (/^\w/.test(defName) === true) {
            const cssValue = getCSSValue(defName, def[defName]);
            const cssName = defName.replace(/[A-Z]/g, s => `-${s.toLowerCase()}`);
            if (cssValue !== null) {
                defs.push(`  ${cssName}: ${cssValue};`);
            }
        } else {
            processDefHelper(name, defName, def[defName], nestedDefs, [...path, className]);
        }
    }

    if (defs.length > 0) {
        rules.push({
            name: [...path, className].join(' ').replace(/\s+:\s+/g, ":"),
            defs
        });
    }

    if (nestedDefs.length > 0) {
        nestedDefs.forEach(nestedDef => rules.push(nestedDef));
    }
};
const processDef = (name, def) => {
    const rules = [];
    const path = [];

    for(const key of Object.keys(def)) {
        processDefHelper(name, key, def[key], rules, path);
    }

    return rules;
};
const renderCSS = () => {
    const head = document.querySelector("head");

    Object.keys(definedStyles).forEach(
        lib => {
            const styleTag = document.createElement("style");
            const definedStyle = processDef(lib, definedStyles[lib]);

            styleTag.innerHTML = '\n' + definedStyle.map(
                rule => `${rule.name} {\n${rule.defs.join('\n')}\n}`
            ).join('\n\n') + '\n';
            styleTag.setAttribute("data-library", lib);

            head.appendChild(styleTag);
        }
    );
};

const Theme = (() => {
    let themeValues;

    return {
        define(values) {
            themeValues = values;
        },
        get(name) {
            const path = name.split('/');
            return () => {
                let current;

                current = themeValues;
                for (const nextPath of path) {
                    current = current[nextPath];
                }

                return current;
            };
        }
    };
})();

export default {
    Style: {
        create,
        getClassName,
        renderCSS,
        getClassNames(mapping) {
            return Object.keys(mapping).reduce(
                (names, key) => {
                    if (mapping[key] === true) {
                        return [...names, getClassName(key)];
                    }
                    return names;
                },
                []
            )
            .join(' ');
        }
    },
    Theme
};
