import React from 'react';
import pokemonLogo from "../../../public/assets/pokemon.png";
import './style.scss';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="navbar-content">
                <div className="logo-container">
                    <img alt="pokemon-logo" className="logo-img" src={pokemonLogo}/>
                    <h3 className="logo-text">Pokemon World</h3>
                </div>
                <button className="my-pokemon-btn">
                    <span className="btn-icon">⚡</span>
                    My Pokemon
                </button>
            </div>
        </nav>
    )
}

export default Navbar;