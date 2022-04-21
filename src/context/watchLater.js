import { createContext, useContext, useState, useReducer } from "react";
import { watchLaterReducer } from "../reducer/watchLater";

const WatchLaterContext  = createContext([])

const WatchLaterProvider = ({ children }) => {
 
    const [watchLaterList, dispatchWatchLaterList ] = useReducer(watchLaterReducer,[])
    
    return <WatchLaterContext.Provider value={{   watchLaterList, dispatchWatchLaterList }}>{ children }</WatchLaterContext.Provider>
}

const useWatchLater = () => useContext(WatchLaterContext)

export { useWatchLater , WatchLaterProvider}