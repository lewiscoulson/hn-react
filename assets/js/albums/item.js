var React = require('react'),

    Item;

Item = React.createClass({
    render: function () {
        var album = this.props.album;
        return <li>
          <h2>{album.name}</h2>
          <img src={album.images[0].url} alt="" />
       </li>;
    }
});

module.exports = Item;
