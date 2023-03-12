import {Outlet, useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {APIContext} from "../../../Contexts/APIContext";
import Helmet from "react-helmet"


const Projects = ({projectsDetail}) => {
    // console.log(projectsDetail, 123)
    if (projectsDetail === null){
        return <h1>Please Wait</h1>
    }

    if (! projectsDetail.length){
        return <h1>No Result Found</h1>
    }
    return <>
        <h1>{projectsDetail.length} Result Found</h1>
        {projectsDetail.map((project, index) =>(
            <div id="project 3" className="projects">
                <a className="project-name-style"> {project[0]} </a><br/>
                <a className="link-style"> {project[3]} </a><br/>
                <a className="link-style">{project[2]}</a><br/>
            </div>
            // <h1 key={index}>{project}</h1>
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

    let searchUrl = "http://127.0.0.1:5000/Search/results/?text"+ input +"&year"+ year
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
        // if (projectsDetails.length < projects.length){
        //     for (let i = 0; i < projects.length; i++){
        //         fetch("http://127.0.0.1:5000/Retrieve/id/" + projects[i], search_options)
        //             .then(response => response.json())
        //             .then(jason => {
        //                 projectsDetails.push(jason)
        //                 setProjectsDetails(projectsDetails)
        //                 console.log(jason)
        //             })
        //             .then(() => console.log(projectsDetails))
        //     }
        // }

    }, [setRefresh, refresh])


    return <>
        {/*<h1>{searchUrl}</h1>*/}
        <Projects projectsDetail={projects}/>
    </>
}
export default SearchResult