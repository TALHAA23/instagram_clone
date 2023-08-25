import { useAccountInfoAndUpdater } from "./AccountProvider";
import { createContext, useContext, useState } from "react";
import {
  updateFollowingsByAddingNew,
  updateFollowingsByRemovingFollower,
} from "../assets/firebase/utils";

const UseAccountUtils = createContext();

export function useAccountUtils() {
  return useContext(UseAccountUtils);
}

export default function AccountUtilsProvider({ children }) {
  const { accountInfo } = useAccountInfoAndUpdater();

  function addNewFollowing() {
    const creds = {
      followed: accountInfo.auth.email,
      username: accountInfo.about.username,
    };
    updateFollowingsByAddingNew(creds);
  }

  function unFollowAccount() {
    const creds = {
      followed: accountInfo.auth.email,
      username: accountInfo.about.username,
    };
    updateFollowingsByRemovingFollower(creds);
  }

  return (
    <UseAccountUtils.Provider value={[addNewFollowing, unFollowAccount]}>
      {children}
    </UseAccountUtils.Provider>
  );
}
