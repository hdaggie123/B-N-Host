import react from 'react';

//here I am creating a basic registration page

function Register() {
    //Here I am going to add the database access so data gets stored
    

    return (
        <div>
            <h1>Register</h1>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <label>
                    Confirm Password:
                    <input type="password" name="password" />
                </label>
                <label>
                    Role:
                    <select>
                        <option value="customer">Customer</option>
                        <option value="manager">Manager</option>
                        <option value="staff">Staff</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Register;
