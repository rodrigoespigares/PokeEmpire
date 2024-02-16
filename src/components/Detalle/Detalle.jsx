import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detalle.css';
import StatsChart from '../StatsChart/StatsChart';

export default function Detalle() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState("");
  const [click, setClick] = useState(0);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + id)
      .then((response) => response.json())
      .then((pokemonData) => {
        setPokemon(pokemonData);
        setStats(pokemonData.stats);
      });
  }, [id]);
  function changeImg(e) {
    setClick(parseInt(e.target.id));
  }

  let images = [];
  let key = 0;
  let habilidades = [];
  let tipo = [];
  if (pokemon !== "") {
    pokemon.types.forEach((element) => {
      tipo.push(<article key={element.type.name}>{element.type.name}</article>);
    });
    pokemon.abilities.forEach((element) => {
      habilidades.push(<article key={element.ability.name}>{element.ability.name}</article>);
    });
    Object.keys(pokemon.sprites.other).map((element) =>
      Object.keys(pokemon.sprites.other[element]).map((into) => {
        if (pokemon.sprites.other[element][into] != null) {
          images.push(
            <div key={pokemon.sprites.other[element][into]} onClick={changeImg}>
              <img key={pokemon.sprites.other[element][into]} id={key} src={pokemon.sprites.other[element][into]} alt="sprite"></img>
            </div>
          );
          key++;
        }
      })
    );
  }

  return (
    <section id='detalle'>
      <div>
        <div className='detalle__principal'>{images[click]}</div>
        <div className='detalle__conjunto'>{images}</div>
      </div>
      <div className='detalle__especifico'>
        <h2 className='display-1 text-uppercase'>{pokemon.name}</h2>
        <section className='id'>
          <h3>Number pokedex: {pokemon.id}</h3>
        </section>
        <section className='tipos'>
          <h3>Types:</h3>
          <div className='d-flex w-100 justify-content-evenly'>
          {tipo}
          </div>
        </section>
        <section className='habilidades'>
          <h3>Abilities</h3>
          <div className='d-flex w-100 justify-content-evenly'>
          {habilidades}
          </div>
          
        </section>
        <section className='estadisticas'>
          <h3>Stats</h3>
          <StatsChart stats={pokemon.stats} />
        </section>
      </div>
    </section>
  );
}