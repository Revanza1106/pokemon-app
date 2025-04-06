import './styles.scss';

const PokemonDetail = () => {
 

    return (
        <div className="pokemon-detail">
            <div className="detail-header">
                {/* <div className="pokemon-name">{pokemon.name}</div>
                <span className="pokemon-id">#{pokemon.id}</span> */}
            </div>

            <div className="detail-container">
                {/* left column */}
                <div className="image-section">
                    <div className="image-container">
                        {/* <img src={pokemon.image} alt={pokemon.name} /> */}
                    </div>
                    <div className="types-container">
                        {/* {pokemon.types.map(type => (
                            <span key={type} className={`type-badge type-${type.toLowerCase()}`}>
                                {type}
                            </span>
                        ))} */}
                    </div>
  
                </div>
gi
                {/* right column */}
                <div className="info-section">
                    <div className="stats-container">
                        <h3>Stats</h3>
                        {/* {pokemon.stats.map(stat => {
                    
                            const barWidth = Math.min(100, (stat.value / 150) * 100);
                            
                            return (
                                <div key={stat.name} className="stat-row">
                                    <span className="stat-name">{stat.name}</span>
                                    <div className="stat-bar">
                                        <div 
                                            className="stat-fill" 
                                            style={{ width: `${barWidth}%` }}
                                        ></div>
                                        <div className="stat-value">{stat.value}</div>
                                    </div>
                                </div>
                            );
                        })} */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonDetail;