// Body.jsx
import React, { useState, useEffect } from 'react';

function Body() {
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const username = 'admin';
                const password = 'admin';
                const url = 'http://127.0.0.1:8089/api/get-product?id=2';
        
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
                setProductData(data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };
        fetchData();
    }, []);

    if (!productData) {
        return <div>Loading...</div>;
    }

    const encodedColumnsArray = JSON.parse(productData.encodedColumns);

    return (
        <div className="body-container-wrapper">
            <div className="body-container">
                <h2>{productData.name}</h2>
                <p>Accuracy: {productData.accuracy}</p>
                <p>Correlation Matrix: <pre>{productData.correlationMatrix}</pre></p>
                <p>Encoded Columns:</p>
                <ul>
                    {encodedColumnsArray.map((column, index) => (
                        <li key={index}>{column}</li>
                    ))}
                </ul>

            </div>
        </div>
    );
}

export default Body;
