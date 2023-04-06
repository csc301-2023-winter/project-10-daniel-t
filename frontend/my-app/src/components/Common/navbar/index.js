import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {APIContext} from "../../../Contexts/APIContext";
import './index.css'
import { Link } from "react-router-dom";


const Navbar = () => {
    const {refresh, setRefresh} = useContext(APIContext)
    const [button, setButton] = useState(true);

    let navigate = useNavigate()
    const showButton = () => {
      if (window.innerWidth <= 800) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    useEffect(() => {
      showButton();
    }, []);

    window.addEventListener('resize', showButton);

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
        <div>
        <div className="topnav">
            <img id="logo" src={require('./img.png')} />

            <Link to="/search" className="active" id="home">Home</Link>
            {button?<Link to="contact/"   id="contact">Contact</Link>:<></>}
            {button?<Link to="about/"  id="about">About</Link>:<></>}
        </div>
        </div>
        <Outlet />
    </>

}

export default Navbar
