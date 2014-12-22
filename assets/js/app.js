var React    = window.React = require('react'), // assign it to window for react chrome extension

    Albums    = require('./albums'),

    App;

App = React.createClass({
    getInitialState: function() {
        return {
            query: 'radiohead'
        }
    },
    updateQuery: function(event) {
        this.setState({
            query: event.target.value
        });
    },
    render: function () {
        return <div>
            <div className="container content">
              <input type="text" onChange={this.updateQuery} />
              <Albums query={this.state.query}/>
            </div>
        </div>;
    }
});

App.start = function () {
    React.render(<App/>, document.getElementById('app'));
};

module.exports = window.App = App;
