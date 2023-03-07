import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "../pages/Index";
import Navbar from "../Common/navbar";
const Router = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route element={<Index />}>
                        <Route index/>
                    </Route>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router