import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavigationBar from './NavigationBar';
import '../components/Header.css';

function Header() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCreateForm = () => {
    navigate('/create-form');
  };

  return (
    <div className="header">
      <button className="menu-button" onClick={toggleDrawer}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <img 
        className="logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Google_Forms_logo_%282014-2020%29.svg/1489px-Google_Forms_logo_%282014-2020%29.svg.png" 
        alt="Google Forms Logo"
      />
      <Link to="/" className="home-link">
        <h1>Forms</h1>
      </Link>
      <button className="create-form" onClick={handleCreateForm}>Create Form</button>
      <NavigationBar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </div>
  );
}

export default Header;
