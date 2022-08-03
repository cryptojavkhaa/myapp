import React, { useMemo, useState, createContext } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

const UserContext = createContext();

const INITIAL_STATE = {
  saving: false,
  currentUser: false,
  resetPasswordSuccess: false,
  error: "",
  uid: "",
  creationTime: "",
  photoURL: "",
  userRoles: "",
  displayName: "",
  location: "",
  A: "",
  B: "",
  V: "",
  lessonData: [],
  practiceData: [],
  userData: [],
};

export const UserStore = (props) => {
  const history = useHistory();
  const [state, setState] = useState(INITIAL_STATE);
  const [mode, setMode] = useState("light");
  const { t, i18n } = useTranslation();

  const handleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleMode = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  return (
    <UserContext.Provider
      value={{
        state,
        handleLanguage,
        handleMode,
        t,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
