var React = require( 'react' );
var connect = require( 'react-redux' ).connect;
var actions = require( './actions' );

var OverlayInstructions = React.createClass( {

  render: function() {
    return (
      <div>
        <h3>How to play</h3>
        <p>Press the PLAY button and the game will begin in three seconds. When the game starts, will have 15 seconds to shoot all the red tiles. If you shoot blue tiles, you will be penalized. Press the PLAY button again to start another game.</p>
      </div>
    );
  }
});


module.exports = OverlayInstructions;
