import HomePage from "./pages/HomePage"
import Navigation from "./pages/Navigation"
import AboutPage from "./pages/AboutPage"
import ServicePage from "./pages/ServicePage"
import PostPage from "./pages/PostPage"
import ContactPage from "./pages/ContactPage"
import Error404 from "./pages/Error404"
import Footer from "./pages/Footer"

import {BrowserRouter, Routes, Route} from "react-router-dom";

export default function MyRoutes() {


    return (
        <>
            <BrowserRouter>
            <Navigation></Navigation>
            <Routes>
                <Route path="/" element={<HomePage></HomePage>} />
                <Route path="/about" element={<AboutPage></AboutPage>} />
                <Route path="/services" element={<ServicePage></ServicePage>} />
                <Route path="/posts" element={<PostPage></PostPage>} />
                <Route path="/contact" element={<ContactPage></ContactPage>} />
                <Route path="*" element={<Error404></Error404>} />
            </Routes>
            </BrowserRouter>
            <Footer></Footer>
        </>
    )
}
