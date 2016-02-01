const definedStyles = {};
const rawStyles = {};
const animations = [];

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
const cssPrefixNames = new Set([
    'transform',
    'box-shadow'
]);
const cssPrefixes = ['-webkit-', '-moz-', '-ms-', '-o-', ''];
const getCSSName = name => {
    name = name.replace(/[A-Z]/g, s => `-${s.toLowerCase()}`);
    if (cssPrefixNames.has(name) === true) {
        return cssPrefixes.map(prefix => `${prefix}${name}`);
    }
    return [name];
};
const getCSSValue = (name, value) => {
    if (Array.isArray(value) === true) {
        return value.map(cssValue => getCSSValue(name, cssValue));
    } else {
        if (typeof value === 'function') {
            value = value();
        }

        if (typeof value === 'number' && cssNoMeasurement.has(name) === false) {
            return `${value}px`;
        }
        return value;
    }
};
const getCSSDef = (name, value) => {
    const cssName = getCSSName(name);
    const cssValue = getCSSValue(name, value);

    if (Array.isArray(cssValue) === true) {
        return cssValue.map(value => `  ${cssName[0]}: ${value};`);
    }
    return cssName.map(prefixName => `  ${prefixName}: ${cssValue};`);
};


const create = (name, def, rules = [], path = []) => {
    definedStyles[name] = def;
};

const processDefHelper = (name, key, def, rules, path) => {
    const className = parseKey(name, key).join('');
    let defs;
    let nestedDefs;

    nestedDefs = [];
    defs = Object.keys(def).reduce(
        (defs, defName) => {
            if (/^\w/.test(defName) === true) {
                defs = [
                    ...defs,
                    ...getCSSDef(defName, def[defName])
                ];
            } else {
                processDefHelper(name, defName, def[defName], nestedDefs, [...path, className]);
            }
            return defs;
        },
        []
    );

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
const renderDefinedCSS = head => {
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
const renderRawCSS = head => {
    Object.keys(rawStyles).forEach(
        lib => {
            const styleTag = document.createElement("style");
            const declarations = rawStyles[lib];
            const cssRules = declarations.map(
                declaration => {
                    const {selector} = declaration;
                    const ruleText = Object.keys(declaration.rules).reduce(
                        (ruleDefs, ruleName) => {
                            const ruleValue = declaration.rules[ruleName];

                            return [
                                ...ruleDefs,
                                ...getCSSDef(ruleName, ruleValue)
                            ];
                        },
                        []
                    );

                    return `${selector} {\n${ruleText.join('\n')}\n}`;
                }
            );

            styleTag.setAttribute("data-library", `raw/${lib}`);
            styleTag.innerHTML = `\n${cssRules.join('\n\n')}\n`;

            head.appendChild(styleTag);
        }
    );
};
const renderAnimationCSS = head => {
    animations.forEach(animation => {
        const styleTag = document.createElement("style");
        const fromDefs = Object.keys(animation.from).reduce(
            (defs, defName) => {
                return [
                    ...defs,
                    ...getCSSDef(defName, animation.from[defName])
                ];
            },
            []
        );
        const toDefs = Object.keys(animation.to).reduce(
            (defs, defName) => {
                return [
                    ...defs,
                    ...getCSSDef(defName, animation.to[defName])
                ];
            },
            []
        );

        styleTag.setAttribute("data-library", "animations");
        styleTag.innerHTML = `@keyframes ${animation.name} {\nfrom {\n${fromDefs.join('\n')}\n}\nto {\n${toDefs.join('\n')}\n}\n}`;

        head.appendChild(styleTag);

        // console.log(fromDefs);
    });
};
const renderCSS = () => {
    const head = document.querySelector("head");

    renderAnimationCSS(head);
    renderRawCSS(head);
    renderDefinedCSS(head);
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
        },
        format(text) {
            return () => text.replace(/\$([\w|\/]+)/g, (full, path) => Theme.get(path)());
        },
        get runtime() {
            return themeValues;
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
        },
        __rawCSS(name, ...ruleList) {
            rawStyles[name] = ruleList;
        },
        addFonts(lib, ...fonts) {
            rawStyles[`${lib}/font`] = fonts.map(
                ({name, dataURI}) => {
                    return {
                        selector: "@font-face",
                        rules: {
                            fontFamily: `"${name}"`,
                            src: `url("${dataURI}")`,
                            fontWeight: "normal",
                            fontStyle: "normal"
                        }
                    };
                }
            );
        },
        addAnimations(...customAnimations) {
            customAnimations.forEach(animation => animations.push(animation));
        }
    },
    Theme
};
