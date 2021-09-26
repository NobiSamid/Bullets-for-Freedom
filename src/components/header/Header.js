import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="#brand">Bullets for Freedom</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#nothing">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#shoes">AR</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#backpack">SMG</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#subscribe">LMG</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#subscribe">SR</a>
                            </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn btn-outline-secondary" type="submit">Search</button>
                            </form>
                    </div>
                </div>
          </nav>
          <div className="card banner">
                <div className="card-body">
                <h1>Pick your weapons</h1>
                <p>Don't be the ammunition wagon, be the rifle... knowledge exists primarily for use.</p>
                <h2>Total budget: $5,00,000</h2>
                </div>
          </div>
        </div>
    );
};

export default Header;