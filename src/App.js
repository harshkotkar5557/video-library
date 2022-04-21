import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Footer from './components/footer';
import ProtechRoute from './components/ProtectedRoute';
import Videos from './pages/videos';
import Playlist from './pages/playList';
import SingleList from './pages/singleList';
import SingleVideo from './pages/singleVideo';
import WatchLater from './pages/watchLater';
import History from './pages/history/history';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<ProtechRoute />} >
            <Route path='/list/:id' element={<SingleList/>} />
            <Route path='/videos' element={<Videos />} />
            <Route path='/playList' element={<Playlist />} />
            <Route path='/video/:id' element={<SingleVideo />} />
            <Route path='/watchLater' element={<WatchLater />} />
            <Route path='/history' element={ <History/>}/>
          </Route>
          <Route path='/login' element={<div>Login</div>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
