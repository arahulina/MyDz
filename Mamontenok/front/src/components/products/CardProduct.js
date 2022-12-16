import "./CardProduct.scss";
import { Link } from "react-router-dom";

const products = [
    {
        id: 1,
        img: "https://pixabay.com/get/g0dfd29b04e096e7cbdf16d3e3bb3a8c766fdb9ab813ed0e01e2972712e1c1bbe04f1aa32336cfb63dde4157cfaa3c7b0cc5e356f007aa111112d5fd8bac98d7a_1920.jpg",
        title: "Ковдра косичка рожева",
        isNew: true,
        price: 12
    },{
        id: 1,
        img: "https://pixabay.com/get/g0dfd29b04e096e7cbdf16d3e3bb3a8c766fdb9ab813ed0e01e2972712e1c1bbe04f1aa32336cfb63dde4157cfaa3c7b0cc5e356f007aa111112d5fd8bac98d7a_1920.jpg",
        title: "Ковдра косичка рожева",
        isNew: true,
        price: 12
    },{
        id: 1,
        img: "https://pixabay.com/get/g0dfd29b04e096e7cbdf16d3e3bb3a8c766fdb9ab813ed0e01e2972712e1c1bbe04f1aa32336cfb63dde4157cfaa3c7b0cc5e356f007aa111112d5fd8bac98d7a_1920.jpg",
        title: "Ковдра косичка рожева",
        isNew: true,
        price: 12
    },{
        id: 1,
        img: "https://pixabay.com/get/g0dfd29b04e096e7cbdf16d3e3bb3a8c766fdb9ab813ed0e01e2972712e1c1bbe04f1aa32336cfb63dde4157cfaa3c7b0cc5e356f007aa111112d5fd8bac98d7a_1920.jpg",
        title: "Ковдра косичка рожева",
        isNew: true,
        price: 12
    },

]

const CardProduct = (product) => {



    return (
        <Link className="link" to="/product">
            <div className="card">
                <div className="image">
                    <img src={product.img}/>
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