import React from 'react';

function init() {
    var Hello = React.createClass({
        render: function() {
            return <div>I am a react {this.props.name}</div>;
        }
    });

    React.render(<Hello name="Demos" />, document.getElementById('container'));
}

export default init;