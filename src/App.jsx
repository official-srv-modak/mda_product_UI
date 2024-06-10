import React, { useState, useEffect } from 'react';
import Header from './components/header.jsx';
import Sidebar from './components/sidebar.jsx';
import Body from './components/body.jsx';
import './App.css';
import './index.css';

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedProductId, setSelectedProductId] = useState(1); // Default product ID
  const [productDetails, setProductDetails] = useState(null);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleProductSelect = (id) => {
    setSelectedProductId(id);
  };

  useEffect(() => {
    const fetchProductDetails = async (id) => {
      try {
        const username = 'admin';
        const password = 'admin';
        const url = `http://localhost:8080/product-catalog-module/product/get-product/${id}`;

        const headers = new Headers();
        headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));

        const response = await fetch(url, {
          method: 'GET',
          headers: headers
        });

        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }

        const data = await response.json();
        setProductDetails(data.product);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    if (selectedProductId) {
      fetchProductDetails(selectedProductId);
    }
  }, [selectedProductId]);

  return (
    <div className="App d-flex">
      <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} productDetails={productDetails} />
      <div className={`main-container ${collapsed ? 'expanded' : ''}`}>
        <div className="main-content">
          <Header onProductSelect={handleProductSelect} />
          <Body selectedProductId={selectedProductId} />
        </div>
      </div>
    </div>
  );
}

export default App;
