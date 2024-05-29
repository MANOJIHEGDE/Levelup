import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileAlt, FaFileExcel, FaFilePowerpoint, FaFile, FaCog, FaQuestionCircle, FaGoogleDrive } from 'react-icons/fa'; // Import required icons
import './NavigationBar.css';
import { FaArrowLeft } from 'react-icons/fa';

function NavigationBar({ drawerOpen, setDrawerOpen }) {
  if (!drawerOpen) {
    return null; // Return nothing if drawer is closed
  }

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" onClick={() => setDrawerOpen(false)}>
            <FaArrowLeft /> 
          </Link>
        </li>
        <li>
          <Link to="/docs" onClick={() => setDrawerOpen(false)}>
            <FaFileAlt /> Docs
          </Link>
        </li>
        <li>
          <Link to="/sheets" onClick={() => setDrawerOpen(false)}>
            <FaFileExcel /> Sheets
          </Link>
        </li>
        <li>
          <Link to="/slides" onClick={() => setDrawerOpen(false)}>
            <FaFilePowerpoint /> Slides
          </Link>
        </li>
        <li>
          <Link to="/forms" onClick={() => setDrawerOpen(false)}>
            <FaFile /> Forms
          </Link>
        </li>
        <li>
          <Link to="/settings" onClick={() => setDrawerOpen(false)}>
            <FaCog /> Settings
          </Link>
        </li>
        <li>
          <Link to="/help" onClick={() => setDrawerOpen(false)}>
            <FaQuestionCircle /> Help & Feedback
          </Link>
        </li>
        <li>
          <Link to="/drive" onClick={() => setDrawerOpen(false)}>
            <FaGoogleDrive /> Drive
          </Link>
        </li>
      </ul>
      <div className="navbar-footer">
        <Link to="/privacy-policy">Terms of Service</Link> · <Link to="/terms-of-service">Created by Manoj Hegde</Link>
      </div>
    </nav>
  );
}

export default NavigationBar;
