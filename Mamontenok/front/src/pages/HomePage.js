import Slider from "./../components/slider/Slider"
import Categories from "../components/category/Categories";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";


export  default function HomePage() {
    return(
        <>
            <Slider />
            <FeaturedProducts />
            <Categories />
            <FeaturedProducts />
        </>
    )
}