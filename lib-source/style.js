const definedStyles = {};

const genStyleKey = (element, className, state) => `${element}$${className}$${state}`;
const create = (library, {element = '', className = '', state = ''}, styleDef) => {
    if (definedStyles.hasOwnProperty(library) === false) {
        definedStyles[library] = {};
    }
    const lib = definedStyles[library];
    const styleKey = genStyleKey(element, className, state);

    lib[styleKey] = styleDef;
};

const getClassName = (library, {element = null, className = null, state = null}) => {
    const formattedClassName = className.replace(/\//g, '_');
    const stateDef = (state === null) ? "" : `:${state}`;
    return `${element}.${library}-${formattedClassName}${stateDef}`;
}

export default {
    create
};
