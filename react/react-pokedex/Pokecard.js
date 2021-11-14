import React from 'react'

const POKE_API = 'https://raw.githubusercontent.com/' + 'PokeAPI/sprites/master/sprites/pokemon/';

const Pokecard = (props) => {
    let imgSrc = `${POKE_API}${props.id}.png`
    
    return (
        <div>
            <h3>{props.name}</h3>
            <img src={imgSrc}></img>
            <p>Type: {props.type}</p>
            <p>EXP: {props.base_experience}</p>
        </div>
    )
}