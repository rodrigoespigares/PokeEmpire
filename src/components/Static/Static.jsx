import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import logo from '../../assets/logo.png';
import './Static.css'
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

export default function Static() {
    let navega = useNavigate()
    let [usuario,setUsuario] = useState("");
    useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        setUsuario(user)
      })

    },[]);
    function cerrarSesion(){
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                navega("/")
            })
            .catch((error) => {
            // An error happened.
            });
    }
    let login  ="";
    let menu = null;
    if(usuario){
        login = <button onClick={cerrarSesion} className='btn fs-1'>Log out</button>
        menu = <Link className='menu__link fs-1 text-uppercase' to="/play">Play</Link>
    }else{
        login = <Link to='/login'><button className='icon btn'><Icon icon="ph:user-duotone" /></button></Link>
        menu = null
    }

    return (
        <>
            <header id='header'>
                <div className='content'>
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                <div className='menu w-50'>
                    <Link className='menu__link fs-1 text-uppercase' to="/">Home</Link>
                    <Link className='menu__link fs-1 text-uppercase' to="/pokedex">Pokedex</Link>
                    {menu}
                </div>
                {login}
            </header>
            <footer id='footer'>
                <section id="footer__help">
                    <h3>Help</h3>
                    <ul>
                        <li><a href="#">Use of the product</a></li>
                        <li><a href="#">Frequently asked questions</a></li>
                        <li><a href="#">Questions</a></li>
                        <li><a href="#">Forum</a></li>
                    </ul>
                </section>
                <section id="footer__us">
                    <h3>About Us</h3>
                    <ul>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Use of our trademark</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </section>
                <section id="footer__legal">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="#">Legal contact</a></li>
                        <li><a href="#">Registered trademark</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Security and cookies</a></li>
                    </ul>
                </section>
                <section id="footer__info">
                    <div className="metodos">
                        <h3>Payment methods</h3>
                        <div className="metodos__icon">
                            <Icon className='icon' icon="mingcute:visa-line" />
                            <Icon className='icon' icon="mdi:paypal" />
                            <Icon className='icon' icon="brandico:mastercard" />
                        </div>
                    </div>
                    <div className="rrss__content__social">
                        <a href="facebook.com"><Icon className='icon' icon="mdi:facebook" /></a>
                        <a href="instragram.es"><Icon className='icon' icon="mdi:instagram" /></a>
                        <a href="twitter.es"><Icon className='icon' icon="mdi:twitter" /></a>
                        <a href="youtube.com"><Icon className='icon' icon="mdi:youtube" /></a>
                    </div>
                </section>
            </footer>
        </>
    )
}
