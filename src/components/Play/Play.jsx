import React, { useEffect, useState } from 'react'
import './Play.css'
import { text } from './text'
    



export default function Play() {
    let [img, setImg] =useState("");
    let [nombres, setNombres] = useState([]);
    let [todo, setTodo] = useState("");
    let [win,setWin] = useState("")
    let [winId,setWinId] = useState(0);
    function jugar(e) {
        if (e.target.id) {
            e.target.hidden = true;
        }
        fetch('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 1000 + 1))
            .then((response) => response.json())
            .then((pokemonData) => {
                setImg(<img key={pokemonData.id} className='imagen__juego' src={pokemonData.sprites?.other['official-artwork'].front_default}></img>);
                setNombres([...nombres,pokemonData.name]);
                setWin(pokemonData.name);
                setWinId(pokemonData.id);
            }
        );
        
        let aleatorio = Math.floor(Math.random() * 1000 + 1);
        while(winId == aleatorio){
            aleatorio = Math.floor(Math.random() * 1000 + 1)
        }
        rellenar(aleatorio);
    };
    console.log(nombres);
    function rellenar(num) {

        fetch('https://pokeapi.co/api/v2/pokemon/' + num)
            .then((response) => response.json())
            .then((pokemonData) => {
                setNombres([...nombres,pokemonData.name]);
            }
        );
        
        
    };
    function opciones(e) {
        console.log(win)
        console.log(e.target.id == win);
    }
    if(nombres.length==1){
        setTodo(
            <div className='w-50 d-flex justify-content-center align-items-center'>
                {img}
                <div className='d-flex flex-column'>
                    <button id={nombres} onClick={opciones}>{nombres}</button>
                </div>
            </div>
        )
        setNombres([]);
    }else if(nombres.length>1){
        let aleatorio = Math.floor(Math.random() * 1000 + 1);
        while(winId == aleatorio){
            aleatorio = Math.floor(Math.random() * 1000 + 1)
        }
        rellenar(aleatorio);
    }

    return (
        <div className='d-flex justify-content-center align-items-center h-100 flex-column'>
            <h2 className='display-1'>How its that pokemon?</h2>
            {todo}
            <button className='text-white nombres fs-1 jugar' id='jugar' onClick={jugar}>PLAY</button>
        </div>
    )
}
