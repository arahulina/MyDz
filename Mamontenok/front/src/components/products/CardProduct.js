import "./CardProduct.scss";
import {Link} from "react-router-dom"


const CardProduct = ({product}) => {

    return(
        <>
            <Link className="link" to="/product">
                <div className="card">
                    <div className="image">
                        <img src={product.img} alt=""/>
                    </div>
                    <h2>{product.title}</h2>
                    <h3>{product.price}</h3>
                </div>
            </Link>
        </>
    )
}


export default CardProduct;

