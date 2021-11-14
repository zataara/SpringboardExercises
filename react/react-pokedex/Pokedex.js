import React from 'react';
import Pokecard from './Pokecard';


const Pokedex = (props = samplePokedex) => {
    return (
        <div>
            <h2>Pokedex</h2>
            <div>
                {props.pokemon.map(p => (
                    <Pokecard 
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        base_experience={p.base_experience} 
                        />
                ))}
            </div>
        </div>
    )
}

export default Pokedex;