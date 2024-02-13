import React, { useEffect, useState } from 'react'
import './Play.css'


export default function Play() {
  let [pokemon,setPokemon] = useState([]);
  let img;
  let btn;
    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 1000 +1))
        .then((response) => response.json())
        .then((pokemonData) => {
          setPokemon(pokemonData);
          
        });
    }, []);
    if(pokemon){
      img = <img className='imagen__juego' src={pokemon.sprites?.other['official-artwork'].front_default}></img>
      btn = <button className='text-black' onClick={opciones}>{pokemon.name}</button>
    }
    function opciones(e){
      console.log(e.target.innerHTML)
    }
  return (
    <div className='d-flex justify-content-center align-items-center h-100'>
      <div className='w-50 d-flex justify-content-center'>
        {img}
      </div>
      {btn}
    
    </div>
  )
}
