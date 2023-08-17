import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../assets/firebase/firebase";

import { createContext, useContext } from "react";
const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export default function UserProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setUser(user ? user : null);
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
