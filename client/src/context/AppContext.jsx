import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentFilter, setCurrentFilter] = useState(null);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const user = sessionStorage.getItem('User');

  const fetchQuestions = () => {
    axios.get('/questions').then((res) => {
      setQuestions(res.data);
      setFilteredQuestions(res.data);
    });
  };

  const fetchAnswers = () => {
    axios.get('/answers').then((res) => {
      setAnswers(res.data);
    });
  };

  const fetchUser = () => {
    axios
      .get('/api/users')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => console.log('Error:', error));
  };

  useEffect(() => {
    if (user && !currentUser) {
      axios
        .get('/api/users/me', { withCredentials: true })
        .then((res) => setCurrentUser(res.data))
        .catch((error) => console.log(error));
    }
  }, [currentUser, user]);

  useEffect(() => {
    fetchUser();
    fetchQuestions();
    fetchAnswers();
  }, []);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        users,
        setUsers,
        answers,
        setAnswers,
        questions,
        setQuestions,
        setCurrentUser,
        currentFilter,
        setCurrentFilter,
        filteredQuestions,
        setFilteredQuestions,
        fetchQuestions,
        fetchAnswers,
        loading,
        setLoading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppContextProvider };
