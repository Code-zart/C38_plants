import React from 'react';

const Answer = ({ answers }) => {
  // Bring all answers from AppContext,
  // bring question.answers from "Post",
  // filteredAnswers == question.answers
  return (
    <>
      {answers.map((answer) => (
        <h1>{answer.text}</h1>
      ))}
    </>
  );
};

export default Answer;
