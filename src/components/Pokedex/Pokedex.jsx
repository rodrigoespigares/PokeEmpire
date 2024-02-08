import React from 'react'
import Search from '../Search/Search'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Pokedex.css'

let urlNext;
export default function Pokedex() {
  const [arrPokemon, setPokemon] = useState([]);
  const [pokemonFotos, setPokemonFotos] = useState([]);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=9&offset=0')
      .then((response) => response.json())
      .then((pokemonData) => {

        urlNext=pokemonData.next;
        setPokemon((prevPokemon) => [...prevPokemon, ...pokemonData.results]);
        pokemonData.results.forEach((pokemon) => {
          giveData(pokemon.url);
        });
      });
  }, []);

  function giveData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((pokemon) => {
        setPokemonFotos((prevPokemonFotos) => [...prevPokemonFotos, pokemon]);
      });
  }
  function giveMore(){
    fetch(urlNext)
      .then((response) => response.json())
      .then((pokemonData) => {
        urlNext=pokemonData.next;
        setPokemon((prevPokemon) => [...prevPokemon, ...pokemonData.results]);
        pokemonData.results.forEach((pokemon) => {
          giveData(pokemon.url);
        });
      });
  }
  function busqueda(string){
    fetch('https://pokeapi.co/api/v2/pokemon/' + string.toLowerCase())
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
        // GESTIONAR ERROR
    });
      
    
  }

  const lista = pokemonFotos.map((pokemon, index) => (
    <article className='pokedex__card' key={index}>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt="Card Front Image"/>
          </div>
          <div className="flip-card-back">
            <div className="card-content">
              <h2 className='text-uppercase'>{pokemon.name}</h2>
              <Link to={"/pokedetalle/"+pokemon.id} className="btn">Read More</Link>
            </div>
          </div>
        </div>
    </div>
    </article>
  ));
  
  return (
    <section id="pokedex">
      <Search busqueda={busqueda}></Search>
      
      <div className='d-flex justify-content-center flex-wrap pokemon'>
        {lista}
      
      </div>  
      <Button variant='secondary' onClick={giveMore}>Ver más</Button>
    </section>
  )
}
