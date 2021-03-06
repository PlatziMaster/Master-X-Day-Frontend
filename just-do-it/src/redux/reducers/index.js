// Import libraries
import { combineReducers } from 'redux';

// Import reducers
import boardReducer from './boardReducer';

// Add reducers to root
const rootReducer = combineReducers({
	boardReducer,
});

export default rootReducer;