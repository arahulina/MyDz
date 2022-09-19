import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import Navigation from "./components/Navigation";

import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import MyRoutes from "./MyRoutes";
import {ToastContainer} from "react-toastify";

function App() {


    return (
        <>
            <BrowserRouter>
                <Navigation></Navigation>
                <div className="out container-fluid">
                    <div className="inner">
                        <MyRoutes></MyRoutes>
                    </div>
                </div>
            </BrowserRouter>
            <ToastContainer />
        </>
    );
}

export default App;
