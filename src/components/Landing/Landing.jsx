import React, { useEffect } from 'react'
import { Icon } from '@iconify/react'
import hero from '../../assets/hero.png'
import './Landing.css';
import {Link} from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore"; 
import {db} from '../../config';
import { useState } from 'react';




export default function Landing() {
    let [player, setPlayer] = useState ([]);
    useEffect(() => {
        getDocs(collection(db, "points")).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setPlayer([...player,doc.data()]);
            })
        })
    },[]);
  return (
    <>
        <section id="hero">
            <div className='content'>
                <h1>Discover and play with pokemon</h1>
                <h2 className='fade__title'>Start now</h2>
                <Link className='link' to="/pokedex"><button>Search <Icon icon="mingcute:right-line" /></button></Link>
            </div>
            <div className='picture'>
                <img src={hero} alt="Pikachu" />
            </div>
        </section>
        <section id='ranking' className='d-flex flex-column align-items-center'>
            <h2 className='display-2'>Most Popular Players</h2>
            
        </section>
    </>
  )
}
