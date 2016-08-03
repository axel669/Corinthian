import {defineComponentStyle} from "lib-source/v2/style";

defineComponentStyle(
    'center-content',
    'core',
    {
        'container': {
            display: 'table',
            whiteSpace: 'pre',
            textAlign: 'center',
            width: '100%'
        },
        'content': {
            display: 'table-cell',
            verticalAlign: 'middle',
            padding: 'auto'
        }
    }
);
const CenterContent = ({children, width, height, className = ""}) =>
    <div className={`center-content-core-container ${className}`} style={{width, height}}>
        <div className="center-content-core-content">
            <div style={{margin: 'auto', display: 'inline-block'}}>{children}</div>
        </div>
    </div>

export default CenterContent;
