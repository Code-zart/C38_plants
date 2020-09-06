import React from 'react';

const Answer = ({ answers }) => {
  // Bring all answers from AppContext,
  // bring question.answers from "Post",
  // filteredAnswers == question.answers
  return (
    <div className="answers">
      <h3>Answer 1</h3>
      <h3>Answer 2</h3>
    </div>
  );
};

export default Answer;
