import React from 'react'
import { Icon } from '@iconify/react';
import logo from '../../assets/logo.png';
import './Static.css'

export default function Static() {
  return (
    <>
      <header id='header'>
        <a>
            <img src={logo} alt="" />
        </a>
        <div className='menu'>
            <button>Home</button>
            <button>Best pokemon</button>
        </div>
        <button className='icon'><Icon icon="ph:user-duotone" /></button>
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
                  <Icon icon="mingcute:visa-line" />
                  <Icon icon="mdi:paypal" />
                  <Icon icon="brandico:mastercard" />
                </div>
            </div>
            <div className="rrss__content__social">
                <a href="facebook.com"><Icon icon="mdi:facebook" /></a>
                <a href="instragram.es"><Icon icon="mdi:instagram" /></a>
                <a href="twitter.es"><Icon icon="mdi:twitter" /></a>
                <a href="youtube.com"><Icon icon="mdi:youtube" /></a>
            </div>
        </section>
    </footer>
    </>
  )
}
