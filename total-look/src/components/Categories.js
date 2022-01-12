import React, {useState, useEffect} from 'react'
import logo from '../img/logo.png'
import login from '../img/login.png'
import shoppingCar from '../img/shoppingCar.png'
import {
    getElements
} from '../crud';
import './scss/Categories.scss'

export default function Categories() {
    
        const [data, setData] = useState([]);
    

        useEffect(() => {
            getElements('categories').then((res) => setData(res));
        },[data]);

        let categ = data.map((elem) => {
            let objCat = {
                name: elem.category,
                img: elem.image
            }
            return objCat
        })

        let contCat =[]
        for (let i = 0; i < categ.length; i++) {
            contCat.push( 
              <div className='container-cat'>
                <img src={categ[i].img} alt="img-cat" height='300px'></img>
                <p>{categ[i].name}</p>
                <div className='cta-btns'>
                    <button type='button' className='cat-delete'>Eliminar</button>
                    <button type='button' className='cat-edit'>Editar</button>
                </div>
              </div>
            )
          }

          
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
            <div className='container-info'>
                <h2>CATEGORIES</h2>
                <div className='div-new-cat'><button className="btn-categorias">+ New categorie</button></div>
                
                <div className='container-cards'>{contCat}</div>
                
            </div>
            
            <footer>Realizado por Codeven</footer>
        </div>
    )
}
