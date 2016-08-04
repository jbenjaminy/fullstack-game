
// When game is over, display Final Score and Play Again button
var React = require('react');
var PlayButton = require('./play-button');
var ScoreFeedback = require('./score-feedback');
var GameHistory = require('./game-history');
var connect = require('react-redux').connect;

var AfterContainer = React.createClass( {
  // TODO: Add 'toggleHistoryDisplay' to actions
  showHistory: function(event) {
    event.preventDefault();
    // dispatches action to set showHistory state to 'true'
    this.props.dispatch(actions.toggleHistoryDisplay());
  },

  render: function() {
    var classes = 'after-display  ';
    if (!this.props.afterContainer) {
      classes += 'hidden';
    };

    return (
      <div className={classes}>
        <ScoreFeedback score={this.props.score}/>
        <button type="button" onClick={this.showHistory}>Your Game History</button>
        <GameHistory />
        <PlayButton text={this.props.playButton}/>
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
  return {
    afterContainer: state.afterContainer,
    score: state.score,
    playButton: state.playButton
  }
}

var Container = connect(mapStateToProps)(AfterContainer);
module.exports = Container;
