import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Detalle.css';
import Loading from '../Loading/Loading';

export default function Detalle() {
  let { id } = useParams();
  let [pokemon, setPokemon] = useState("");
  let [click, setClick] = useState(0);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + id)
      .then((response) => response.json())
      .then((pokemonData) => {
        setPokemon(pokemonData);

      });
  }, []);

  function changeImg(e){
    setClick(parseInt(e.target.id))
  }

  let images = [];
  let key= 0;
  let habilidades = [] 
  let tipo = []
  let stats = [];
  if (pokemon != "") {
    pokemon.stats.forEach(element =>{
        console.log();
        stats.push( <p key={element.stat.name}>{element.stat.name}: {element.base_stat}</p>);
    })
    pokemon.types.forEach(element => {
      tipo.push(<article key={element.type.name}>{element.type.name}</article>)
    })
    pokemon.abilities.forEach(element => {
      habilidades.push(<article key={element.ability.name}>{element.ability.name}</article>);
    });
    Object.keys(pokemon.sprites.other).map((element) =>
        Object.keys(pokemon.sprites.other[element]).map(into => {
          if (pokemon.sprites.other[element][into] != null) {
            images.push(<div key={pokemon.sprites.other[element][into]} onClick={changeImg}><img key={pokemon.sprites.other[element][into]} id={key} src={pokemon.sprites.other[element][into]}></img></div>)
            key++;
          }
        }
      )
    )
  }
  return (
    <section id='detalle'>
      <div>
        <div className='detalle__principal'>
          {images[click]}
        </div>
        <div className='detalle__conjunto'>
          {images}
        </div>
      </div>
      <div>
        <h2 className='display-1 text-uppercase'>{pokemon.name}</h2>
        <section className='id'>
          <h3>Number pokedex: {pokemon.id}</h3>
        </section>
        <section>
          <h3>Types:</h3>
          {tipo}
        </section>
        <section className='habilidades'>
          <h3>Abilities</h3>
          {habilidades}
        </section>
        <section>
          <h3>Stats</h3>
          {stats}
        </section>

      </div>
    </section>
  )
}
