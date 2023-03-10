import {Outlet, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {APIContext} from "../../../Contexts/APIContext";
import Helmet from "react-helmet"


const About = () =>{
    const {refresh, setRefresh} = useContext(APIContext)

    useEffect(() => {
        let about = document.getElementById("about")
        if (about.style.color !== "white"){
            let home = document.getElementById("home")
            let contact = document.getElementById("contact")
            home.style.color = null
            home.style.backgroundColor = null
            about.style.color = "white"
            about.style.backgroundColor = "rgb(0, 139, 176)"
            contact.style.color = null
            contact.style.backgroundColor = null
        }





    }, [setRefresh, refresh])

    return <>
        <div className="project-details">
            <h1>About Us:</h1>
            <p>The Master of Science in Applied Computing (MScAC) degree program is committed to
                educating the next generation of world-class innovators. In a bid to sustain a culture of
                empowerment and innovation, it is the program’s mission to develop critical human capital
                for the knowledge economy as well as forge broader University of Toronto academic-industry partnerships.
            </p>
        </div>
    </>
}

export default About