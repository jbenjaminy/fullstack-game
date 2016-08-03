var React = require( 'react' );

var OverlayInstructions = React.createClass( {

  render: function() {

      return (
        <div className="instructions">
          <h3>How to play</h3>
          <p>Press the PLAY button and the game will begin in three seconds. When the game starts, you will have 15 seconds to shoot all the red tiles. If you shoot blue tiles, you will be penalized. Press the PLAY button again to start another game.</p>
        </div>
      );
    }
});

module.exports = OverlayInstructions;
