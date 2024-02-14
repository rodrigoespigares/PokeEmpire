import React, { useState, useEffect } from 'react';

export default function Play() {
    const [img, setImg] = useState("");
    const [options, setOptions] = useState([]);
    const [correctPokemon, setCorrectPokemon] = useState("");

    useEffect(() => {
        iniciarJuego();
    }, []);

    function iniciarJuego() {
        const aleatorio = Math.floor(Math.random() * 1000);
        fetchPokemon(aleatorio + 1);
    }

    function fetchPokemon(id) {
        fetch('https://pokeapi.co/api/v2/pokemon/' + id)
            .then(response => response.json())
            .then(pokemonData => {
                setCorrectPokemon(pokemonData.name);
                setImg(<img key={pokemonData.id} className='imagen__juego' src={pokemonData.sprites?.other['official-artwork'].front_default} alt={pokemonData.name} />);
                generarOpciones(pokemonData.name);
            });
    }

    function generarOpciones(correctName) {
        const opciones = [];
        for (let i = 0; i < 4; i++) {
            const aleatorio = Math.floor(Math.random() * 1000 + 1);

            fetch('https://pokeapi.co/api/v2/pokemon/' + aleatorio)
                .then(response => response.json())
                .then(pokemonData => {
                    opciones.push(pokemonData.name);
                    if (opciones.length === 4) {
                        const respuestaCorrecta = Math.floor(Math.random() * 4);
                        opciones[respuestaCorrecta] = correctName;
                        setOptions(opciones);
                    }
                });
        }
    }

    function opciones(e) {
        const selectedPokemon = e.target.innerText;
        const isCorrect = selectedPokemon === correctPokemon;
        console.log(isCorrect ? "¡Correcto!" : "Incorrecto");
    }

    return (
        <div className='d-flex justify-content-center align-items-center h-100 flex-column'>
            <h2 className='display-1'>How its that Pokemon</h2>
            {img}
            <div className='d-flex flex-column'>
                {options.map((option, index) => (
                    <button key={index} onClick={opciones} className='text-white nombres fs-1 jugar'>{option}</button>
                ))}
            </div>
            <button className='text-white nombres fs-1 jugar' id='jugar' onClick={iniciarJuego}>PLAY</button>
        </div>
    );
}