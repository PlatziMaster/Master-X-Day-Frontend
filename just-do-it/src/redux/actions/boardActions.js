// Import actions consts
import { 
    START_GET_BOARDS,
    RESET_REQUEST
} from '../consts';

// Create action
export const getBoards = payload => ({
    type: START_GET_BOARDS,
    payload
});

export const resetRequest = payload => ({
    type: RESET_REQUEST,
    payload
});