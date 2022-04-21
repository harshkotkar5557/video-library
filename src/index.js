import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/authContext";
import { PlayListProvider } from "./context/playListContext";
import { WatchLaterProvider } from "./context/watchLater";
import { WatchHistoryProvider} from './context/watchHistory'

ReactDOM.render(
  <React.StrictMode>
    <WatchHistoryProvider>
    <WatchLaterProvider>
      <PlayListProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </PlayListProvider>
      </WatchLaterProvider>
      </WatchHistoryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
