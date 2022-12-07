import react from 'react';
import './Register.css';
import {useState} from 'react';
import axios from 'axios';
//here I am creating a basic registration page

/**
 * registration page
 * @returns creates a registration page where users can register for an account
 */
function Register() {
    //Here I am going to add the database access so data gets stored
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [roleReg, setRoleReg] = useState("");

    const register = () => {
        axios.post("http://localhost:3001/accounts", {
            username: usernameReg,
            password: passwordReg,
            classification: roleReg,
        }).then((response) => {
            console.log(response);
        });
    }

    return (
        < div className='register'>
            <h1 className='header'>Register</h1>
            <form>
                <label>
                    Username:
                    <input type="text" onChange={(e) => setUsernameReg(e.target.value)} name="username" />
                </label>
                <label>
                    Password:
                    <input type="text" onChange={(e) => setPasswordReg(e.target.value)} name="password" />
                </label>
                <label>
                    Role:
                    <select type = "text" onChange={(e) => setRoleReg(e.target.value)} name="classification">
                        <option value="customer">Customer</option>
                        <option value="manager">Manager</option>
                        <option value="staff">Staff</option>
                    </select>
                </label>
                <div>
                    <button className="button" onClick={register}>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register;