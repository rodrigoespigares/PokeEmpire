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
        login = <button onClick={cerrarSesion} className='icon btn'>Cerrar sesión</button>
        menu = <Link className='menu__link' to="/play">Play</Link>
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
                <div className='menu'>
                    <Link className='menu__link' to="/">Home</Link>
                    <Link className='menu__link' to="/pokedex">Pokedex</Link>
                    {menu}
                </div>
                {login}
            </header>
            <footer id='footer'>
                <section id="footer__help">
                    <h3>Ayuda</h3>
                    <ul>
                        <li><a href="#">Uso del producto</a></li>
                        <li><a href="#">Preguntas frecuentes</a></li>
                        <li><a href="#">Cuestiones</a></li>
                        <li><a href="#">Foro</a></li>
                    </ul>
                </section>
                <section id="footer__us">
                    <h3>Nosotros</h3>
                    <ul>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Sobre nosotros</a></li>
                        <li><a href="#">Uso de nuestra marca</a></li>
                        <li><a href="#">Conctacto</a></li>
                    </ul>
                </section>
                <section id="footer__legal">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="#">Contacto legal</a></li>
                        <li><a href="#">Marca registrada</a></li>
                        <li><a href="#">Privacidad</a></li>
                        <li><a href="#">Seguridad y cookies</a></li>
                    </ul>
                </section>
                <section id="footer__info">
                    <div className="metodos">
                        <h3>Métodos de pago</h3>
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
