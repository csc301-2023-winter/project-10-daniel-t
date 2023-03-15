import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "../pages/Index";
import Navbar from "../Common/navbar";
import Contact from "../pages/contact";
import About from "../pages/about";
import ProjectDetail from "../pages/projectDetail";
import SearchResult from "../pages/searchResult";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<Navbar />}>*/}
                {/*    <Route path="" element={<Index />}/>*/}
                {/*    <Route path="contact/" element={<Contact/>}/>*/}
                {/*    <Route path="about/" element={<About/>}/>*/}
                {/*    <Route path="project/:projectId/detail/" element={<ProjectDetail/>}/>*/}
                {/*    <Route path=":searchInput/:year/:partner/:supervisor/result/" element={<SearchResult/>}/>*/}
                {/*</Route>*/}
                <Route path="/" element={<Navbar />}>
                    <Route path="" element={<Index />}/>
                    <Route path="contact/" element={<Contact/>}/>
                    <Route path="about/" element={<About/>}/>
                    <Route path="project/:projectId/detail/" element={<ProjectDetail/>}/>
                    <Route path=":searchInput/:year/:partner/:supervisor/result/" element={<SearchResult/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router