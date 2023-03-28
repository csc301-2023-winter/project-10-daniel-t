import {Outlet, useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {APIContext} from "../../../Contexts/APIContext";
import Helmet from "react-helmet"
import './style.css'


const Projects = ({projectsDetail}) => {
    let navigate = useNavigate()
    // console.log(projectsDetail, 123)
    if (projectsDetail === null){
        return <h1>Please Wait</h1>
    }

    if (! projectsDetail.length){
        return <h1>No Result Found</h1>
    }
    let goDetail = (event) =>{

        // let element = event.target
        // if (! element.key){
        //     element = element.parentElement
        // }
        // console.log(event.target, 1)
        return navigate("/project/" + event.target.name + "/detail/" )
    }
    return <>
        <h1>{projectsDetail.length} Result Found</h1>
        {projectsDetail.map((project, index) =>(
            <div id="project 3" className="projects" key={index} >
                <b className="project-name-style"> {project[0]} </b><br/>
                <span className="link-style project_owner"> {project[3]} </span><br/>
                <span className="link-style project_supervisor">{project[2]}</span><br/>
                <span className="link-style project_year">{project[1]}</span><br/>
                <button name={project[8]} onClick={goDetail}>Details</button>
            </div>
            ))}
    </>
}


const SearchResult = () =>{
    const {refresh, setRefresh} = useContext(APIContext)
    const [projects, setProjects] = useState(null);
    // const [projectsDetails, setProjectsDetails] = useState([]);
    let input = useParams().searchInput
    let year = useParams().year
    let partner = useParams().partner
    let supervisor = useParams().supervisor
    if (year === "all"){
        year = ""
    }else {year = "=" + encodeURIComponent(year)}
    if (partner === "all"){
        partner = ""
    }else {partner = "=" + encodeURIComponent(partner)}
    if (supervisor === "all"){
        supervisor = ""
    }else {supervisor = "=" + encodeURIComponent(supervisor)}
    if (input === "all"){
        input = ""
    }else {input = "=" + encodeURIComponent(input)}

    let searchUrl = "https://vm008.teach.cs.toronto.edu/abstracts/Search/results/?text"+ input +"&year"+ year
        +"&partner"+ partner +"&supervisor" + supervisor

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

        fetch(searchUrl, search_options)
            .then(response => {
                return response.json()})
            .then(jason => {setProjects(jason)
                console.log(jason)
            })

    }, [setRefresh, refresh])


    return <>
        {/*<h1>{searchUrl}</h1>*/}
        <Projects projectsDetail={projects}/>
    </>
}
export default SearchResult