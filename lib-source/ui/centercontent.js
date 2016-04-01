import {Style, Theme} from "lib-source/style.js";

Style.create(
    "core/centerContent",
    {
        ".wrapper": {
            display: 'table',
            whiteSpace: 'pre-wrap',
            textAlign: 'center',
            "> .content": {
                display: 'table-cell',
                verticalAlign: 'middle'
            }
        }
    }
);

/* -AxelDoc-
module UI {
    element CenterContent {
        @desc A container that will automatically center its content horizontally and vertically.
        @hasChildren
        @prop width {
            @desc The width of the container.
            @type Number
            @type CSS String
            @optional
            @default `null` (wraps content)
        }
        @prop height {
            @desc The height of the container.
            @type Number
            @type CSS String
            @optional
            @default `null` (wraps content)
        }
        @prop className {
            @desc Additional class names to give the container.
            @type String
            @optional
            @default `""`
        }
        @prop style {
            @desc Style to apply to the container. See React inline styles for information.
            @type object
            @optional
            @default `null`
        }
        @example
            ```
            <UI.CenterContent width="100%" height="100%">
                Content to center
            </UI.CenterContent>
            ```
    }
}
*/
const CenterContent = ({width, height, children, style = {}, className = ""}) => {
    const wrapperName = `${Style.getClassName("core/centerContent:wrapper")} ${className}`.trim();
    return (
        <div style={{...style, width, height}} className={wrapperName}>
            <div className={Style.getClassName("core/centerContent:content")}>{children}</div>
        </div>
    );
};

export default CenterContent;
