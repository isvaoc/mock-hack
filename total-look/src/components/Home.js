import React from 'react'
import {Link } from "react-router-dom";
import logo from '../img/logo.png'
import '../components/scss/Home.scss'

export default function Home() {
    return (
        <>
        <div>
            <header className="head">
                
              <img  className="logo"src={logo} alt="logo"></img>
              <div className="bar-icon">
              <Link to ='/login'>
              <img className="icons" src={"https://i.ibb.co/fFbLLM6/userblanco.png"} alt="login"></img></Link>
              
              <Link to ='/categories'>
              <img className="icons" src= {"https://i.ibb.co/0QwqXZD/carrito.png"}alt="carrito"></img>
              </Link>
              </div>
            </header>
        </div>
        <div>
            <h2 className="titulo">Promotions</h2>
            <div className="search">
            <input className="searchInput" type="search" id="site-search" name="q" aria-label="Search through site content" placeholder="Look for your clothes"/>
           <img className="lupaImg" src={"https://i.ibb.co/bQQP6zx/lupa-2.png"} alt="lupa"/>  </div>
            <div  className="promo"> <Link to ='/discounts'><img className="promoImg" src={"https://i.ibb.co/k68bDdC/desc.png"} alt="desc"></img></Link></div>
           
        </div>
        <div >
            <h2 className="titulo">Categories</h2>
            <Link to ='/categories'>See all categories {'>>'} </Link>
        </div>

        </>
    )
}

