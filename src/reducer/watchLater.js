import { ACTION } from '../actions/watchLater'

export function watchLaterReducer(state, action) {
    
    switch (action.type) {
        case ACTION.ADD_TO_LIST:
            return addToList(state, action.payload.video);
        case ACTION.REMOVE_FROM_LIST:
            return removeFromList(state, action.payload.video._id)
        default:
            return state;   
    }
}

function addToList(list, newVideo) {
    let checkDuplication = list.find((video) => video._id === newVideo._id)
    if (!checkDuplication) {
        return [...list,newVideo]
    }
    return list
}

function removeFromList(list, id) {
    let updatedList = list.filter((video) => video._id !== id)
    return updatedList
}