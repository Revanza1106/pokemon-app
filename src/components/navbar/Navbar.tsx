import React from 'react'
// import { Link } from 'react-router-dom'
import pokemonLogo from "../../../public/assets/pokemon.png"
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className="conteiner-navbar">
            <ul>
                <li>
                    <img alt="pokemon-logo"  width='50px' src={pokemonLogo}/>
                    <h3>Pokemon World</h3>
                </li>
                <li>
                    My Pokemon
                </li>
            </ul>
        </nav>
    )
}

export default Navbar