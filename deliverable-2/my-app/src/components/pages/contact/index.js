import {Outlet, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {APIContext} from "../../../Contexts/APIContext";
import './contact.css'
import Helmet from "react-helmet"
import Map from "../../map/index.js"


const Contact = () => {
    const {refresh, setRefresh} = useContext(APIContext)



    useEffect(() => {
        let contact = document.getElementById("contact")
        if (contact.style.color !== "white"){
            let home = document.getElementById("home")
            let about = document.getElementById("about")
            home.style.color = null
            home.style.backgroundColor = null
            about.style.color = null
            about.style.backgroundColor = null
            contact.style.color = "white"
            contact.style.backgroundColor = "rgb(0, 139, 176)"

        }

    }, [setRefresh, refresh])

    return <>
        <div className="project-details" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        <h1>Contact Information:</h1>

        <div className="map">
            <Map></Map>
        </div>
        <div id="contact-info">
            <div id="office">
                <h4>Office Location: </h4>
                <h5>Master of Science in Applied Computing (MScAC) Program</h5>
                <a>700 University Avenue - 9th Floor<br></br>Toronto, ON  <br></br>M5G 1Z5<br></br>Canada</a>

            </div>
            <p className="phone" style={{width: '100%'}}>Phone call: 123-456-7890</p>
            <a href="mailto:admissions@mscac.utoronto.ca" id="email" style={{width: '100%'}}>Email: admissions@mscac.utoronto.ca</a>
        </div>
        </div>
    </>
}

export default Contact
