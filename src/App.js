// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import MainBody from './components/MainBody';
import QuestionForm from './components/QuestionForm';

import FillForm from './components/FillForm';
import Responses from './components/Responses';



function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <NavigationBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainBody />} />
            <Route path="/create-form" element={<QuestionForm />} />
            <Route path="/fillform" element={<FillForm />} />
            <Route path="/responses" element={<Responses />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
