import {Outlet, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {APIContext} from "../../../Contexts/APIContext";


const Index = () => {
    let navigate = useNavigate();
    const [search, setSearch] = useState('');
    const {refresh, setRefresh} = useContext(APIContext)


    return <>
        <h1>hahahahaha</h1>
    </>
}
export default Index;