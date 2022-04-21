import { ACTIONHISTORY } from '../actions/watchHistory'

export function watchHistoryReducer(state, action) {
    
    switch (action.type) {
        case ACTIONHISTORY.ADD_TO_HISTORY:
            return [...state, action.payload.video];
        case ACTIONHISTORY.CLEAR_HISTORY:
            return []
        default:
            return state;   
    }
}

