import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "../pages/Index";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />}>
                    <Route index/>
                </Route>
            </Routes>
            {/*<Routes>*/}
            {/*    <Route path="/navbar/" element={<Navbar />}>*/}
            {/*    </Route>*/}
            {/*</Routes>*/}
        </BrowserRouter>
    )
}
export default Router