import React, { useEffect } from 'react'
import { Icon } from '@iconify/react'
import hero from '../../assets/hero.png'
import './Landing.css';
import {Link} from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore"; 
import {db} from '../../config';
import { useState } from 'react';




export default function Landing() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        getDocs(collection(db, "points"))
            .then((querySnapshot) => {
                let playerData = [];

                querySnapshot.forEach((doc) => {
                    let data = doc.data();
                    playerData.push(data);
                });
                playerData.sort((a, b) => b.points - a.points);
                
                setPlayers(playerData);
            })
    }, []);
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
            <h2 className='display-2 my-5'>Most Popular Players</h2>
            <table className='table w-50 fs-1 text-center'>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player, index) => (
                            <tr key={index}>
                                <td>{player.user_name}</td>
                                <td>{player.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </section>
    </>
  )
}
