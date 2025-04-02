import React from 'react'
import './styles.scss'

const PokemonCard = () => {
    return (
        <div className="pokemon-grid-container">
            <div className="pokemon-card">
                <div className="card-image">
                    <img
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
                        alt="Pikachu"
                        className="pokemon-sprite"
                    />
                    <span className="pokemon-id">#1</span>
                </div>
                <div className="card-content">
                    <h3 className="pokemon-title">Pikachu</h3>
                </div>
            </div>
            <div className="pokemon-card">
                <div className="card-image">
                    <img
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
                        alt="Pikachu"
                        className="pokemon-sprite"
                    />
                    <span className="pokemon-id">#1</span>
                </div>
                <div className="card-content">
                    <h3 className="pokemon-title">Pikachu</h3>
                </div>
            </div>
            <div className="pokemon-card">
                <div className="card-image">
                    <img
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
                        alt="Pikachu"
                        className="pokemon-sprite"
                    />
                    <span className="pokemon-id">#1</span>
                </div>
                <div className="card-content">
                    <h3 className="pokemon-title">Pikachu</h3>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard