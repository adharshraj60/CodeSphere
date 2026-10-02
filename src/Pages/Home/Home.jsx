import NavBar from "../../Components/NavBar/NavBar"
import Footer from "../../Components/Footer/Footer"
import "./Home.css"
import { Link } from "react-router-dom"

export default function Home() {
  return (
      <div>
            <div className='home-page'>
                <NavBar content="Search ..."/>
                <div className='home-hero'>
                    <h1> BUILD. CONNECT. LAUNCH. </h1>
                </div>
                <div className='home-para'>
                    <p>Showcase your work.Connect with developers.Build something great. </p>
                </div>
                <div className='home-btns'>
                    <button className='home-btn'>Explore Projects</button>
                    <Link to={"./register"}><button className='home-btn'>Join CodeSphere </button></Link>
                </div>
            </div>
            <div className='home-page2'>
                <div className='home-about'>
                    <h1>  Why CodeSphere?  </h1>
                </div>
                <div className='home-poster1'>
                   
                </div>
            </div>
            <div  className='home-page3'>
                <div className='home-feature'> 
                    <h1>Featured Projects</h1>
                </div>
                <div className='home-poster'>
                     
                </div>
            </div>
           <div>
            <Footer/>
            </div> 
        </div>
  )
}
