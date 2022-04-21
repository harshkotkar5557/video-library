import { createContext, useContext, useReducer } from "react";
import { playListReducer } from '../reducer/playList'


const PlayListContext  = createContext([])

const PlayListProvider = ({ children }) => {
 
    const [playlist, dispatchPlayList] = useReducer(playListReducer,[])
    
    
    return <PlayListContext.Provider value={{ playlist, dispatchPlayList }}>{ children }</PlayListContext.Provider>
}

const usePlayList = () => useContext(PlayListContext)

export { usePlayList, PlayListProvider}