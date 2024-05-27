// src/Sidebar.js
import React from 'react';
import './Sidebar.css';


const Sidebar = ({ collapsed, toggleSidebar }) => {
  return (
    <div className={`sidebar d-flex flex-column p-3 text-white ${collapsed ? 'collapsed' : ''}`}>
      <button className="btn btn-primary mb-3 bg-dark" onClick={toggleSidebar}>
        {collapsed ? '=' : 'Navigation Pane'}
      </button>

      {/* <img className="btn btn-primary mb-3" onClick={toggleSidebar} src={expandIcon} alt={collapsed ? 'Expand' : 'Collapse'} /> Use your icon image */}

      <ul className={`nav nav-pills flex-column mb-auto ${collapsed ? 'hide-text' : ''}`}>
        <li className="nav-item">
          <a href="#home" className="nav-link text-white">
            Home
          </a>
        </li>
        <li>
          <a href="#services" className="nav-link text-white">
            Services
          </a>
        </li>
        <li>
          <a href="#clients" className="nav-link text-white">
            Clients
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link text-white">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
