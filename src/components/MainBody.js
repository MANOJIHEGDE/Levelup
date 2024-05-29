import React from 'react';
import './MainBody.css';
import TemplateGallery from './TemplateGallery';

function MainBody() {
  return (
    <div className="main-body">
      
      <TemplateGallery />
      <div className="recent-forms">
        <p>Select  blank form  above to get started</p>
      </div>
    </div>
  );
}

export default MainBody;
