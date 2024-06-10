import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css';
import modakDevLogo from './modak-dev-logo.png';

function Header({ onProductSelect }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const username = 'admin';
                const password = 'admin';
                const url = 'http://localhost:8080/product-catalog-module/product/get-all-products';

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
                if (data.status === 'OK') {
                    setProducts(data.products);
                } else {
                    throw new Error(data.message);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Navbar expand="lg" className="navbar navbar-expand-lg mda-navbar header" fixed="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={modakDevLogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="MD Analytics Logo"
                    />
                    MD Analytics
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mda-navbar-home lg">
                        <Nav.Link href="#home" style={{ color: 'white' }}>Home</Nav.Link>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            {products.map((product) => (
                                <NavDropdown.Item 
                                    key={product.id} 
                                    href="#" 
                                    onClick={() => onProductSelect(product.id)}
                                    className="center-text"
                                >
                                    {product.description}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
