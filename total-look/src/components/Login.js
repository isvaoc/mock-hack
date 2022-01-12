import React from 'react'

export default function Login() {
    return (
        <div>
            <h1>Aqui es el login</h1>
        </div>
    )
}
//import React, { useState } from 'react'
//import { Link, useHistory } from "react-router-dom";
//import './styles/Login.css';
//import logo from '../assets/logo.png';
//import register from '../assets/icon-register.png';
//import imgLogin from '../assets/img-login.png';
//import { useAuth } from '../context/AuthContext';
//import { FormLogin } from './FormLogin';

//const Login = () => {
//    const { login, loginGoogle } = useAuth();
//    const [error, setError] = useState(null);

//    const history = useHistory();

//    const handleLogin = async (email, pass) => {

//        try {
//            await login(email, pass)
//            console.log('ya entre');
//            history.push("/notes");
//        } catch (error) {
//            setError('Algo salió mal con el correo o contraseña, vuelve a intentar');
//            setTimeout(() => setError(''), 2000);
//            //console.log('no sirve');
//        }
//    }

//    const handleGoogle = async () => {
//        try {
//            await loginGoogle();
//            history.push('/notes')
//            console.log('google')
//        } catch (error) {
//            console.log('hay un error en google')
//            setError('Wrong credentials,try again.')
//            console.log(error);
//        }
//    };

//    return (
//        <div className="container">
//            <div className="header">
//                <header><Link to='/'><img src={logo} alt="logo" className="logo" /></Link>
//                    <Link to='/register'><img src={register} alt="register" className="icon" /></Link></header>
//            </div>

//            <div className="title">
//                <img src={imgLogin} alt="imgLogin" className="imgRegister" />
//                <h1 className="h1-login">Inicia Sesión</h1>
//            </div>
            
            
//            <FormLogin handleLogin={handleLogin} handleGoogle={handleGoogle} />
//            <div>{error && <p className="error">{error}</p>}</div>
//        </div>
//    );

//}
//export default Login;



//import React, { useState } from 'react'
//import googleImg from '../assets/google.png';

//export const FormLogin = (props) => {
//    const {handleLogin, handleGoogle}= props;
//    const [email, setEmail] = useState('');
//    const [pass, setPass] = useState('');
//    const handleEmail =(e) => setEmail(e.target.value);
//    const handlePassword= (e)=> setPass(e.target.value);

//    return (
//        <div className="form-login">
//            <h3>e-mail:</h3>
//            <input className="input-login" type="text" placeholder="ejemplo@correo.com" onChange={handleEmail} required />
//            <h3>Password:</h3>
//            <input className="input-login" type="password" placeholder="******" onChange={handlePassword} required />
//            <br />
//            <button className="btn-login" onClick={() => { handleLogin(email, pass) }}>Iniciar Sesión</button>
//            <button className="btn-google" onClick={handleGoogle}>Google<img src={googleImg} alt="googleImg" className="googleImg" /></button>
            
//        </div>
//    )
//}
