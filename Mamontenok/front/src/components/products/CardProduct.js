import "./CardProduct.scss";
import { Link } from "react-router-dom";

const CardProduct = ({ product }) => {
    return (
        <Link className="link" to="/product">
            <div className="card">
                <div className="image">
                    <img
                        src=""
                        alt=""
                        className="mainImg"
                    />
                    <img
                        src=""
                        alt=""
                        className="secondImg"
                    />
                </div>
                <h2>{product.title}</h2>
                <div className="prices">
                    <h3>{product.price} грн</h3>
                </div>
            </div>
        </Link>
    );
};

export default CardProduct;