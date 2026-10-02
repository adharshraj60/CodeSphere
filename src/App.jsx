import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import Developer from "./Pages/Developer/Developer";
import Project from "./Pages/Projects/Project";
import DeveloperProfile from "./Pages/DeveloperProfile/DeveloperProfile";
import Dashboard from "./Pages/Dashboard/Dashboard";

// npx json-server --watch db.json --port 3000

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/developer" element={<Developer/>}/>
        <Route path="/Project" element={<Project/>}/> 
        <Route path="/developerprofile/:id" element={<DeveloperProfile/>}/> 
        <Route path="/dashboard" element={<Dashboard/>}/>    
        </Routes>
      </BrowserRouter>
    </div>
  )
}
