import React from "react";
import {Link} from "react-router-dom";

class Navigation extends React.Component{


    render() {
        return(
            <>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                    <div className="container px-4 px-lg-5">
                        <Link className="navbar-brand" to="/">Start Bootstrap</Link>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
                                aria-expanded="false" aria-label="Toggle navigation"><span
                            className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto my-2 my-lg-0">
                                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
export default Navigation;