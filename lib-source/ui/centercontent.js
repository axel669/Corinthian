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

const CenterContent = ({width, height, children, style = {}, className = ""}) => {
    const wrapperName = `${Style.getClassName("core/centerContent:wrapper")} ${className}`.trim();
    return (
        <div style={{...style, width, height}} className={wrapperName}>
            <div className={Style.getClassName("core/centerContent:content")}>{children}</div>
        </div>
    );
};

export default CenterContent;
