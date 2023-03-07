import {Outlet, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {APIContext} from "../../../Contexts/APIContext";
import Helmet from "react-helmet"
import './index.css'

const Index = () => {
    let navigate = useNavigate();
    const [search, setSearch] = useState('');
    const {refresh, setRefresh} = useContext(APIContext)





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
                <button id="year-button" onclick="updateFilterBox('year')" className="dropbtn"> Choose year </button>
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
                <button id="project-button" onclick="updateFilterBox('project')" className="dropbtn"> Choose organization </button>
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
                <button id="supervisor-button" onclick="updateFilterBox('supervisor')" className="dropbtn"> Choose supervisor </button>
                <div id="supervisor" className="dropdown-content">
                    <a >None</a>
                    <a >Supervisor 1</a>
                    <a >Supervisor 2</a>
                    <a >Supervisor 3</a>
                </div>
            </div>
        </div>



        <div id="search">
            <input type="text" id="searchbar" name="searchbar" placeholder="Enter a search term" value="" onclick="searchbarClicked()" className="search-term"/>
                <button onclick="search()" className="search-button">Search</button>
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