import React, { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [cookies, setCookies] = useCookies(["token"]);

  useEffect(() => {
    const getCurrentUser = async (hashedUserID) => {
      const res = await axios.get(
        `http://localhost:2000/users/currentuser/${hashedUserID}`
      );
      setUser(res.data.response.User);
      setUserPosts(res.data.response.UserPosts);
    };

    const isRouteAllowed =
      window.location.pathname === "/feed" ||
      window.location.pathname === "/profile";

    if (isRouteAllowed && cookies.token) {
      getCurrentUser(cookies.token);
    }

    return () => {
      setUser(null);
      setUserPosts([]);
    };
  }, [cookies.token, window.location.pathname]);

  return (
    <UserContext.Provider value={{ user, setUser, userPosts, setUserPosts }}>
      {children}
    </UserContext.Provider>
  );
};
