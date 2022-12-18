import "./CardProduct.scss";
import { Link } from "react-router-dom";

function CardProduct() {

    const products = [
        {
            id: 1,
            img: "https://pixabay.com/get/g0dfd29b04e096e7cbdf16d3e3bb3a8c766fdb9ab813ed0e01e2972712e1c1bbe04f1aa32336cfb63dde4157cfaa3c7b0cc5e356f007aa111112d5fd8bac98d7a_1920.jpg",
            title: "Ковдра косичка рожева",
            isNew: true,
            price: 120
        },
        {
            id: 2,
            img: "https://pixabay.com/get/g0dfd29b04e096e7cbdf16d3e3bb3a8c766fdb9ab813ed0e01e2972712e1c1bbe04f1aa32336cfb63dde4157cfaa3c7b0cc5e356f007aa111112d5fd8bac98d7a_1920.jpg",
            title: "Ковдра косичка блакитна",
            isNew: true,
            price: 110
        },
        {
            id: 3,
            img: "https://pixabay.com/get/g0dfd29b04e096e7cbdf16d3e3bb3a8c766fdb9ab813ed0e01e2972712e1c1bbe04f1aa32336cfb63dde4157cfaa3c7b0cc5e356f007aa111112d5fd8bac98d7a_1920.jpg",
            title: "Ковдра косичка бежева",
            isNew: true,
            price: 120
        },
        {
            id: 4,
            img: "https://pixabay.com/get/g0dfd29b04e096e7cbdf16d3e3bb3a8c766fdb9ab813ed0e01e2972712e1c1bbe04f1aa32336cfb63dde4157cfaa3c7b0cc5e356f007aa111112d5fd8bac98d7a_1920.jpg",
            title: "Ковдра косичка біла",
            isNew: true,
            price: 100
        }
    ]

    return (
        <Link className="link" to="/product">
            <div className="card">
                <p>{product.title}</p>
            </div>
        </Link>
    );
};

export default CardProduct;

//{products.map((product) => (
  //  <div className="image">
    //    <img src={product.img} alt=""/>
      //  <p>{product.title}</p>
        //<p className="prices">{product.price} грн</p>
    //</div>

//))}