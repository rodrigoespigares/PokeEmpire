import React from 'react'
import { Icon } from '@iconify/react';
import logo from '../../assets/logo.png';
import './Static.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Static() {
    return (
        <>
            <header id='header'>
                <div className='content'>
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                <div className='menu'>
                    <Link className='menu__link' to="/">Home</Link>
                    <Link className='menu__link' to="/pokedex">Pokedex</Link>
                </div>
                <Link to='/login'><button className='icon'><Icon icon="ph:user-duotone" /></button></Link>
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
