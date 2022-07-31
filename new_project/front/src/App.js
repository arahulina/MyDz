import {Routes, Route, BrowserRouter} from "react-router-dom";
import React from "react";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage"
import Navigation from "./components/design/Navigation";
import PageHeader from "./components/design/PageHeader";
import Footer from "./components/design/Footer";
import AuthPage from "./pages/AuthPage"


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation></Navigation>
                <PageHeader></PageHeader>
                <main className="mb-4">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <Routes>
                                    <Route path="/" element={<HomePage />} />
                                    <Route path="/about" element={<AboutPage />} />
                                    <Route path="/products" element={<ProductsPage />} />
                                    <Route path="/contact" element={<ContactPage />} />
                                    <Route path="/auth" element={<AuthPage />} />
                                    <Route path="*" element={<ErrorPage />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
