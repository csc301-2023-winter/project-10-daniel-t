import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {APIContext} from "../../../Contexts/APIContext";
import Helmet from "react-helmet"
import './index.css'
import { Link } from "react-router-dom";

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
            {/*<a className="active" href="" onClick={goHome} id="home">Home</a>*/}
            <Link to="/" className="active" id="home">Home</Link>
            <Link to="/contact/"   id="contact">Contact</Link>
            <Link to="/about/"  id="about">About</Link>
        </div>
        <Outlet />
    </>

}

export default Navbar
