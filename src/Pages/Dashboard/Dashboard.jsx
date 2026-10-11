import { Link, useNavigate } from "react-router-dom"
import "./Dashboard.css"



export default function Dashboard({setIsLoggedIn}) {

    const data = JSON.parse(localStorage.getItem("form"))
    const navigate =useNavigate()

    const handelchange =()=>{
         localStorage.removeItem("login")
        setIsLoggedIn(false)
        navigate("/login")
    }
    
    return (
        <div>
            <div className="explore-page">
                <hr/>
                <div className="explore-hero">
                    <h3>Welcome back, {data.name} 👋</h3> <br />
                    <p>Discover developers, build projects & grow.</p>
                </div>
                <div className="explore-btns" >
                    <Link to={"/developerprofileform"}><button className="explore-btn">+ Add Project</button></Link>
                    <Link to={"/addprojectform"}><button className="explore-btn">+ Add Profile</button></Link>
                </div>
                 <button className="explore-btn" onClick={handelchange}>LogOut</button>
                <div className="">
                    <h4> Feature Projects</h4>
                </div>
                <div>
                    <h4>Recommended Developers</h4>
                </div>


            </div>
        </ div>
    )
}
