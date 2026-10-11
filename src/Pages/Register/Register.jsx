import "./Register.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"


export default function Register({setIsLoggedIn}) {
    const navigate =useNavigate()

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        conpassword: ""
    })


    const handlechange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        // console.log(e.target.name , form.name);

    }

    const handlesubmit =()=>{
        localStorage.setItem("form", JSON.stringify(form))
        setIsLoggedIn(true)
        navigate("/dashboard")
    }

    return (
        <div >
            <div className='register-page'>
                <div className=' register-form' >
                    <form className='form-one'>
                        <label htmlFor="">Name  </label>
                        <input type="text" placeholder='Enter your Name ' className='form-two' name='name' onChange={handlechange} />
                        <label htmlFor="">Phone  </label>
                        <input type="number" placeholder='Mobile Num ' className='form-two' name='phone' onChange={handlechange} />
                        <label htmlFor="">Email </label>
                        <input type="email" placeholder='Email' className='form-two' name='email' onChange={handlechange} />
                        <label htmlFor="">Password  </label>
                        <input type="password" placeholder='Password' className='form-two' name='password' onChange={handlechange} />
                        <label htmlFor="">Confirm Password  </label>
                        <input type="password" placeholder='Confirm Password' className='form-two' name='password' onChange={handlechange} />
                        <div className='form-btn-div'>
                            <button className='form-btn' onClick={handlesubmit}>Submit</button>
                        </div>
                        {/* <h1>{form.password}</h1> */}
                    </form>
                </div>
                <div className='register-log'>
                    <p>Already have an account?</p>
                    <Link to={"/login"}>LogIn</Link>
                </div>
            </div >
        </div>
    )
}
