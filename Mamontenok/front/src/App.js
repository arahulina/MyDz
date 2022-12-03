import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CatalogPage from "./pages/CatalogPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import FavoritePage from "./pages/FavoritePage";
import CartPage from "./pages/CartPage";
import DeliveryPage from "./pages/DeliveryPage";
import Error404 from "./pages/Error404";
import Footer from "./pages/Footer";



function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation></Navigation>
                <Routes>
                    <Route path="/" element={<HomePage></HomePage>} />
                    <Route path="/about" element={<AboutPage></AboutPage>} />
                    <Route path="/catalog" element={<CatalogPage></CatalogPage>} />
                    <Route path="/contact" element={<ContactPage></ContactPage>} />
                    <Route path="/login" element={<LoginPage></LoginPage>} />
                    <Route path="/favorite" element={<FavoritePage></FavoritePage>} />
                    <Route path="/cart" element={<CartPage></CartPage>} />
                    <Route path="/delivery" element={<DeliveryPage></DeliveryPage>} />
                    <Route path="*" element={<Error404></Error404>} />
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </>
    );
}

export default App;