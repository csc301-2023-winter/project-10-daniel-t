import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "../pages/Index";
import Navbar from "../Common/navbar";
import Contact from "../pages/contact";
import About from "../pages/about";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route path="" element={<Index />}>
                        <Route index/>
                    </Route>
                    <Route path="contact/" element={<Contact/>}/>
                    <Route path="about/" element={<About/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router