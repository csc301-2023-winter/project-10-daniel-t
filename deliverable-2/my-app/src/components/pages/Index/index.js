import {Outlet, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {APIContext} from "../../../Contexts/APIContext";
import Helmet from "react-helmet"
import './index.css'
import Footer from './footer';
import contact from "../contact";

const Years = ({years}) =>{
    return<>
        <a>None</a>
        {years.map((year, index)=> (
            <a key={index+1}>{year}</a>
        ))}
    </>
}

const Partners = ({partners}) =>{
    return<>
        <a>None</a>
        {partners.map((partner, index)=> (
            <a key={index+1}>{partner}</a>
        ))}
    </>
}

const Supervisors = ({supervisors}) =>{
    return<>
        <a>None</a>
        {supervisors.map((supervisor, index)=> (
            <a key={index+1}>{supervisor}</a>
        ))}
    </>
}


const Index = () => {
    let navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [years, setYears] = useState([]);
    const [partners, setPartners] = useState([]);
    const [supervisors, setSupervisors] = useState([]);
    const {refresh, setRefresh} = useContext(APIContext);

    const [searchYear, setSearchYears] = useState('');
    const [searchPartner, setSearchPartners] = useState('');
    const [searchSupervisor, setSearchSupervisors] = useState('');



    let updateFilterBox = (event) => {
        let filterId = event.target.id
        console.log(event.target.id)
        let filterDropdown = document.getElementById(filterId.slice(0, -7));
        let filterButton = document.getElementById(filterId);

        //   When the user clicks on the button,
        // toggle between hiding and showing the dropdown content
        filterDropdown.classList.toggle("show");


        // If there are results shown, replace the text in the button as the selected option
        if (filterDropdown.classList.contains("show")) {
            // Obtain all the options that match the search term
            let filterLinks = filterDropdown.querySelectorAll("a");

            // Let the selected option replace the text in the button, and hide the dropdown
            for (let i = 0; i < filterLinks.length; i++) {
                filterLinks[i].addEventListener("click", function() {
                    filterButton.textContent = this.textContent;
                    filterDropdown.classList.remove("show");
                });
            }
        }
        setRefresh(refresh+1)
    }

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn') && !event.target.matches('.search-container')) {
            let dropdowns = document.getElementsByClassName("dropdown-content");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    let searchChange= (event)=>{
        if (event.target.value){
            setSearch(event.target.value)
        }else {
            setSearch(event.target.innerText)
        }
        return null
    }

    let goSearch =(event)=>{
        let year = document.getElementById("year-button").innerText
        let partner = document.getElementById("project-button").innerText
        let supervisor = document.getElementById("supervisor-button").innerText
        let input = document.getElementById("searchbar").value
        let lis = [year, partner, supervisor]
        for (let i = 0; i < 3; i++){
            if (lis[i] === "None" || lis[i].slice(0, 7) === "Choose "){
                lis[i] = "all"
            }
        }
        // If the search bar is empty, and all the filters are not chosen, don't do anything.
        if (input.length === 0 && lis.every(elem => elem === "all")) {
            return <>
                <p id="empty" className="alert">Please type in a search term.</p>
            </>
        }
        return navigate("/"+ input +'/'+ lis[0] +'/' + lis[1] +'/' + lis[2] +"/result/")
    }

    function handle(e){
        if(e.key === "Enter"){
            goSearch()
        }
        return false;
    }

    useEffect(() => {
        let home = document.getElementById("home")
        if (home.style.color !== "white"){
            let about = document.getElementById("about")
            let contact = document.getElementById("contact")
            home.style.color = "white"
            home.style.backgroundColor = "rgb(0, 139, 176)"
            about.style.color = null
            about.style.backgroundColor = null
            contact.style.color = null
            contact.style.backgroundColor = null
        }
        const requestOption = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        };

        fetch("https://vm008.teach.cs.toronto.edu/abstracts/Retrieve/partner/", requestOption)
            .then(response => response.json())
            .then(jason => {setPartners(jason)})
            .catch()
        fetch("https://vm008.teach.cs.toronto.edu/abstracts/Retrieve/years", requestOption)
            .then(response => response.json())
            .then(jason => {setYears(jason)})
            .catch()
        fetch("https://vm008.teach.cs.toronto.edu/abstracts/Retrieve/acasup", requestOption)
            .then(response => response.json())
            .then(jason => {setSupervisors(jason)})
            .catch()

    }, [setRefresh, refresh])

    // console.log(years)


    return <>
        <Helmet >
            <title>MScAC</title>
            <meta charSet="UTF-8" />
        </Helmet>


        <h1 className = "website">MScAC</h1>


        <div id="filters">
            <div id="year-filter" className="dropdown">
                <div className = "filter-labels">
                    Internship Year
                </div>
                <button id="year-button" onClick={updateFilterBox}  className="dropbtn"> Choose year </button>
                <div id="year" className="dropdown-content"> 
                    <input
                        className="search-container"
                        type="text"
                        placeholder="Search year"
                        onChange={e => setSearchYears(e.target.value)}
                    />
                    <a>None</a>
                    {/* <Years years={years}/> */}
                    {years.filter((val) => {
                        if (searchYear === "") {
                            return val;
                        }
                        else if (val.includes(searchYear)) {
                            return val;
                        }
                    }).map((year, index)=> (
                        <>
                        <a key={index+1}>{year}</a>
                        </>
                    ))
                    }
                </div>
            </div>

            <div id="organization-filter" className="dropdown">
                <div className = "filter-labels">
                    Project Organization
                </div>
                <button id="project-button" onClick={updateFilterBox} className="dropbtn"> Choose organization </button>
                <div id="project" className="dropdown-content">
                <input
                className="search-container"
                type="text"
                placeholder="Search organization"
                onChange={e => setSearchPartners(e.target.value)}
                />
                {/* <Partners partners={partners}/> */}
                <a>None</a>
                {partners.filter((val) => {
                    if (searchPartner === "") {
                        return val;
                    }
                    else if (val.toLocaleLowerCase().includes(searchPartner.toLowerCase)) {
                        return val;
                    }
                }).map((partner, index)=> (
                    <>
                    <a key={index+1}>{partner}</a>
                    </>
                ))
                }
            </div>
            </div>

            <div id="supervisor-filter" className="dropdown">
                <div className = "filter-labels">
                    Academic Supervisor
                </div>
                <button id="supervisor-button" onClick={updateFilterBox} className="dropbtn"> Choose supervisor </button>
                <div id="supervisor" className="dropdown-content">
                <input
                className="search-container"
                type="text"
                placeholder="Search supervisor"
                onChange={e => setSearchSupervisors(e.target.value)}
                />
                {/* <Supervisors supervisors={supervisors}/> */}
                <a>None</a>
                {supervisors.filter((val) => {
                    if (searchSupervisor === "") {
                        return val;
                    }
                    else if (val.toLowerCase().includes(searchSupervisor.toLocaleLowerCase())) {
                        return val;
                    }
                }).map((supervisor, index)=> (
                    <>
                    <a key={index+1}>{supervisor}</a>
                    </>
                ))
                }
        </div>
        </div>
        </div>



        <div id="search">
            <input type="text" id="searchbar" name="searchbar" placeholder="Enter a search term" value={search}
                   onChange={searchChange} onKeyPress={handle} className="search-term"/>
                <button onClick={goSearch} className="search-button">Search</button>
        </div>


        <div id="tags">
            <label id="tag-label">Try one of the search terms:</label>
            <button onClick={searchChange} className="tags">machine learning</button>
            <button onClick={searchChange} className="tags">robotics</button>
        </div>



        <div id = "results" className="results">
            <label id="recent-project">2022 Applied Research Internship Projects</label>

            <div id="projects" >
                <div id="project 1" className="projects">
                    <a href="" className="project-name-style"> Project 1 </a><br/>
                    <a href="#organization1" className="link-style"> Organization 1 </a><br/>
                    <a href="#supervisor1" className="link-style">Supervisor 1</a><br/>
                </div>

                <div id="project 2" className="projects">
                    <a href="projectpage.html" className="project-name-style"> Project 2 </a><br/>
                    <a href="#organization2" className="link-style"> Organization 2 </a><br/>
                    <a href="#supervisor2" className="link-style">Supervisor 2</a><br/>
                </div>

                <div id="project 3" className="projects">
                    <a href="" className="project-name-style"> Project 3 </a><br/>
                    <a href="" className="link-style"> Organization 3 </a><br/>
                    <a href="" className="link-style">Supervisor 3</a><br/>
                </div>
            </div>

        </div>
        <Footer/>
    </>
}
export default Index;