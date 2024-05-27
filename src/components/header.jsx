// src/Header.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css';
import modakDevLogo from './modak-dev-logo.png'; // Import the logo image


function Header() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const sampleProducts = [
            { Id: 'product1', Title: 'Term Deposit', Url: '/product1' },
            { Id: 'product2', Title: 'Credit card approval', Url: '/product2' },
            { Id: 'product3', Title: 'Other products', Url: '/product3' },
        ];
        setProducts(sampleProducts);
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
                    </Nav>
                    <div className="md-nav-dropdown">
                        <NavDropdown title="Products" id="basic-nav-dropdown" className="ml-auto">
                            {products.map((product) => (
                                <NavDropdown.Item key={product.Id} href={product.Url}>
                                    {product.Title}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
