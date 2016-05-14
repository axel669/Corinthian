import {Style, Theme} from "lib-source/style.js";

Style.create(
    "core/progressbar",
    {
        ".wrapper": {
            position: 'relative',
            height: 8,
            overflow: 'hidden',
            backgroundColor: Theme.get("progressbar/backgroundColor"),
            // borderRadius: 15,
            // border: '4px solid #e4e4e4'
            border: '1px solid rgba(200, 200, 200, 0.5)'
        },
        ".bar": {
            height: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
            backgroundColor: Theme.get("progressbar/color")
        }
    }
);

const ProgressBar = ({progress, color, backgroundColor, height, cornerRadius}) => (
    <div className={Style.getClassName("core/progressbar:wrapper")} style={{backgroundColor, height, borderRadius: cornerRadius}}>
        <div className={Style.getClassName("core/progressbar:bar")} style={{width: `${progress * 100}%`, backgroundColor: color}} />
    </div>
);

export default ProgressBar;
