import "./Login.css"
import { Link } from 'react-router-dom'
export default function Login() {
    return (
        <div >
            <div className='login-page'>
                <div className="login-box">
                    <div className='login-div'>
                        <label>E-mail :</label>
                        <input type="email" placeholder="Enter your e-mail" className="login-input" />
                        <label>Password :</label>
                        <input type="password" placeholder="Enter your password" className="login-input" />
                        <Link to="/dashboard"><button className="login-btn">Confirm</button></Link>
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
