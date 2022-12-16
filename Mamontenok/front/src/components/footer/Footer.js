import React from "react";
import {Link} from "react-router-dom"
import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {

    return(
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Категорії товарів</h1>
                    <Link className="link" to="">Категорія 1</Link>
                    <Link className="link" to="">Категорія 2</Link>
                    <Link className="link" to="">Категорія 3</Link>
                    <Link className="link" to="">Категорія 4</Link>
                    <Link className="link" to="">Категорія 5</Link>
                </div>
                <div className="item">
                    <h1>Допомога</h1>
                    <Link className="link" to="/contact">Контакти</Link>
                    <Link className="link" to="/delivery">Доставка та оплата</Link>
                    <Link className="link" to="/delivery">Повернення</Link>
                </div>
                <div className="item">
                    <div className="item_block">
                        <span>Дізнавайся про новини першими:</span>
                        <div className="mail">
                            <input type="text" placeholder="Введіть свою пошту..." />
                            <button>Приєднатися</button>
                        </div>
                    </div>
                    <div className="item_block">
                        <div className="icons">
                            <span>Слідкуй за нами в соціальних мережах:</span>
                            <div>
                                <a href=""><FacebookIcon style={{ fontSize: 100}} /></a>
                                <a href=""><InstagramIcon style={{fontSize: 100}} /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">МАМОНТЕНОК</span>
                    <span className="copyright">© Copyright 2023. All Rights Reserved</span>
                </div>
            </div>
        </div>
    );
};

