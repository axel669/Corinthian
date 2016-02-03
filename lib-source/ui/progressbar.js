import {Style, Theme} from "lib-source/style.js";

Style.create(
    "core/progressbar",
    {
        ".wrapper": {
            position: 'relative',
            height: 30,
            overflow: 'hidden',
            borderRadius: 15,
            border: '4px solid #e4e4e4'
        },
        ".bar": {
            height: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
            backgroundColor: '#87c3e2'
        }
    }
);

const ProgressBar = ({progress}) => (
    <div className={Style.getClassName("core/progressbar:wrapper")}>
        <div className={Style.getClassName("core/progressbar:bar")} style={{width: `${progress * 100}%`}} />
    </div>
);

export default ProgressBar;
