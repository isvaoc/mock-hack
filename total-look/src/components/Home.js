import React from 'react'
import {Link } from "react-router-dom";
import logo from '../img/logo.png'
import desc from '../img/desc.png'
import lupa from '../img/lupa.png'

export default function Home() {
    return (
        <>
        <div>
             <header>
                <img src={logo} alt="logo"></img>
                <Link to ='/login'>Login</Link>
                <Link to ='/categories'>Carrito</Link>
             </header>
        </div>
        <div>
            <h2>Promotions</h2>
            <input type="search" id="site-search" name="q" aria-label="Search through site content"/>
            <button><img src={lupa} alt="lupa"/></button>
            <Link to ='/discounts'><img src={desc} alt="desc"></img></Link>
        </div>

        </>
    )
}

