import { useState } from "react";

export default function Ajax({inicio}) {
    let [arrPokemon, setPokemon] = useState([]);
    if(inicio){
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=8&offset=0')
        .then((response) => response.json())
        .then((pokemon) => {
            url = pokemon.next;
            setPokemon([...arrPokemon,...pokemon.results])
            console.log(arrPokemon);
        });
    }
  return arrPokemon;
}
