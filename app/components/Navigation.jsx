var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
  render: function() {
    return (
      <div className="top-bar" color="black">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
              <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>
            <li>
              <Link to="/countdown" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
            </li>
          </ul>
        </div>

        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              <p>Created by <a href="https://github.com/Bhavya0409" target="_blank">Bhavya Shah</a></p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Navigation;
