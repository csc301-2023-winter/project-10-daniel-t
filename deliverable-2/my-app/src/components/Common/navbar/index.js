import {Outlet, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {APIContext} from "../../../Contexts/APIContext";
import Helmet from "react-helmet"
import './index.css'

const Navbar = () => {

    return <>
        <div className="topnav">
            <a className="active" href="">Home</a>
            <a href="">Contact</a>
            <a href="">About</a>
        </div>
        <Outlet />
    </>

}
export default Navbar