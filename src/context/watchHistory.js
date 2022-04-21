import { createContext, useContext, useState, useReducer } from "react";
import { watchHistoryReducer } from "../reducer/watchHistory";


const WatchHistoryContext  = createContext([])

const WatchHistoryProvider = ({ children }) => {
 
    const [watchHistory, dispatchWatchHistoryList ] = useReducer(watchHistoryReducer,[])
    
    return <WatchHistoryContext.Provider value={{  watchHistory, dispatchWatchHistoryList }}>{ children }</WatchHistoryContext.Provider>
}

const useWatchHistory = () => useContext(WatchHistoryContext)

export { useWatchHistory , WatchHistoryProvider}