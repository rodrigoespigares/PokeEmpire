import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


export default function Detalle() {
  let { id } = useParams();
  let [pokemon, setPokemon] = useState("");

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + id)
      .then((response) => response.json())
      .then((pokemonData) => {
        setPokemon(pokemonData);

      });
  }, []);


  let images = [];
  let habilidades = [] 
  if (pokemon != "") {
    Object.keys(pokemon.sprites.other).map((element) =>
        Object.keys(pokemon.sprites.other[element]).map(into => {
          if (pokemon.sprites.other[element][into] != null) {
            images.push(<img key={pokemon.sprites.other[element][into]} src={pokemon.sprites.other[element][into]}></img>)
          }
        }
      )
    )
  }
  return (
    <section id='detalle'>
      <h2>{pokemon.name}</h2>
      {images[0]}
      {images}

    </section>
  )
}
