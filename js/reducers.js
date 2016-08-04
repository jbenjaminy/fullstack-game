var actions = require('./actions');

var combineReducers = require('redux').combineReducers;

var gameReducer = function(state, action) {
	state = state || {};
	if (action.type === actions.NEW_GAME) {
		var username = '';
		var id = null;
		var highScore = highScore;
		var gameHistory = [];
		var timer = 60;
		var score = 0;
		var overlay = false;
		var beforeContainer = false;
		var afterContainer = false;
		var statusMessage = false;
		if (state.username) {
			username = state.username;
			id = state.userId;
			highScore = state.highScore;
			gameHistory = state.gameHistory;
		}
		return Object.assign({}, {
			username: username,
			id: id,
			highScore: highScore,
			gameHistory: gameHistory,
			timer: timer,
			score: score,
			overlay: overlay,
			beforeContainer: beforeContainer,
			afterContainer: afterContainer,
			statusMessage: statusMessage
		});
	} else if (action.type === actions.TOGGLE_OVERLAY) {
		if (state.overlay) {
			return Object.assign({}, state, {
				overlay: false
			});
		} else {
			return Object.assign({}, state, {
				overlay: true
			});
	} else if (action.type === actions.SHOW_BEFORE_CONTAINER) {
		return Object.assign({}, state, {
			beforeContainer: true
		});
	} else if (action.type === actions.HIDE_DYNAMIC_CONTAINER) {
		return Object.assign({}, state, {
			beforeContainer: false,
			afterContainer: false
		});
	} else if (action.type === actions.SHOW_AFTER_CONTAINER) {
		return Object.assign({}, state, {
			afterContainer: true
		});
	} else if (action.type === actions.INCREMENT_SCORE) {
		var newScore = state.score++;
		return Object.assign({}, state, {
			score: newScore
		});
	} else if (action.type === actions.DECREMENT_SCORE) {
		var newScore = state.score--;
		return Object.assign({}, state, {
			score: newScore
		});
	} else if (action.type === actions.FETCH_ADD_USER_SUCCESS) {
		var newUsername = action.username;
		var newId = action.id;
		var newStatusMessage = action.message;
		return Object.assign({}, state, {
			username: newUsername,
			id: newId,
			statusMessage: newStatusMessage
		});
	} else if (action.type === actions.FETCH_ADD_USER_ERROR) {
		var newStatusMessage = action.error;
		return Object.assign({}, state, {
			statusMessage: newStatusMessage
		});
	} else if (action.type === actions.FETCH_ADD_SCORE_SUCCESS) {
		var newStatusMessage = action.message;
		return Object.assign({}, state, {
			statusMessage: newStatusMessage
		});
	} else if (action.type === actions.FETCH_ADD_SCORE_ERROR) {
		var newStatusMessage = action.error;
		return Object.assign({}, state, {
			statusMessage: newStatusMessage
		});
	} else if (action.type === actions.FETCH_GAME_HISTORY_SUCCESS) {
		var newGameHistory = action.gameHistory;
		return Object.assign({}, state, {
			gameHistory: newGameHistory
		});
	} else if (action.type === actions.FETCH_GAME_HISTORY_ERROR) {
		var newStatusMessage = action.error;
		return Object.assign({}, state, {
			statusMessage: newStatusMessage
		});
	} else if (action.type === actions.FETCH_HIGH_SCORE_SUCCESS) {
		var newHighScore = action.highScore;
		return Object.assign({}, state, {
			highScore: newHighScore
		}); 
	} else if (action.type === actions.FETCH_GAME_HISTORY_ERROR) {
		var newStatusMessage = action.error;
		return Object.assign({}, state, {
			statusMessage: newStatusMessage
		});
	} else {
		return state;
	}
};

module.exports = gameReducer;