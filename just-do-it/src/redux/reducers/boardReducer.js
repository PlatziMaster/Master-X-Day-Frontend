// Import actions consts
import {
    START_GET_BOARDS,
    SUCCESS_GET_BOARDS,
    ERROR_GET_BOARDS,
    START_GET_MEMBERS_BY_BOARD_ID,
    SUCCESS_GET_MEMBERS_BY_BOARD_ID,
    ERROR_GET_MEMBERS_BY_BOARD_ID,
    RESET_REQUEST
} from '../consts';

// Initialize state
const initialState = {
    boards: [],
    members: [],
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
        case START_GET_MEMBERS_BY_BOARD_ID:
            return { 
                ...state, 
                data: action.payload,
                members: [] 
            };
        case SUCCESS_GET_MEMBERS_BY_BOARD_ID:
            console.log(action.result);
            const members = action.result;
            return { 
                ...state,
                successRequest: true,
                members
            };
        case ERROR_GET_MEMBERS_BY_BOARD_ID:
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