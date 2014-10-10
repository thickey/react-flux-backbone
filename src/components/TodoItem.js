var React = require('react');
var TodoActions = require('../actions/TodoActions');

module.exports = React.createClass({
    onToggle: function() {
        TodoActions.toggle(this.props.todo);
    },

    onRemove: function(ev) {
        ev.preventDefault();
        TodoActions.remove(this.props.todo);
    },

    render: function() {
        var styles = {
            textDecoration: this.props.todo.get('complete') ? 'line-through' : 'none'
        };
        return <div style={styles}>
            <input type="checkbox" onClick={this.onToggle} />
            {this.props.todo.attributes.text}
            <a href="#" onClick={this.onRemove}>[x]</a>
        </div>
    }
});