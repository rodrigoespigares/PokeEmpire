import React from 'react'
import { Icon } from '@iconify/react'
import hero from '../../assets/hero.png'
import './Landing.css';

export default function Landing() {
  return (
    <>
        <section id="hero">
            <div className='content'>
                <h1>Discover and play with pokemon</h1>
                <h2 className='fade__title'>Start now</h2>
                <button>Search <Icon icon="mingcute:right-line" /></button>
            </div>
            <div className='picture'>
                <img src={hero} alt="Pikachu" />
            </div>
        </section>
        <section id='ranking'>
            <h2>Most Popular Players</h2>
            
        </section>
    </>
  )
}
