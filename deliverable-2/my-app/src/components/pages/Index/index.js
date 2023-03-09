import {Outlet, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {APIContext} from "../../../Contexts/APIContext";
import Helmet from "react-helmet"
import './index.css'

const Index = () => {
    let navigate = useNavigate();
    const [search, setSearch] = useState('');
    const {refresh, setRefresh} = useContext(APIContext)



    let updateFilterBox = (event) => {
        let filterId = event.target.id
        // console.log(event.target)
        let filterDropdown = document.getElementById(filterId.slice(0, -7));
        let filterButton = document.getElementById(filterId);

        //   When the user clicks on the button,
        // toggle between hiding and showing the dropdown content
        filterDropdown.classList.toggle("show");

        // If there are results shown, replace the text in the button as the selected option
        if (filterDropdown.classList.contains("show")) {
            let filterLinks = filterDropdown.querySelectorAll("a");
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
        if (!event.target.matches('.dropbtn')) {
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
        setSearch(event.target.value)
    }

    let goSearch =(event)=>{

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

    }, [setRefresh, refresh])







    return <>
        <Helmet>
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
                    <a >None</a>
                    <a >2020</a>
                    <a >2021</a>
                    <a >2022</a>
                </div>
            </div>

            <div id="organization-filter" className="dropdown">
                <div className = "filter-labels">
                    Project Organization
                </div>
                <button id="project-button" onClick={updateFilterBox} className="dropbtn"> Choose organization </button>
                <div id="project" className="dropdown-content">
                    <a >None</a>
                    <a >Organization 1</a>
                    <a >Organization 2</a>
                    <a >Organization 3</a>
                </div>
            </div>

            <div id="supervisor-filter" className="dropdown">
                <div className = "filter-labels">
                    Academic Supervisor
                </div>
                <button id="supervisor-button" onClick={updateFilterBox} className="dropbtn"> Choose supervisor </button>
                <div id="supervisor" className="dropdown-content">
                    <a >None</a>
                    <a >Supervisor 1</a>
                    <a >Supervisor 2</a>
                    <a >Supervisor 3</a>
                </div>
            </div>
        </div>



        <div id="search">
            <input type="text" id="searchbar" name="searchbar" placeholder="Enter a search term" value={search}
                   onChange={searchChange} onKeyPress={handle} className="search-term"/>
                <button onClick={goSearch} className="search-button">Search</button>
                <p id="empty" className="alert">Please type in a search term.</p>
        </div>


        <div id="tags">
            <label id="tag-label">Try one of the search terms:</label>
            <button onclick="search_tag(event)" className="tags">machine learning</button>
            <button onclick="search_tag(event)" className="tags">robotics</button>
        </div>



        <div id = "results">
            <label id="recent-project">2022 Applied Research Internship Projects</label>

            <div id="projects">
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
    </>
}
export default Index;