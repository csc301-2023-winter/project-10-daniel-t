import {Outlet, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {APIContext} from "../../../Contexts/APIContext";
import Helmet from "react-helmet"
import './index.css'

const ProjectDetail = () =>{
    const {refresh, setRefresh} = useContext(APIContext)

    useEffect(() => {
        let contact = document.getElementById("contact")
        let home = document.getElementById("home")
        let about = document.getElementById("about")
        home.style.color = null
        home.style.backgroundColor = null
        about.style.color = null
        about.style.backgroundColor = null
        contact.style.color = null
        contact.style.backgroundColor = null

    }, [setRefresh, refresh])
    return <>
        <div className="project-details">
            <h1>Project Name</h1>
            <h2>Organization</h2>
            <p>Supervisor: Supervisor Name</p>
            <p>Abstraction: This is a project that investigates...</p>
        </div>
    </>
}
export default ProjectDetail

