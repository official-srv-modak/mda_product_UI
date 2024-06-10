// src/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ collapsed, toggleSidebar, productDetails }) => {
  return (
    <div className={`sidebar d-flex flex-column p-3 text-white ${collapsed ? 'collapsed' : ''}`}>
      <button className="btn btn-primary mb-3 bg-dark" onClick={toggleSidebar}>
        {collapsed ? '=' : 'Navigation Pane'}
      </button>

      {productDetails ? (
        <ul className={`nav nav-pills flex-column mb-auto ${collapsed ? 'hide-text' : ''}`}>
          <li className="nav-item">
            <a href={`#product-${productDetails.id}`} className="nav-link text-white">
              {productDetails.description}
            </a>
          </li>
          <li>
            <a href="#accuracy" className="nav-link text-white">
              Accuracy: {productDetails.accuracy}%
            </a>
          </li>
          <li>
            <a href="#correlation-matrix" className="nav-link text-white">
              Correlation Matrix
            </a>
          </li>
          {/* {productDetails.encodedColumns.map((column, index) => (
            <li key={index}>
              <a href={`#encoded-column-${index}`} className="nav-link text-white">
                {column}
              </a>
            </li>
          ))} */}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Sidebar;
