import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './TemplateGallery.css';

const templates = [
  { name: "Blank form", image: "https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png" },
  { name: "Fill Form", image: "https://ssl.gstatic.com/docs/templates/thumbnails/1xQF3s6EP0d58H-XJ7R440OpREKo4KqEapa0mkw43RPE_400_1.png" },
  { name: "Responses", image: "https://ssl.gstatic.com/docs/templates/thumbnails/1kkUjv3G7-PgOEUPMTiKvKResxGxS7MTsy5Amj4b0Trw_400_1.png" },
  { name: "Party Invite", image: "https://ssl.gstatic.com/docs/templates/thumbnails/1m0UYQl1LSGxl3sGsh9_xjim4hUYQ8BO_zbvcFXv1Qug_400_1.png" },
  { name: "T-Shirt Sign Up", image: "https://ssl.gstatic.com/docs/templates/thumbnails/134dbGrMBrHFEfdPk5UpsZWEBZb7xJrOKRdESE58Fvcg_400_1.png" },
  { name: "Event Registration", image: "https://ssl.gstatic.com/docs/templates/thumbnails/1pM0fD5FWTXCGw4h0g1WSP8Nj3mS56l1EaCZAec-p2uc_400_1.png" },
];

function TemplateGallery() {
  const navigate = useNavigate();

  const handleTemplateClick = (templateName) => {
    if (templateName === "Blank form") {
      navigate('/create-form');
    } else if (templateName === "Fill Form") {
      navigate('/fillform');
    } else if (templateName === "Responses") {
      navigate('/responses');
    }
  };
  

  return (
    <div className="template-gallery">
    
      <div className="templates">
        {templates.map(template => (
          <div
            key={template.name}
            className="template-item"
            onClick={() => handleTemplateClick(template.name)}
            style={{ cursor: 'pointer' }}
          >
            <img src={template.image} alt={template.name} />
            <p>{template.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplateGallery;
