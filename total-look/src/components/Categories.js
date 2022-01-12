import React from 'react'
import logo from '../img/logo.png'
import login from '../img/login.png'
import shoppingCar from '../img/shoppingCar.png'

export default function Categories() {
    return (
        <div>
            <header>
                <img src={logo} alt="logo"></img>
                <button>
                    <img src={login} alt="login"></img>
                </button>
                <button>
                    <img src={shoppingCar} alt="shoppingCar"></img>
                </button>
            </header>
            <div>
                <h2>CATEGORIES</h2>
                <button>+ New categorie</button>
            </div>
            <div>
                <div>
                    <img src={shoppingCar} alt=""></img>
                    <img src={shoppingCar} alt=""></img>
                    <img src={shoppingCar} alt=""></img>
                </div>
                <div>
                    <img src={shoppingCar} alt=""></img>
                    <img src={shoppingCar} alt=""></img>
                    <img src={shoppingCar} alt=""></img>
                </div>
                <div>
                    <img src={shoppingCar} alt=""></img>
                    <img src={shoppingCar} alt=""></img>
                    <img src={shoppingCar} alt=""></img>
                </div>
                <div>
                    <img src={shoppingCar} alt=""></img>
                    <img src={shoppingCar} alt=""></img>
                    <img src={shoppingCar} alt=""></img>
                </div>
                
            </div>
            <footer>Realizado por Codeven</footer>
        </div>
    )
}
