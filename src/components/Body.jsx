import React, { useState } from 'react';

function Body() {
  const [formData, setFormData] = useState({
    productName: '',
    col1: '',
    col2: '',
    col3: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log('Form data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="col1">Col1:</label>
        <input
          type="text"
          id="col1"
          name="col1"
          value={formData.col1}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="col2">Col2:</label>
        <input
          type="text"
          id="col2"
          name="col2"
          value={formData.col2}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="col3">Col3:</label>
        <input
          type="text"
          id="col3"
          name="col3"
          value={formData.col3}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Body;
