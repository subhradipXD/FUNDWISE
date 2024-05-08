import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/landingPages/Home';
import About from './pages/landingPages/About';
import Contact from './pages/landingPages/Contact';
import Login from './pages/Auth/Login';
import Dashboard from './pages/admin/Dashboard';
import Feed from "./pages/investor/Feed";
import Profile from "./pages/investor/Profile";
import Register from "./pages/Auth/Register";
import Notification from "./pages/investor/Notification";
import Message from "./pages/investor/Message";

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/about' element={ <About />} />
          <Route path='/contact' element={ <Contact />} />
          <Route path='/login' element={ <Login />} />
          <Route path='/dashboard' element={ <Dashboard />} />
          <Route path="/feed" element={<Feed/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/notification" element={<Notification/>}></Route>
          <Route path="/message" element={<Message/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
