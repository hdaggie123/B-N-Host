import react from 'react';
import reactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link } from "react-router-dom";
import './Login.css';
import {useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode';

export default function Login() {
    //I will be creating a simple login page
    //Here I will handle manual login entries
    




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
        <div class="background wrapper">
            <div class="header right">
                <h1>Welcome to Barnes and Noble Cafe!</h1>
            </div>
            <div className='logo left'>
                <img src={require("../Pictures/Starbucks_logo.png")} alt="Starbucks" width="100%" height="100%"/>
            </div>
            <div>
                    <form className='login_box'>
                        <h2>Sign In</h2>
                    <div>
                    <label for="username">Username:  </label>
                    <input type="text" id="username" name="username" />
                    </div>
                    <div>
                    <label for="password">Password:   </label>
                    <input type="password" id="password" name="password" />
                    </div>
                    <button className='star-sign'>Sign In!</button>
                    <div id="my-signin2"></div>
                    {Object.keys(user).length != 0 && <button onClick={(e) =>  handleSignOut(e)}>Sign Out</button>}
                    {user && <div>{user.name}</div>}
                    
                    <div>
                    <li>
                        <Link to="/Register">Register Here!!</Link>
                    </li>
                    </div>
                </form>
            </div>
        </div>
        
    );
    }