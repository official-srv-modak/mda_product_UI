import React, { useState, useEffect } from 'react';
import ImageModal from './imageModal.jsx';
import './body.css';

function Body({ selectedProductId }) {
    const [productData, setProductData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);

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
            setLoading(true);
            fetchData();
        }
    }, [selectedProductId]);

    const handleImageClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleImageLoad = () => {
        setLoading(false);
    };

    const handleImageError = () => {
        setLoading(false);
    };

    if (!productData) {
        return <div>Loading...</div>;
    }

    const encodedColumnsArray = productData.encodedColumns;

    return (
        <div className="body-container-wrapper">
            <div className="body-container">
                <h2 id={`product-${selectedProductId}`}>{productData.description}</h2>
                <p id="accuracy"><h3>Accuracy:</h3> {productData.accuracy}%</p>
                <p id="correlation-matrix-image" onClick={handleImageClick}>
                    {productData.correlationMatrix && (
                        <div>
                            <h3>Correlation Matrix Image:</h3>
                            {loading && <div>Loading...</div>}
                            <img
                                className="correlation-image"
                                src={productData.imageUrl}
                                alt="Correlation Matrix"
                                onLoad={handleImageLoad}
                                onError={handleImageError}
                            />
                        </div>
                    )}
                </p>
                <p id="correlation-matrix-details"><h3>Correlation Matrix Details:</h3> <pre>{productData.correlationMatrix}</pre></p>
                <p id="encoded-heading"><h3>Encoded Columns:</h3></p>
                <ul>
                    {encodedColumnsArray.map((column, index) => (
                        <li key={index} id={`encoded-column-${index}`}>{column}</li>
                    ))}
                </ul>
                {showModal && <ImageModal imageUrl={productData.imageUrl} onClose={handleCloseModal} />}
            </div>
        </div>
    );
}

export default Body;
