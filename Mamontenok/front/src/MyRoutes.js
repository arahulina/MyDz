import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home";
import Error404 from "./pages/Error404";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import OlxHomePage from "./pages/olx/OlxHomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Services from "./pages/Services";
import Navigation from "./components/Navigation";

export default function MyRoutes() {

    return (


        <Routes>
            <Route path="/" element={<HomePage></HomePage>} ></Route>
            <Route path="/about" element={<AboutPage></AboutPage>} ></Route>
            <Route path="/services" element={<Services></Services>} ></Route>
            <Route path="/contact" element={<ContactPage></ContactPage>} ></Route>
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
            <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
            <Route path="/olx" element={<OlxHomePage></OlxHomePage>}></Route>
            <Route path="*" element={<Error404></Error404>} />
        </Routes>
    )

}