import { useState } from "react"
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
export default function Login({setIsLoggedIn}) {

    const navigate=useNavigate()
    const data = JSON.parse(localStorage.getItem("form"))
    const [loginForm, setLoginForm]=useState({
        email :"" ,
        password :""
    })

    const handelcheck =(e)=>{
        setLoginForm({
            ...loginForm,
            [e.target.name] : e.target.value 
        })
        // console.log(loginForm);
    }
        
        
    const handelchange=()=>{
         if (loginForm.email === data.email
            &&
            loginForm.password === data.password) {
            localStorage.setItem("login", "true");
            setIsLoggedIn(true);
            navigate("/dashboard");
        }
        else {
            alert("Email or Password wrong");
        }
    }

    return (
        <div >
            <div className='login-page'>
                <div className="login-box">
                    <div className='login-div'>
                        <label>E-mail :</label>
                        <input type="email" placeholder="Enter your e-mail" 
                        className="login-input" name="email" onChange={handelcheck}  />
                        <label>Password :</label>
                        <input type="password" placeholder="Enter your password" 
                        className="login-input" name="password" onChange={handelcheck}/>
                        <button className="login-btn" onClick={handelchange}>Confirm</button>

                    </div>
                </div>
                <div className='log-register'>
                    <p>Forgot Password?</p>
                    <p>Don't have an account?</p>
                    <Link to={"/register"}> Register</Link>
                </div>
            </div>
        </div>
    )
}
