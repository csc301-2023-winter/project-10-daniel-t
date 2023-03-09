import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {APIContext} from "../../../Contexts/APIContext";
import Helmet from "react-helmet"
import './index.css'

const Navbar = () => {
    const {refresh, setRefresh} = useContext(APIContext)
    let navigate = useNavigate()

    let goContact =(event) =>{
        return navigate("/contact/")
    }

    let goHome = (event) =>{
        return navigate("/")
    }

    let goAbout = (event) =>{
        return navigate("/about/")
    }

    return <>
        <div className="topnav">
            <a className="active" href="" onClick={goHome} id="home">Home</a>
            <a href="" onClick={goContact} id="contact">Contact</a>
            <a href="" onClick={goAbout} id="about">About</a>
        </div>
        <Outlet />
    </>

}
export default Navbar
