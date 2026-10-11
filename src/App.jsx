import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import Developer from "./Pages/Developer/Developer";
import Project from "./Pages/Projects/Project";
import DeveloperProfile from "./Pages/DeveloperProfile/DeveloperProfile";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Explore from "./Pages/Explore/Explore";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import DevProfileForm from "./Pages/DevProfileForm/DevProfileForm";
import AddProjectForm from "./Pages/AddProjectForm/AddProjectForm";
import { useEffect, useState } from "react";

// npx json-server --watch db.json --port 3000

export default function App() {
 const [isLoggedIn,setIsLoggedIn] =useState(() => {
        return localStorage.getItem("login") === "true";
    });


  return (
    <div>
      <BrowserRouter>
      <NavBar isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/developer" element={<Developer/>}/>
        <Route path="/project" element={<Project/>}/> 
        <Route path="/developerprofile/:id" element={isLoggedIn ?(
          <DeveloperProfile/>)
          : (<Navigate to={"/login"}/>)
        }/> 
        <Route path="/dashboard" element={isLoggedIn ?(
          <Dashboard setIsLoggedIn={setIsLoggedIn}/>)
        : (<Navigate to={"/login"}/>)}/> 
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/projectdetails/:id" element={isLoggedIn ?(
        <ProjectDetails/>)
        : (<Navigate to={"/login"}/>)
        }/> 
        <Route path="/developerprofileform" element={isLoggedIn ?(
        <DevProfileForm/>)
        : (<Navigate to={"/login"}/>)
        }/>  
        <Route path="/addprojectform" element={isLoggedIn ?(
        <AddProjectForm/>)
        : (<Navigate to={"/login"}/>)
        }/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}
