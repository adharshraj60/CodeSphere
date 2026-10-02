import "./Dashboard.css"
import DashboardNavBar from "../../Components/NavBar/DashboardNavBar"



export default function Dashboard() {
    return (
        <div>
            <div>
                <DashboardNavBar />
                <div className="dash-con">
                    <hr />
                    <div className="dash-style">
                        <h3>Welcome back, Aadhi 👋</h3> <br />
                        <h4> Your Projects</h4>
                        <div>

                        </div>
                        <h4>Recommended Developers</h4>
                        <div>

                        </div>
                    </div>
                </div>

            </div>

        </ div>
    )
}
