import { createContext, useContext, useState } from "react";

const UseAccount = createContext();

export const useAccountInfoAndUpdater = () => useContext(UseAccount);

export default function AccountProvider({ children }) {
  const [accountInfo, setAccountInfo] = useState();
  function updateAccountInfo(newAccountInfo) {
    setAccountInfo(newAccountInfo);
  }

  return (
    <UseAccount.Provider value={{ accountInfo, updateAccountInfo }}>
      {children}
    </UseAccount.Provider>
  );
}
