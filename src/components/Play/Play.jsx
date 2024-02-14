import React, { useEffect, useState } from 'react'
import './Play.css'
import { text } from './text'


export default function Play() {
    let img;
    let [btn, setBtn] = useState([]);
    let [todo, setTodo] = useState("");
    let win = ""
    function jugar(e) {
        if (e.target.id) {
            e.target.hidden = true;
        }
        fetch('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 1000 + 1))
            .then((response) => response.json())
            .then((pokemonData) => {
                img = <img key={pokemonData.id} className='imagen__juego' src={pokemonData.sprites?.other['official-artwork'].front_default}></img>
                setBtn(...btn,<button id={pokemonData.name} key={pokemonData.name} className='text-black' onClick={opciones}>{pokemonData.name}</button>);
                setBtn(...btn,<button id={pokemonData.name} key={pokemonData.name} className='text-black' onClick={opciones}>{pokemonData.name}</button>);
                win = pokemonData.name;
            }
        );
    };
    console.log(btn)
    function opciones(e) {
        console.log(e.target.id == win);
    }
    if(btn.length==4){
        setTodo(
            <div className='w-50 d-flex justify-content-center align-items-center'>
                {img}
                <div className='d-flex flex-column'>
                    {btn}
                </div>
            </div>
        )
    }

    return (
        <div className='d-flex justify-content-center align-items-center h-100 flex-column'>
            <h2 className='display-1'>How its that pokemon?</h2>
            {todo}
            <button className='text-white btn fs-1 jugar' id='jugar' onClick={jugar}>PLAY</button>
        </div>
    )
}
