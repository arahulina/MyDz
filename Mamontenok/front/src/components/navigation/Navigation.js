import {Link} from "react-router-dom";
import './navigation.css';

export default function Navigation() {

    return (
        <>
            <nav className="container-fluid">
                <div className="nav-right">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/catalog">Catalog</Link></li>

                    </ul>
                </div>
                <div className="nav-center">
                    <Link to="/"><img alt="logo"/>LOGO</Link>
                </div>
                <div className="nav-left">
                    <ul>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/delivery">Delivery</Link></li>
                        <li><Link to="/login">Sign UP</Link></li>
                        <li><Link to="/favorite">Favorite</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}