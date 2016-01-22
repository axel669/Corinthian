const definedStyles = {};

const getClassName = (name) => {
    return name.replace(/\//g, "_")
            .replace(":", '-')
            .toLowerCase();
};

const testRegex = {
    singleClass: /^\.(\w+)$/
};
const create = (name, def) => {
    console.log(name, def);
    for(const key of Object.keys(def)) {
        generateClassName(name, [], key);
    }
};

const generateClassName = (lib, path, name) => {
    // console.log(lib, path, name);
    switch (true) {
        case (testRegex.singleClass.test(name) === true): {
            const info = name.match(testRegex.singleClass);
            const selector = `${lib}:${info[1]}`;
            console.log(selector, getClassName(selector));
        }
    }
};

// const genStyleKey = (element, className, state) => `${element}$${className}$${state}`;
// const create = (library, {element = '', className = '', state = ''}, styleDef) => {
//     if (definedStyles.hasOwnProperty(library) === false) {
//         definedStyles[library] = {};
//     }
//     const lib = definedStyles[library];
//     const styleKey = genStyleKey(element, className, state);

//     lib[styleKey] = styleDef;
// };

// const getClassName = (library, {element = null, className = null, state = null}) => {
//     const formattedClassName = className.replace(/\//g, '_');
//     const stateDef = (state === null) ? "" : `:${state}`;
//     return `${element}.${library}-${formattedClassName}${stateDef}`;
// }

export default {
    create,
    getClassName
};
