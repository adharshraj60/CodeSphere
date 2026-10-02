import "./Dashboard.css"
import DashboardNavBar from "../../Components/NavBar/DashboardNavBar"
import Footer from "../../Components/Footer/Footer"



export default function Dashboard() {
    
    return (
        <div>
            <div className="explore-page">
                <DashboardNavBar />
                <hr />
                <div className="explore-hero">
                    <h3>Welcome back, Aadhi 👋</h3> <br />
                    <p>Discover developers, build projects & grow.</p>
                </div>
                <div className="explore-btns" >
                    <button className="explore-btn">+ Add Project</button>
                    <button className="explore-btn">+ Add Profile</button>
                </div>
                <div className="">
                    <h4> Feature Projects</h4>
                </div>
                <div>
                    <h4>Recommended Developers</h4>
                </div>


            </div>
            <Footer />
        </ div>
    )
}
