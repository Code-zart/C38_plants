import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentFilter, setCurrentFilter] = useState(null);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
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

  // get all users
  useEffect(() => {
    axios
      .get('/api/users')
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((error) => console.log('Error:', error));
  }, [setUsers]);

  // get all questions
  useEffect(() => {
    axios.get('/questions').then((res) => {
      console.log(res.data);
      setQuestions(res.data);
      setFilteredQuestions(res.data);
    });
  }, [setQuestions, setFilteredQuestions]);

  // get all answers
  useEffect(() => {
    axios.get('/answers').then((res) => {
      console.log(res.data);
      setAnswers(res.data);
    });
  }, [setAnswers]);

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
        setFilteredQuestions
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppContextProvider };
