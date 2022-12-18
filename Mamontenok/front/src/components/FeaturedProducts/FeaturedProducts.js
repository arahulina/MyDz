import "./FeaturedProducts.scss";
import CardProduct from "../products/CardProduct";

function FeaturedProducts() {

    const products = [
        {
            id: 1,
            img: "https://pixabay.com/get/g0dfd29b04e096e7cbdf16d3e3bb3a8c766fdb9ab813ed0e01e2972712e1c1bbe04f1aa32336cfb63dde4157cfaa3c7b0cc5e356f007aa111112d5fd8bac98d7a_1920.jpg",
            title: "Ковдра косичка рожева",
            price: 12
        },{
            id: 2,
            img: "https://pixabay.com/get/g0dfd29b04e096e7cbdf16d3e3bb3a8c766fdb9ab813ed0e01e2972712e1c1bbe04f1aa32336cfb63dde4157cfaa3c7b0cc5e356f007aa111112d5fd8bac98d7a_1920.jpg",
            title: "Ковдра косичка блакитна",
            price: 15
        },
    ]

    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>Рекомендовані товари</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                    lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas.
                </p>
            </div>
            <div className="bottom">
                {products.map((product) => <CardProduct product={product} key={product.id} />)}
            </div>
        </div>
    );
}

export default FeaturedProducts;