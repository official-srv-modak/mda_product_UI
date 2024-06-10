import React, { useState, useEffect } from 'react';

function Body({ selectedProductId }) {
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const username = 'admin';
                const password = 'admin';
                const url = `http://localhost:8080/product-catalog-module/product/get-product/${selectedProductId}`;

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
                setProductData(data.product);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        if (selectedProductId) {
            fetchData();
        }
    }, [selectedProductId]);

    if (!productData) {
        return <div>Loading...</div>;
    }

    const encodedColumnsArray = productData.encodedColumns;

    return (
        <div className="body-container-wrapper">
            <div className="body-container">
                <h2 id={`product-${selectedProductId}`}>{productData.description}</h2>
                <p id="accuracy"><h3>Accuracy:</h3> {productData.accuracy}%</p>
                <p id="correlation-matrix"><h3>Correlation Matrix:</h3> <pre>{productData.correlationMatrix}</pre></p>
                <p><h3>Encoded Columns:</h3></p>
                <ul>
                    {encodedColumnsArray.map((column, index) => (
                        <li key={index} id={`encoded-column-${index}`}>{column}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Body;
