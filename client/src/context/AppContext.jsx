import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // global state that can be used in any component in our application
  const [currentUser, setCurrentUser] = useState(null);
  // useEffect(() => {
  //   //incase the user refreshes & context is cleared
  //   if (user && !currentUser) {
  //     axios
  //       .get('/api/users/me', { withCredentials: true })
  //       .then((res) => setCurrentUser(res.data))
  //       .catch((error) => console.log(error));
  //   }
  // }, [currentUser, user]);
  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppContextProvider };
