import {defineComponentStyle, defineStyleForComponent, defineCustomBase} from "lib-source/v2/style.js";

defineComponentStyle(
    'progressbar',
    'core',
    {
        "wrapper": {
            position: 'relative',
            height: 8,
            backgroundColor: '#B3CEED'
        },
        "bar": {
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            backgroundColor: '#3B8AF3'
        }
    }
);
const ProgressBar = ({progress, color, backgroundColor, height, cornerRadius}) => (
    <div className="progressbar-core-wrapper" style={{backgroundColor, height, borderRadius: cornerRadius}}>
        <div className="progressbar-core-bar" style={{width: `${progress * 100}%`, backgroundColor: color}} />
    </div>
);

export default ProgressBar;
