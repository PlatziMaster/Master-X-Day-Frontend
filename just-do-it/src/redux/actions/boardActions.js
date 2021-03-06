// Import actions consts
import { 
    START_GET_BOARDS,
    START_GET_MEMBERS_BY_BOARD_ID,
    RESET_REQUEST
} from '../consts';

// Create action
export const getBoards = payload => ({
    type: START_GET_BOARDS,
    payload
});

export const getMembersByBoardId = payload => ({
    type: START_GET_MEMBERS_BY_BOARD_ID,
    payload
});

export const resetRequest = payload => ({
    type: RESET_REQUEST,
    payload
});