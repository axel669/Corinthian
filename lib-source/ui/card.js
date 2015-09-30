import React from 'react';

let Card;

Card = React.createClass({
    render () {
        return <div className="material-card" style={this.props.style || null}>{this.props.children}</div>;
    }
});

export default Card;
