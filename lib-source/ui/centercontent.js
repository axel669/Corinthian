import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

let CenterContent;

CenterContent = React.createClass({
    render () {
        let {vertical = 'center', horizontal = 'center', width = '100%', height = '100%'} = this.props;

        if (vertical === 'center') {
            vertical = 'middle';
        }

        return (
            <div style={{width, height, display: 'table'}}>
                <div style={{display: 'table-cell', textAlign: horizontal, verticalAlign: vertical}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export default CenterContent;
