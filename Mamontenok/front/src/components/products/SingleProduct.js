import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {useState} from "react";
import {Link} from "react-router-dom"
import "./SingleProduct.scss"

function SingleProduct(){


    //const [selectedImg, setSelectedImg] = useState("img");
    const [quantity, setQuantity] = useState(1);

    return(
        <>
            <div className="product_container">
                <div className="left">
                    <div className="images">
                        <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Фото 1" />
                        <img src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Фото 2" />
                    </div>
                    <div className="mainImg">
                        <img src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Велике фото" />
                    </div>
                </div>
                <div className="right">
                    <h1>назва товару</h1>
                    <span className="price">Ціна</span>
                    <p>Опис товару</p>
                    <div className="quantity">
                        <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
                        {quantity}
                        <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                    </div>
                    <button className="add"><ShoppingCartOutlinedIcon /> ADD TO CART</button>
                    <div className="links">
                        <div className="item"><FavoriteBorderOutlinedIcon /> ADD TO WISH LIST</div>
                    </div>
                    <div className="info">
                        <span>Виробник: Primark</span>
                        <span>Категория: Пелюшка </span>
                    </div>
                    <hr />
                    <div className="info">
                        <span>DESCRIPTION</span>
                        <hr />
                        <Link className="links" to="/delivery">Інформація про доставку та оплату</Link>
                    </div>
                </div>
            </div>
        </>
    )

}

export default SingleProduct;