import { ACTIONPLAYLIST } from '../actions/playList'


export function playListReducer(state, action) {
    
    switch (action.type) {
        case ACTIONPLAYLIST.CREATE_PLAYLIST:
            return [...state, action.payload.list]
        case ACTIONPLAYLIST.ADD_VIDEO_LIST:
            return addVideoToList(state, action.payload.listId, action.payload.newVideoId)
        case ACTIONPLAYLIST.DELETE_VIDEO_LIST:
            return deleteVideoToList(state, action.payload.listId, action.payload.newVideoId)
        case ACTIONPLAYLIST.DELETE_PLAYLIST:
            return state.filter((li)=> action.payload.listId !== li.id)
        default: 
            return state
    }

}

function addVideoToList(playList, listId, newVideoId) {
    let updatedPlayList = playList.map((list) => {
        if (listId === list.id) {
            list.videos = [...list.videos, newVideoId]
            return list
        }
    })
    return updatedPlayList
}
function deleteVideoToList(playList, listId, newVideoId) {
    let updatedPlayList = playList.map((list) => {
        if (listId === list.id) {
            list.videos = list.filter((videoId)=> videoId !== newVideoId )
            return list
        }
    })
    return updatedPlayList
}