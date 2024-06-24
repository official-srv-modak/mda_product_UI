// CreateProduct.jsx

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function CreateProduct() {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [trainFile, setTrainFile] = useState(null);
    const [testFile, setTestFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Perform form validation
        if (!productName || !productDescription || !trainFile || !testFile) {
            setError('All fields are required.');
            return;
        }

        // Prepare form data
        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('productDescription', productDescription);
        formData.append('trainFile', trainFile);
        formData.append('testFile', testFile);

        try {
            const username = 'admin';
            const password = 'admin';
            const url = 'http://localhost:8081/product-catalog-module/product/upload-files';

            const headers = new Headers();
            headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));

            setUploading(true);

            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to upload files.');
            }

            // Handle success
            alert('Files uploaded successfully!');
            setProductName('');
            setProductDescription('');
            setTrainFile(null);
            setTestFile(null);
            setError('');
        } catch (error) {
            setError('Failed to upload files. Please try again.');
            console.error('Error uploading files:', error);
        } finally {
            setUploading(false);
        }
    };

    const handleTrainFileChange = (event) => {
        setTrainFile(event.target.files[0]);
    };

    const handleTestFileChange = (event) => {
        setTestFile(event.target.files[0]);
    };

    return (
        <div className="container mt-5">
            <h2>Create New Product</h2>
            <form onSubmit={handleSubmit}>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="productDescription" className="form-label">Product Description</label>
                    <textarea className="form-control" id="productDescription" rows="3" value={productDescription} onChange={(e) => setProductDescription(e.target.value)}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="trainFile" className="form-label">Train Set File</label>
                    <input type="file" className="form-control" id="trainFile" onChange={handleTrainFileChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="testFile" className="form-label">Test Set File</label>
                    <input type="file" className="form-control" id="testFile" onChange={handleTestFileChange} />
                </div>
                <button type="submit" className="btn btn-primary" disabled={uploading}>{uploading ? 'Uploading...' : 'Upload Files'}</button>
            </form>
        </div>
    );
}

export default CreateProduct;
