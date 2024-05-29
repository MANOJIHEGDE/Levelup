// src/components/FillForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './fillform.css'

const FillForm = () => {
  const navigate = useNavigate();
  const savedFormData = JSON.parse(localStorage.getItem('savedFormData')) || {};
  const [responses, setResponses] = useState({});

  const handleChange = (e, questionId) => {
    const { type, value, checked } = e.target;
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = () => {
    localStorage.setItem('formResponses', JSON.stringify(responses));
    navigate('/');
  };

  if (!savedFormData.formName) {
    return <p>No form available to fill out.</p>;
  }

  return (
    <div className="form-container">
      <h2>{savedFormData.formName}</h2>
      {savedFormData.questions && savedFormData.questions.map(question => (
        <div key={question.id} className="question">
          <h3>{question.text}</h3>
          {question.type === 'multiple-choice' && (
            <div className="options">
              {question.options.map((option, index) => (
                <label key={index} className="option">
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    onChange={(e) => handleChange(e, question.id)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
          {question.type === 'text' && (
            <input
              type="text"
              className="text-input"
              placeholder="Your answer"
              onChange={(e) => handleChange(e, question.id)}
            />
          )}
          {question.type === 'checkbox' && (
            <div className="options">
              {question.options.map((option, index) => (
                <label key={index} className="option">
                  <input
                    type="checkbox"
                    name={`question-${question.id}-${index}`}
                    value={option}
                    onChange={(e) => handleChange(e, `${question.id}-${index}`)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
      <button onClick={handleSubmit} className="submit-button">Submit Responses</button>
    </div>
  );
};

export default FillForm;
