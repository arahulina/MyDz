import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import "./Cart.scss"
import { Button} from 'react-bootstrap';

const Cart = () => {

    const products = [
        {
            id: 1,
            img: "https://pixabay.com/get/g0dfd29b04e096e7cbdf16d3e3bb3a8c766fdb9ab813ed0e01e2972712e1c1bbe04f1aa32336cfb63dde4157cfaa3c7b0cc5e356f007aa111112d5fd8bac98d7a_1920.jpg",
            title: "Ковдра демісезон",
            description: "Колір рожевий, візерунок косичка",
            isNew: true,
            price: 12
        },
        {
            id: 1,
            img: "https://pixabay.com/get/g0dfd29b04e096e7cbdf16d3e3bb3a8c766fdb9ab813ed0e01e2972712e1c1bbe04f1aa32336cfb63dde4157cfaa3c7b0cc5e356f007aa111112d5fd8bac98d7a_1920.jpg",
            title: "Ковдра демісезон",
            description: "Колір боакитний, візерунок косичка",
            isNew: true,
            price: 12
        },
    ]


    const totalPrice = () => {
        let total = 0;
        products.forEach((product) => {
            total += product.quantity * product.price;
        });
        return total.toFixed(2);
    };

    return(
        <>
            <div className="cart">
                <h1>Товари у корзині</h1>
                {products.map((product) => (
                    <div className="item" key={product.id}>
                        <img src={product.img} alt="" />
                        <div className="details">
                            <h1>{product.title}</h1>
                            <p>{product.description.substring(0, 100)}</p>
                            <div className="price">
                               1 x {product.price} грн
                            </div>
                        </div>
                        <DeleteOutlineOutlinedIcon className="delete" />
                    </div>
                ))}
                <div className="total">
                    <span>Загальна сума</span>
                    <span>{totalPrice()} грн</span>
                </div>
                <Button variant="outlined">Оформити замовлення</Button>
                <span className="reset">Очистити корзину</span>
            </div>
        </>
    )

}

export default Cart;