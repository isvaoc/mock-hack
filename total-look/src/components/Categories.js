import React, {useState, useEffect} from 'react'
import logo from '../img/logo.png'
import login from '../img/login.png'
import shoppingCar from '../img/shoppingCar.png'
import edit from '../img/edit.png'
import del from '../img/delete.png'
import {db} from '../firebase/firebase-initialize'
import { collection, getDocs } from "firebase/firestore";
import { onSnapshot, query } from '@firebase/firestore'

export default function Categories() {
    const [clothes, setClothes] = useState([]);
    useEffect(() => {
        const renderClothes = () => {
            //for (let i = 0; i < db.length; i++) {
                try {
                    onSnapshot(query(collection(db, '1')), (querySnapshot) => {
                      const documents = [];
                      querySnapshot.forEach((doc) => {
                        documents.push({ id: doc.id, ...doc.data() });
                      });
                      setClothes(documents);
                    });
                  } catch (error) {
                    console.log(error);
                  }
                  console.log('Jala', db.collection)
           // }
          
          };
          return renderClothes();
        }, []);   

          
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
                    <img src={'https://i.ibb.co/r3Vz74X/dress1.webp'} alt=""></img>
                    <img src={edit} alt=""></img>
                    <img src={del} alt=""></img>
                </div>
                <div>
                    <img src={'https://i.ibb.co/pbzstpb/falda1-600x.webp'} alt=""></img>
                    <img src={edit} alt=""></img>
                    <img src={del} alt=""></img>
                </div>
                <div>
                    <img src={'https://i.ibb.co/VWYRQtL/16173341445e7d36085b201d2fa94b9e21e42259c9.webp'} alt=""></img>
                    <img src={shoppingCar} alt=""></img>
                    <img src={shoppingCar} alt=""></img>
                </div>
                <div>
                    <img src={'https://i.ibb.co/CKR630Q/1614061485b23832345e013c6ab88dd6c82429c47f.webp'} alt=""></img>
                    <img src={shoppingCar} alt=""></img>
                    <img src={shoppingCar} alt=""></img>
                </div>
                <div>
                    <img src={'https://i.ibb.co/27JzvPF/1632830339c225b8952285cc29d26484576198939b-thumbnail-600x.webp'} alt=""></img>
                    <img src={shoppingCar} alt=""></img>
                    <img src={shoppingCar} alt=""></img>
                </div>
            </div>
            <footer>Realizado por Codeven</footer>
        </div>
    )
}
