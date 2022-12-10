import react from 'react';
import reactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link } from "react-router-dom";
import './Login.css';
import {useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export default function Login() {
    //I will be creating a simple login page
    //Here I will handle manual login entries
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [luser, setLUser] = useState({});
    const [loginStatus, setLoginStatus] = useState("");



    const handleLogin = async(e) => {
        useEffect = () => {
            fetch("http://localhost:3001/login")
            .then((luser) => user.json())
            .then((luser) => setLUser(user))
        }

        //Here I want to check if the user is in the database
            

        e.preventDefault();

        await axios.get('http://localhost:3001/LogIn', {}, {
            auth: {
              username: setUsername,
              password: setPassword,
            }
            }).then((response) => {
                if(response.data.message) {
                    setLoginStatus(response.data.message);
                } else {
                    setLoginStatus(response.data[0].username);
                }
          });
    }
    //All of the code below is for the google sign in button
    const [user, setUser] = useState({});

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID Token: " + response.credential);
        var decoded = jwt_decode(response.credential);
        console.log( decoded);

        setUser(decoded);
        document.getElementById("my-signin2").hidden = true;
    }

    function handleSignOut() {
        setUser({});
        document.getElementById("my-signin2").hidden = false;
    }
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({client_id: "1037680742660-svicfn8onsq83sqt5bdg7gprr24k18kk.apps.googleusercontent.com", 
        callback: handleCallbackResponse});

        google.accounts.id.renderButton(document.getElementById("my-signin2"), {theme: "outline", size: "large"});
    }, []);

    return (
        <div className="background wrapper">
            <div className='logo left'>
                <img src={require("../Pictures/barnes&nobleLogo.jpg")} alt="Starbucks" width="100%" />
            </div>
            <div className='login_box'>
                <form onSubmit={handleLogin}>
                    <h2>Sign In</h2>
                    <div className="sign-input"> {/* added  */}
                        <label htmlFor="username">Username:  </label>
                        <input type="text" placeholder="enter email or user name" id="username" required />
                    </div>
                    <div className="sign-input">
                        <label htmlFor="password">Password:   </label>
                        <input type="password" placeholder="enter password"  id="password" required />
                    </div>
                    <div className="sign-input">
                        <button className='star-sign'>Sign In!</button>
                        <div id="my-signin2"></div>
                        {Object.keys(user).length != 0 && <button onClick={(e) =>  handleSignOut(e)}>Sign Out</button>}
                        {user && <div>{user.name}</div>}
                        
                      
                        <label htmlFor="username">Don't have an account?</label>
                        <button className='star-sign'>
                        <li>
                            <Link to="/Register">Register Here!!</Link>
                        </li>
                        </button>
                        
                    </div>
                </form>
            </div>
        </div>
        
    );
    }