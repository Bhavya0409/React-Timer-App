var React = require('react');
var Clock = require('Clock');
var TimerControls = require('TimerControls');

var Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  componentWillUnmount: function() {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  handleStatusChange: function(newStatus) {
    this.setState({countdownStatus: newStatus});
  },
  render: function() {
    var {count, countdownStatus} = this.state;
    return (
      <div>
        <h1 className = "page-title">Timer</h1>
        <Clock totalSeconds = {count}/>
        <TimerControls countdownStatus = {countdownStatus} onStatusChange = {this.handleStatusChange}/>
      </div>
    )
  }
});

module.exports = Timer;
