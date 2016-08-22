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
    'box-shadow',
    'transition',
    'animation',
    'animationDelay',
    'animationDirection',
    'animationDuration',
    'animationFillMode',
    'animationIterationCount',
    'animationName',
    'animationPlayState',
    'animationTimingFunction'
]);
const cssPrefixes = ['-webkit-', '-moz-', '-ms-', '-o-', ''];

const getCSSValue = (prop, value) => {
    if (value === null) {
        return null;
    }
    if (typeof value === 'function') {
        value = value();
    }
    if (Array.isArray(value) === true) {
        return value.map(value => getCSSValue(prop, value)[0]);
    }
    if (typeof value === 'number' && cssNoMeasurement.has(prop) === false) {
        value += "px";
    }
    return [value];
};
const processSelector = (componentName, styleName, selector) => {
    const parts = selector.split(/\s+/);
    const realParts = parts.map(part => {
        part = part.replace(":active", ".cor-touch-active");
        return part.split('/').map(part => {
            switch (true) {
                case part.charAt(0) === "$":
                    return part.slice(1);
                case /^[a-z]/i.test(part) === true:
                    return `.${componentName}-${styleName}-${part}`;
                default:
                    return part;
            }
        }).join('');
    });
    return realParts.join(' ');
};
const processDef = (cssLines, selector, defs) => {
    cssLines = [...cssLines, `${selector} {`];
    for (const [cssProp, cssValue] of Object.entries(defs)) {
        const value = getCSSValue(cssProp, cssValue);
        const prop = cssProp.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        if (value !== null) {
            if (cssPrefixNames.has(cssProp) === true) {
                cssLines = [
                    ...cssLines,
                    ...cssPrefixes.map(prefix => `\t${prefix}${prop}: ${value[0]};`)
                ];
            } else {
                cssLines = [
                    ...cssLines,
                    ...value.map(value => `\t${prop}: ${value};`)
                ];
            }
        }
    }
    cssLines = [...cssLines, "}"];
    return cssLines;
    // cssLines.push("}");
};

const componentStyles = {};
const createProp = (object, propName, defaultValue) => {
    if (object.hasOwnProperty(propName) === false) {
        object[propName] = defaultValue;
    }
    return object[propName];
};
const defineComponentStyle = (component, styleName, styles) =>
    createProp(
        createProp(componentStyles, component, {}),
        styleName,
        styles
    );
const baseStyles = {};
const defineCustomBase = (component, baseFunc) => {
    if (typeof component !== 'string') {
        component = component.componentName;
    }
    baseStyles[component] = baseFunc;
};
const propStyleName = name => name.replace(/(^\w)|\-\w/g, s => s.slice(-1).toUpperCase());
const defineStyleForComponent = (component, styleName, options) => {
    const Component = component;
    const styleDef = baseStyles[component.componentName](options);
    let styledComponent = null;

    if (styleDef === null || styleDef === undefined || typeof styleDef !== 'object') {
        console.warn(`Improper type returned from style function for ${component.componentName}:${styleName}. Did you forget to return the constructed style?`);
    } else {
        defineComponentStyle(component.componentName, styleName, styleDef);
    }

    styledComponent = props => <Component {...props} styleName={styleName} />;
    styledComponent.parentInfo = component;
    component[propStyleName(styleName)] = styledComponent;
};

const createStyles = () => {
    const head = document.querySelector("head");

    //  Iterate over the components that have styles defined
    for (const [componentName, styles] of Object.entries(componentStyles)) {
        //  Iterate over the various named styles for the given component
        for (const [styleName, styleDefs] of Object.entries(styles)) {
            let cssLines = [];
            //  Grab all the individual groups of styles defined in the named style
            for (const [descriptor, defs] of Object.entries(styleDefs)) {
                if (descriptor.startsWith("!") === true) {
                    //  Repeat an extra time with prefixed keyframes because ios < 9 is pretty awful
                    cssLines.push(`@-webkit-keyframes ${componentName}-${styleName}-animation-${descriptor.slice(1)} {`);
                    for (const [selector, def] of Object.entries(defs)) {
                        cssLines = processDef(cssLines, selector, def);
                    }
                    cssLines.push("}");

                    //  normal @keyframes css
                    cssLines.push(`@keyframes ${componentName}-${styleName}-animation-${descriptor.slice(1)} {`);
                    for (const [selector, def] of Object.entries(defs)) {
                        cssLines = processDef(cssLines, selector, def);
                    }
                    cssLines.push("}");
                } else {
                    const selector = processSelector(componentName, styleName, descriptor);
                    cssLines = processDef(cssLines, selector, defs);
                }
            }
            const styleTag = document.createElement("style");
            styleTag.setAttribute("type", "text/css");
            styleTag.setAttribute("data-name", `${componentName}/${styleName}`);
            styleTag.innerHTML = cssLines.join('\n');
            head.appendChild(styleTag);
        }
    }
};

let themeValues;
const Theme = {
    define(theme) {
        themeValues = theme;
    },
    get variable() {
        return themeValues;
    }
};

export default {
    defineComponentStyle,
    defineCustomBase,
    defineStyleForComponent,
    genFontCSS(name, dataURI) {
        return {
            fontFamily: `"${name}"`,
            src: `url("${dataURI}")`,
            fontWeight: "normal",
            fontStyle: "normal"
        }
    },
    Theme,
    __setup: createStyles
};
