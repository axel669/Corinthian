import {defineComponentStyle} from "lib-source/v2/style.js";

const animationDuration = 500;
defineComponentStyle(
    'ripple',
    'core',
    {
        "wrapper": {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // transform: 'translate3d(0, 0, 0)'
        },
        "dot": {
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            animation: `ripple-core-animation-ripple-effect ${animationDuration}ms linear`,
            borderRadius: '50%',
            display: 'inline-block'
        },
        "dot:before": {
            paddingTop: '100%',
            content: `""`,
            float: 'left'
        },
        "!ripple-effect": {
            "0%": {
                width: 0,
                backgroundColor: 'rgba(0, 0, 0, 0)'
            },
            "70%": {
                backgroundColor: 'rgba(0, 0, 0, 0.2)'
            },
            "100%": {
                width: '225%',
                backgroundColor: 'rgba(0, 0, 0, 0.0)'
            }
        }
    }
);

class Ripple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {list: []};
    }

    touch = (evt) => {
        const {position} = evt.touch;
        // const touch = evt.changedTouches[0];
        const {top, left, bottom, right} = this.refs.wrapper.getBoundingClientRect();
        let {list} = this.state;

        chrono.trigger(animationDuration, () => this.setState({list: this.state.list.slice(1)}));
        list = [...list, {x: position.x - left, y: position.y - top, id: Date.now()}];
        // console.log(list);
        this.setState({list});
    }

    render = () => {
        const {list} = this.state;

        return (
            <UI.Touchable component="div" className="ripple-core-wrapper" onTap={this.touch} ref="wrapper">
                {list.map(({id, x, y}) => <div key={id} style={{top: y, left: x}} className="ripple-core-dot" />)}
            </UI.Touchable>
        );
    }
}

export default Ripple;
