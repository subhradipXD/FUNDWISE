import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/landingPages/Home';
import About from './pages/landingPages/About';
import Contact from './pages/landingPages/Contact';
import FounderLogin from './pages/Auth/FounderLogin';
import InvestorLogin from './pages/Auth/InvestorLogin';
import Dashboard from './pages/admin/Dashboard';
import Feed from "./pages/investor/Feed";
import Profile from "./pages/investor/Profile";
import InvestorRegister from "./pages/Auth/InvestorRegister";
import FounderRegister from "./pages/Auth/FounderRegister";
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
          <Route path='/founderLogin' element={ <FounderLogin />} />
          <Route path='/investorLogin' element={ <InvestorLogin />} />
          <Route path='/dashboard' element={ <Dashboard />} />
          <Route path="/feed" element={<Feed/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/investorRegister" element={<InvestorRegister/>}></Route>
          <Route path="/founderRegister" element={<FounderRegister/>}></Route>
          <Route path="/notification" element={<Notification/>}></Route>
          <Route path="/message" element={<Message/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
