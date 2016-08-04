/*---------- ACTIONS ---------*/

// START GAME
var NEW_GAME = 'NEW_GAME';
var newGame = function() {
    return {
        type: NEW_GAME
    };
};


// VIEW INSTRUCTIONS
var TOGGLE_OVERLAY = 'TOGGLE_OVERLAY';
var toggleOverlay = function() {
    return {
        type: TOGGLE_OVERLAY
    };
};


// DISPLAY DYNAMIC CONTAINER BEFORE GAME
var SHOW_BEFORE_CONTAINER = 'SHOW_BEFORE_CONTAINER';
var showBeforeContainer = function() {
    return {
        type: SHOW_BEFORE_CONTAINER
    };
};


// HIDE BOTH DYNAMIC CONTAINERS
var HIDE_DYNAMIC_CONTAINER = 'HIDE_DYNAMIC_CONTAINER';
var hideDynamicContainer = function() {
    return {
        type: HIDE_DYNAMIC_CONTAINER
    };
};


// DISPLAY DYNAMIC CONTAINER AFTER GAME
var SHOW_AFTER_CONTAINER = 'SHOW_AFTER_CONTAINER';
var showAfterContainer = function() {
    return {
        type: SHOW_AFTER_CONTAINER
    };
};


// CHANGE SCORE
var INCREMENT_SCORE = 'INCREMENT_SCORE';
var incrementScore = function() {
    return {
        type: INCREMENT_SCORE
    };
};


var DECREMENT_SCORE = 'DECREMENT_SCORE';
var decrementScore = function() {
    return {
        type: DECREMENT_SCORE
    };
};


/*---------- FETCH ACTIONS ---------*/

// POST NEW USER
var fetchAddUser = function(usernameInput) {
    return function(dispatch) {
        var url = 'localhost:8080/users';
        var request = {
            method: 'post',
            body: JSON.stringify(
                {username: usernameInput}
            )};
        return fetch(url, request)
        .then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.status(201).json();
        })
        .then(function(data) {
            var username = data.username;
            var id = data.id;
            var message = data.message;
            return dispatch(
                fetchAddUserSuccess(username, id, message)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchAddUserError(usernameInput, error)
            );
        });
    }
};

var FETCH_ADD_USER_SUCCESS = 'FETCH_ADD_USER_SUCCESS';
var fetchAddUserSuccess = function(username, id, message) {
    return {
        type: FETCH_ADD_USER_SUCCESS,
        username: username,
        id: id,
        message: message
    };
};

var FETCH_ADD_USER_ERROR = 'FETCH_ADD_USER_ERROR';
var fetchAddUserError = function(usernameInput, error) {
    return {
        type: FETCH_ADD_USER_ERROR,
        username: usernameInput,
        error: error
    };
};

// TODO: DISPATCH AT THE END OF EVERY GAME
// POST NEW SCORE
var fetchAddScore = function(userId, score) {
    return function(dispatch) {
        var url = 'localhost:8080/games/' + userId;
        var request = {
            method: 'post',
            body: JSON.stringify(
                {score: score}
            )};
        return fetch(url, request)
        .then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.status(201).json();
        })
        .then(function(data) {
            var message = data.message;
            return dispatch(
                fetchAddScoreSuccess(userId, score, message)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchAddScoreError(userId, score, error)
            );
        });
    }
};

var FETCH_ADD_SCORE_SUCCESS = 'FETCH_ADD_SCORE_SUCCESS';
var fetchAddScoreSuccess = function(userId, score, message) {
    return {
        type: FETCH_ADD_SCORE_SUCCESS,
        id: userId,
        score: score,
        message: message
    };
};

var FETCH_ADD_SCORE_ERROR = 'FETCH_ADD_SCORE_ERROR';
var fetchAddScoreError = function(userId, score, error) {
    return {
        type: FETCH_ADD_SCORE_ERROR,
        id: userId,
        score: score,
        error: error
    };
};

// TODO: CREATE VIEW GAME HISTORY BUTTON DISPATCH ON-CLICK
// GET GAME HISTORY
var fetchGameHistory = function(username) {
    return function(dispatch) {
        var url = 'localhost:8080/games/' + username;
        return fetch(url)
        .then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(gameHistory) {
            return dispatch(
                fetchGameHistorySuccess(username, gameHistory)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchGameHistoryError(username, error)
            );
        });
    }
};

var FETCH_GAME_HISTORY_SUCCESS = 'FETCH_GAME_HISTORY_SUCCESS';
var fetchGameHistorySuccess = function(username, gameHistory) {
    return {
        type: FETCH_GAME_HISTORY_SUCCESS,
        username: username,
        gameHistory: gameHistory
    };
};

var FETCH_GAME_HISTORY_ERROR = 'FETCH_GAME_HISTORY_ERROR';
var fetchGameHistoryError = function(username, error) {
    return {
        type: FETCH_GAME_HISTORY_ERROR,
        username: username,
        error: error
    };
};

// TODO: DISPATCH AT THE END OF EVERY GAME
// GET HIGH SCORE
var fetchHighScore = function(username) {
    return function(dispatch) {
        var url = 'localhost:8080/games/' + username + '/highscore';
        return fetch(url)
        .then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var highScore = data.score;
            return dispatch(
                fetchHighScoreSuccess(username, highScore)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchHighScoreError(username, error)
            );
        });
    }
};


var FETCH_HIGH_SCORE_SUCCESS = 'FETCH_HIGH_SCORE_SUCCESS';
var fetchHighScoreSuccess = function(username, highScore) {
    return {
        type: FETCH_HIGH_SCORE_SUCCESS,
        username: username,
        highScore: highScore
    };
};

var FETCH_HIGH_SCORE_ERROR = 'FETCH_HIGH_SCORE_ERROR';
var fetchHighScoreError = function(username, error) {
    return {
        type: FETCH_HIGH_SCORE_ERROR,
        username: username,
        error: error
    };
};


/*---------- EXPORTS ---------*/
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;

exports.TOGGLE_OVERLAY = TOGGLE_OVERLAY;
exports.toggleOverlay = toggleOverlay;

exports.SHOW_BEFORE_CONTAINER = SHOW_BEFORE_CONTAINER;
exports.showBeforeContainer = showBeforeContainer;

exports.HIDE_DYNAMIC_CONTAINER = HIDE_DYNAMIC_CONTAINER;
exports.hideDynamicContainer = hideDynamicContainer;

exports.SHOW_AFTER_CONTAINER = SHOW_AFTER_CONTAINER;
exports.showAfterContainer = showAfterContainer;

exports.INCREMENT_SCORE = INCREMENT_SCORE;
exports.incrementScore = incrementScore;

exports.DECREMENT_SCORE = DECREMENT_SCORE;
exports.decrementScore = decrementScore;

exports.FETCH_ADD_USER_SUCCESS = FETCH_ADD_USER_SUCCESS;
exports.FETCH_ADD_USER_ERROR = FETCH_ADD_USER_ERROR;
exports.fetchAddUserSuccess = fetchAddUserSuccess;
exports.fetchAddUserError = fetchAddUserError;

exports.FETCH_ADD_SCORE_SUCCESS = FETCH_ADD_SCORE_SUCCESS;
exports.FETCH_ADD_SCORE_ERROR = FETCH_ADD_SCORE_ERROR;
exports.fetchAddScoreSuccess = fetchAddScoreSuccess;
exports.fetchAddScoreError = fetchAddScoreError;

exports.FETCH_GAME_HISTORY_SUCCESS = FETCH_GAME_HISTORY_SUCCESS;
exports.FETCH_GAME_HISTORY_ERROR = FETCH_GAME_HISTORY_ERROR;
exports.fetchGameHistorySuccess = fetchGameHistorySuccess;
exports.fetchGameHistoryError  = fetchGameHistoryError ;

exports.FETCH_HIGH_SCORE_SUCCESS = FETCH_HIGH_SCORE_SUCCESS;
exports.FETCH_HIGH_SCORE_ERROR = FETCH_HIGH_SCORE_ERROR;
exports.fetchHighScoreSuccess = fetchHighScoreSuccess ;
exports.fetchHighScoreError = fetchHighScoreError;
