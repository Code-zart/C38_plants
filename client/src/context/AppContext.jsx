import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // global state that can be used in any component in our application
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [currentFilter, setCurrentFilter] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const user = sessionStorage.getItem('User');
  useEffect(() => {
    //incase the user refreshes & context is cleared
    if (user && !currentUser) {
      axios
        .get('/api/users/me', { withCredentials: true })
        .then((res) => setCurrentUser(res.data))
        .catch((error) => console.log(error));
    }
  }, [currentUser, user]);
  return (
    <AppContext.Provider
      value={{
        posts,
        setPosts,
        search,
        setSearch,
        currentUser,
        setCurrentUser,
        currentFilter,
        setCurrentFilter,
        filteredPosts,
        setFilteredPosts
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppContextProvider };
