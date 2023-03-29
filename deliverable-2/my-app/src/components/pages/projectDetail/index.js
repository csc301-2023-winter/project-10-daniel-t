import {Outlet, useNavigate, useParams, Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {APIContext} from "../../../Contexts/APIContext";
import Helmet from "react-helmet"
import './index.css'

const ProjectDetail = () =>{
    const {refresh, setRefresh} = useContext(APIContext)
    const [detail, setDetail] = useState('');
    let project_id = useParams().projectId
    let search_options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    }

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

        fetch("https://vm008.teach.cs.toronto.edu/abstracts/Retrieve/id/" + project_id, search_options)
            .then(response => response.json())
            .then(jason => {console.log(jason)
                setDetail(jason)

            })

    }, [setRefresh, refresh])
    return <>
        <div className="project-details">
            {/*<h1>Project Name</h1>*/}
            {/*<h2>Organization</h2>*/}
            {/*<p>Supervisor: Supervisor Name</p>*/}
            {/*<p>Abstraction: This is a project that investigates...</p>*/}

            <h1>Project Name</h1>
            <p>{detail[0]}</p>
            <p>{detail[1]}</p>

            <h2>Student(s):</h2>
            <p>{detail[2]}</p>

            <h2>Organization</h2>
            <p>{detail[3]}</p>
            <a href={detail[4]}>
            <img src={detail[4]} alt="Logo" style={{width:"20%"}}/>
            </a>

            <h2>Supervisor(s):</h2>
            <p>{detail[5]}</p>
            <p>{detail[6]}</p>

            <h2>Abstract:</h2>
            <p>{detail[7]}</p>
        </div>
    </>
}
export default ProjectDetail

