import { Link } from "react-router-dom"
import "./Dashboard.css"



export default function Dashboard() {
    
    return (
        <div>
            <div className="explore-page">
                <hr/>
                <div className="explore-hero">
                    <h3>Welcome back, Aadhi 👋</h3> <br />
                    <p>Discover developers, build projects & grow.</p>
                </div>
                <div className="explore-btns" >
                    <Link to={"/developerprofileform"}><button className="explore-btn">+ Add Project</button></Link>
                    <Link to={"/addprojectform"}><button className="explore-btn">+ Add Profile</button></Link>
                </div>
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
