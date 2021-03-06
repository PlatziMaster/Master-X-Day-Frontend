// Import actions consts
import {
    START_GET_BOARDS,
    SUCCESS_GET_BOARDS,
    ERROR_GET_BOARDS,
    RESET_REQUEST
} from '../consts';

// Initialize state
const initialState = {
    boards: [],
    message: "",
    successRequest: false,
    errorRequest: false,
};

// Create reducers
const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_GET_BOARDS:
            return { 
                ...state, 
                data: action.payload,
                boards: [] 
            };
        case SUCCESS_GET_BOARDS:
            console.log(action.result);
            const boards = action.result;
            return { 
                ...state,
                successRequest: true,
                boards
            };
        case ERROR_GET_BOARDS:
            console.log(action.error);
            return { 
                ...state,
                errorRequest: true,
                message: action.error.message
            };
        case RESET_REQUEST:
            return { 
                ...state, 
                successRequest: false,
                errorRequest: false
            };
        default:
            return { ...state };
    }
}

export default boardReducer;