// src/components/QuestionForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuestionForm.css';

function QuestionForm() {
  const navigate = useNavigate();
  const [formName, setFormName] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { id: questions.length + 1, text: '', type: 'multiple-choice', options: [''] }]);
  };

  const handleAddOption = (questionId) => {
    const newQuestions = questions.map(question => {
      if (question.id === questionId) {
        return {
          ...question,
          options: [...question.options, '']
        };
      }
      return question;
    });
    setQuestions(newQuestions);
  };

  const handleTextChange = (e, questionId, optionIndex) => {
    const { value } = e.target;
    const newQuestions = questions.map(question => {
      if (question.id === questionId) {
        return {
          ...question,
          options: question.options.map((option, index) =>
            index === optionIndex ? value : option
          )
        };
      }
      return question;
    });
    setQuestions(newQuestions);
  };

  const handleQuestionTextChange = (e, questionId) => {
    const { value } = e.target;
    const newQuestions = questions.map(question =>
      question.id === questionId ? { ...question, text: value } : question
    );
    setQuestions(newQuestions);
  };

  const handleModeChange = (e, questionId) => {
    const { value } = e.target;
    const newQuestions = questions.map(question =>
      question.id === questionId ? { ...question, type: value, options: [''] } : question
    );
    setQuestions(newQuestions);
  };

  const handleSubmitForm = () => {
    if (!formName.trim()) {
      alert('Please provide a form name.');
      return; // Exit early if formName is empty
    }

    // Check if at least one question is added
    if (questions.length === 0) {
      alert('Please add at least one question.');
      return; // Exit early if no questions are added
    }

    // Check if all questions have text and type selected
    for (const question of questions) {
      if (!question.text.trim()) {
        alert('Please provide text for all questions.');
        return; // Exit early if any question is missing text
      }
      if (!question.type) {
        alert('Please select answer type for all questions.');
        return; // Exit early if any question is missing answer type
      }
    }

    // Check if all multiple-choice questions have at least two options
    const hasInvalidOptions = questions.some(question =>
      question.type === 'multiple-choice' && question.options.length < 2
    );
    if (hasInvalidOptions) {
      alert('Multiple-choice questions must have at least two options.');
      return; // Exit early if any multiple-choice question has less than two options
    }

    // If all validations pass, save the form data
    const formData = { formName, questions };
    saveFormDataLocally(formData);
    navigate('/');
  };

  const saveFormDataLocally = (formData) => {
    // Convert formData to JSON string
    const formDataJson = JSON.stringify(formData);

    // Save formDataJson to localStorage or sessionStorage
    localStorage.setItem('savedFormData', formDataJson);
  };

  return (
    <div className="question-form">
      <div className="form-header">
        <input
          type="text"
          placeholder="Untitled form"
          className="form-title"
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
        />
       
      </div>
      {questions.map(question => (
        <div key={question.id} className="question">
          <input
            type="text"
            placeholder="Untitled Question"
            className="question-text"
            value={question.text}
            onChange={(e) => handleQuestionTextChange(e, question.id)}
          />
          <select value={question.type} onChange={(e) => handleModeChange(e, question.id)} className="question-type">
            <option value="multiple-choice">Multiple choice</option>
            <option value="text">Text Answer</option>
          </select>
          {question.type === 'multiple-choice' && question.options.map((option, index) => (
            <div key={index} className="question-option">
              <input
                type="text"
                placeholder="Option"
                value={option}
                onChange={(e) => handleTextChange(e, question.id, index)}
              />
            </div>
          ))}
          {question.type === 'multiple-choice' && (
            <button onClick={() => handleAddOption(question.id)} className="add-option-button">Add Option</button>
          )}
        </div>
      ))}
      <button onClick={handleAddQuestion} className="add-question-button">Add Question</button>
      <button onClick={handleSubmitForm} className="submit-form-button">Submit Form</button>
    </div>
  );
}

export default QuestionForm;
