import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navigation.scss"
//import Cart from "../Cart/Cart";
//import { useSelector } from "react-redux";

const Navigation = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <Link className ="link" to="/catalog">Каталог товарів</Link>
                    </div>
                    <div className="item">
                        <Link className ="link" to="/add">Додати товар</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className ="link" to="/">МАМОНТЕНОК</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className ="link" to="/contact">Контакти</Link>
                    </div>
                    <div className="item">
                        <Link className ="link" to="/delivery">Доставка та оплата</Link>
                    </div>
                    <div className="icons">
                        <div className="item">
                            <Link className ="link" to="/login"><PersonOutlineOutlinedIcon style={{ fontSize: 40 }}/></Link>
                        </div>
                        <div className="item">
                            <Link className ="link" to="/favorite"><FavoriteBorderOutlinedIcon style={{ fontSize: 40 }}/></Link>
                        </div>
                        <div className="item">
                            <SearchIcon style={{ fontSize: 40 }}/>
                        </div>
                        <div className="cartIcon item">
                            <Link className="link" to="/cart">
                                <ShoppingCartOutlinedIcon style={{ fontSize: 40 }}/>
                                <span>0</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;