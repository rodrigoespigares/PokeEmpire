import React from 'react'

import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GithubAuthProvider,
    FacebookAuthProvider

} from "firebase/auth";
import { auth } from '../../config';
import { Icon } from '@iconify/react';
import './Login.css';
import {useNavigate} from 'react-router-dom'

export default function Login() {
let emailRegistro = "";
let emailInicio = "";
let passInicio = "";
let passRegistro = "";
let navega = useNavigate();
    function iniciaSesionGoogle() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                navega('/');
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    function inicioCorreo() {
        
        signInWithEmailAndPassword(auth, emailInicio.value, passInicio.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                router.push(link);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    function registroCorreo() {
    
        createUserWithEmailAndPassword(auth, emailRegistro.value, passRegistro.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
                router.push(link);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
            });
    }
    function iniciaSesionGitHub() {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
    
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            router.push(link);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GithubAuthProvider.credentialFromError(error);
            // ...
        });
    }
    function iniciaSesionFacebook() {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
    
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
    
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            navega('/');
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);
    
            // ...
        });
    }

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');


    
    function cambioClase(e) {
        if(e.target.id == 'signUp'){
            e.target.parentElement.parentElement.parentElement.parentElement.classList.add('right-panel-active')
        }else if(e.target.id == 'signIn'){
            e.target.parentElement.parentElement.parentElement.parentElement.classList.remove('right-panel-active')
        }
        
    }
    
  return (
    <>
        <section id="login__register">
        <div className="container" id="container">
            <div className="form-container sign-up-container">
                <div className="form">
                    <h1>Crear una cuenta</h1>
                    <div className="social-container">
                        <button onClick={iniciaSesionGoogle} type="button" className="social">
                            <Icon icon="mingcute:google-fill" />
                        </button>
                        <button onClick={iniciaSesionFacebook} type="button" className="social">
                            <Icon icon="bxl:facebook" />
                        </button>
                        <button onClick={iniciaSesionGitHub} type="button" className="social">
                            <Icon icon="fluent-mdl2:git-hub-logo" />
                        </button>
                    </div>
                    <span>o usa un email para registrarte</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" v-model="emailRegistro"/>
                    <input type="password" placeholder="Password" v-model="passRegistro"/>
                    <button onClick={registroCorreo()} className="buttons">Registro</button>
                </div>
            </div>
            <div className="form-container sign-in-container">
                <div className="form">
                    <h1>Inicio de sesión</h1>
                    <div className="social-container">
                        <button onClick={iniciaSesionGoogle} type="button" className="social">
                            <Icon icon="mingcute:google-fill" />
                        </button>
                        <button onClick={iniciaSesionFacebook} type="button" className="social">
                            <Icon icon="bxl:facebook" />
                        </button>
                        <button onClick={iniciaSesionGitHub} type="button" className="social">
                            <Icon icon="fluent-mdl2:git-hub-logo" />
                        </button>
                    </div>
                    <span>o usa tu cuenta</span>
                    <input type="email" placeholder="Email" v-model="emailInicio"/>
                    <input type="password" placeholder="Password" v-model="passInicio"/>
                    <button onClick={inicioCorreo()} className="buttons">Inicio sesión</button>
                </div>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Bienvendio</h1>
                        <p>
                            Inicia sesión con tu información personal
                        </p>
                        <button onClick={cambioClase} className="buttons ghost" id="signIn">Inicio sesión</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hola, bienvenido</h1>
                    <p>Coloca tus datos para registrarte haciendo click</p>
                    <button onClick={cambioClase} className="buttons ghost" id="signUp">Registrate</button>
                </div>
            </div>
        </div>
    </div>
</section>
    
    </>
  )
}
