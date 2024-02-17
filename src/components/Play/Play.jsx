import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './Play.css';
import './styles/css-pokemon-gameboy.css'
import { collection, addDoc, query, where, getDocs, updateDoc} from "firebase/firestore"; 
import {db} from '../../config';

import Loading from '../Loading/Loading';

let puntos = 0;

export default function Play() {
    const [img, setImg] = useState("");
    const [options, setOptions] = useState([]);
    const [correctPokemon, setCorrectPokemon] = useState("");
    let [end,setEnd] = useState("");
    let [winner,setWinner] =useState("");
    let [usuario,setUsuario] = useState("");
    let [vidas, setVidas] = useState(3);
    let [loading, setLoading] = useState(false);
    let nombreUsuario = "";
    let cargaLoading;
    if(loading){
      cargaLoading = (<div className='text-black position-absolute d-flex flex-column align-items-center justify-content-center'> <Loading></Loading> </div>)
    }else{
      cargaLoading = null;
    }

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          setUsuario(user);
        });
    }, [setUsuario]);
    function iniciarJuego(e) {
        setLoading(true)
        setWinner("");
        e.target.id=="jugar"?e.target.hidden=true:"";
        document.getElementById("infoVidas").hidden=false;
        const aleatorio = Math.floor(Math.random() * 1000);
        fetchPokemon(aleatorio + 1);
    }

    function volverJugar(e) {
        let userName = nombreUsuario === "" ? usuario.email.split('@')[0] : nombreUsuario;
    
        const pointsCollection = collection(db, "points");
        const userQuery = query(pointsCollection, where("user_id", "==", usuario.uid));
        getDocs(userQuery)
            .then((querySnapshot) => {
                if (querySnapshot.size > 0) {
                    // Documento encontrado, actualiza la puntuación
                    const userDoc = querySnapshot.docs[0].ref;
                    const existingPoints = querySnapshot.docs[0].data().points;
    
                    if (puntos > existingPoints) {
                        return updateDoc(userDoc, { user_name: userName, points: puntos });
                    }
                } else {
                    return addDoc(pointsCollection, {
                        user_id: usuario.uid,
                        user_name: userName,
                        points: puntos
                    });
                }
            })
            .then(() => {
                puntos = 0;
                setVidas(3);
                setEnd("");
                iniciarJuego(e);
            })
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
                        console.log(correctName);
                        opciones[respuestaCorrecta] = correctName;
                        setOptions(opciones);
                    }
                });
        }
        setLoading(false)
    }

    function opciones(e) {
        const selectedPokemon = e.target.innerText;
        const isCorrect = selectedPokemon.toLowerCase() === correctPokemon;
        if(isCorrect){
            puntos++;
            document.getElementsByClassName("imagen__juego")[0].classList.add("ver");
            win();
            setTimeout(() => {
                iniciarJuego(e);
            }, 1000);
            
        }else{
            setVidas(vidas-1);
            if(vidas == 0)
            endgame()
        }
    }
    
    function endgame(){
        setEnd(
            <div id='volver' className='text-black position-absolute d-flex flex-column align-items-center justify-content-center alert alert-light' role='alert'>
                <h1>YOU HAVE ACHIEVED {puntos} POINTS</h1>
                <label className='text-black' htmlFor="username">USER NAME</label>
                <input
                    className='text-black'
                    type="text"
                    defaultValue={usuario.email.split('@')[0]}
                    onChange={(e) => nombreUsuario = e.target.value}
                />
                <button className='text-black' onClick={volverJugar}>PLAY AGAIN</button>
            </div>
        );

    }
    function win(){
        setWinner(
            <div id='volver' className='text-black position-absolute d-flex flex-column align-items-center justify-content-center alert alert-success' role='alert'>
                <h1>CORRECT</h1>
                <p className='text-black'>POINTS: {puntos}</p>
            </div>
        );
    }
    return (
        <div id="juego" className='d-flex justify-content-center align-items-center h-100 flex-column'>
            <h2 className='display-1'>Who it's that Pokemon?</h2>
            <div className='d-flex align-items-center'>
                {img}
                <div className='d-flex flex-column justify-content-evenly h-100'>
                    {options.map((option, index) => (
                        <button key={index} onClick={opciones} className='text-white nombres fs-1 jugar btn btn-outline-primary'>{option}</button>
                    ))}
                </div>
            </div>
            {cargaLoading}
            {end}
            {winner}
            <div hidden id='infoVidas' className="progress-bar-container">
                <progress id="progressBarR" className="p20" value={Math.ceil(vidas==0?1.5:vidas*33.33)} max="100"></progress>
            </div>
            <button className='text-white nombres fs-1 jugar btn btn-outline-primary' id='jugar' onClick={iniciarJuego}>PLAY</button>
        </div>
    );
}