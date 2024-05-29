// src/components/Responses.js
import React from 'react';
import './styles.css';

const Responses = () => {
  const savedFormData = JSON.parse(localStorage.getItem('savedFormData')) || {};
  const formResponses = JSON.parse(localStorage.getItem('formResponses')) || {};

  return (
    <div className="form-container">
      <h2>{savedFormData.formName} - Responses</h2>
      {savedFormData.questions && savedFormData.questions.map(question => (
        <div key={question.id} className="response">
          <h3>{question.text}</h3>
          {question.type === 'multiple-choice' || question.type === 'text' ? (
            <h4>{formResponses[question.id]}</h4>
          ) : question.type === 'checkbox' ? (
            <ul>
              {question.options.map((option, index) => (
                <li key={index}>
                  {formResponses[`${question.id}-${index}`] && option}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Responses;
