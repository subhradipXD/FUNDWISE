import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/landingPages/Home";
import About from "./pages/landingPages/About";
import Contact from "./pages/landingPages/Contact";
import Dashboard from "./pages/admin/Dashboard";
import Feed from "./pages/investor/Feed";
import Profile from "./pages/investor/Profile";
import Register from "./pages/Auth/register";
import Login from "./pages/Auth/login";
import Notification from "./pages/investor/Notification";
import Message from "./pages/investor/Message";

import "./App.css";
import { UserProvider } from "./Context/ContextProvider";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/feed" element={<Feed />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/notification" element={<Notification />}></Route>
            <Route path="/message" element={<Message />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
