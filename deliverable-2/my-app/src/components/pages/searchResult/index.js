import {Outlet, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {APIContext} from "../../../Contexts/APIContext";
import Helmet from "react-helmet"


const SearchResult = () =>{
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
    </>
}
export default SearchResult