import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Footer from './components/footer';
import ProtechRoute from './components/ProtectedRoute';
import Videos from './pages/videos';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<ProtechRoute />} >
            <Route path='/video/:id' element={<div>Home</div>} />
            <Route path='/videos' element={ <Videos/>}/>
          </Route>
          <Route path='/login' element={<div>Login</div>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
