// Import actions consts
import {
    START_GET_BOARDS,
    SUCCESS_GET_BOARDS,
    ERROR_GET_BOARDS,
    START_GET_MEMBERS_BY_BOARD_ID,
    SUCCESS_GET_MEMBERS_BY_BOARD_ID,
    ERROR_GET_MEMBERS_BY_BOARD_ID,
    START_GET_LISTS_BY_BOARD_ID,
    SUCCESS_GET_LISTS_BY_BOARD_ID,
    ERROR_GET_LISTS_BY_BOARD_ID,
    START_GET_CARDS_BY_BOARD_ID,
    SUCCESS_GET_CARDS_BY_BOARD_ID,
    ERROR_GET_CARDS_BY_BOARD_ID,
    START_GET_CARDS_BY_LIST_ID,
    SUCCESS_GET_CARDS_BY_LIST_ID,
    ERROR_GET_CARDS_BY_LIST_ID,
    RESET_REQUEST
} from '../consts';

// Initialize state
const initialState = {
    boards: [],
    members: [],
    lists: [],
    cardsByBoard: [],
    cardsByList: [],
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
            const boards = action.result;
            return { 
                ...state,
                successRequest: true,
                boards
            };
        case ERROR_GET_BOARDS:
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
            const members = action.result;
            return { 
                ...state,
                successRequest: true,
                members
            };
        case ERROR_GET_MEMBERS_BY_BOARD_ID:
            return { 
                ...state,
                errorRequest: true,
                message: action.error.message
            };
        case START_GET_LISTS_BY_BOARD_ID:
            return { 
                ...state, 
                data: action.payload,
                lists: [] 
            };
        case SUCCESS_GET_LISTS_BY_BOARD_ID:
            const lists = action.result;
            return { 
                ...state,
                successRequest: true,
                lists
            };
        case ERROR_GET_LISTS_BY_BOARD_ID:
            return { 
                ...state,
                errorRequest: true,
                message: action.error.message
            };
        case START_GET_CARDS_BY_BOARD_ID:
            return { 
                ...state, 
                data: action.payload,
                cardsByBoard: [] 
            };
        case SUCCESS_GET_CARDS_BY_BOARD_ID:
            const cardsByBoard = action.result;
            return { 
                ...state,
                successRequest: true,
                cardsByBoard
            };
        case ERROR_GET_CARDS_BY_BOARD_ID:
            return { 
                ...state,
                errorRequest: true,
                message: action.error.message
            };
        case START_GET_CARDS_BY_LIST_ID:
            return { 
                ...state, 
                data: action.payload,
                cardsByList: [] 
            };
        case SUCCESS_GET_CARDS_BY_LIST_ID:
            const cardsByList = action.result;
            return { 
                ...state,
                successRequest: true,
                cardsByList
            };
        case ERROR_GET_CARDS_BY_LIST_ID:
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