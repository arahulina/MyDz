
import "./CatalogPage.scss"
import {useState} from "react";
import {useParams} from "react-router-dom";
import AllProduct from "../components/products/AllProduct";

function CatalogPage(){

    const categories = [
        {id: 1, title: "Пелюшки"},
        {id: 2, title: "Боді"},
        {id: 3, title: "Ковдри"},
        {id: 4, title: "Конверти"},
        {id: 5, title: "Шапочки"},
    ]

    const productId = parseInt(useParams().id);
    const [selectedSubCats, setSelectedSubCats] = useState([]);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedSubCats(
            isChecked
                ? [...selectedSubCats, value]
                : selectedSubCats.filter((category) => category !== value)
        );
    };

    return(
        <>
            <div className="container">
                <div className="catalog_left">
                    <div className="filter_categories">
                        <h2>Categories</h2>
                        {categories.map((category) => (
                            <div className="inputItem" key={category.id}>
                            <input
                                type="checkbox"
                                id={category.id}
                                value={category.id}
                                onChange={handleChange}
                            />
                            <label htmlFor={category.id}>{category.title}</label>
                        </div>))}
                    </div>
                    <div className="filter_categories">
                        <h2>Filter by price</h2>
                        <div className="inputItem">
                            <span>0</span>
                            <input
                                type="range"
                                min={0}
                                max={1000}
                                onChange={(e) => setMaxPrice(e.target.value)}
                            />
                            <span>{maxPrice}</span>
                        </div>
                    </div>
                    <div className="filter_categories">
                        <h2>Sort by</h2>
                        <div className="inputItem">
                            <input
                                type="radio"
                                id="asc"
                                value="asc"
                                name="price"
                                onChange={(e) => setSort("asc")}
                            />
                            <label htmlFor="asc">Price (Lowest first)</label>
                        </div>
                        <div className="inputItem">
                            <input
                                type="radio"
                                id="desc"
                                value="desc"
                                name="price"
                                onChange={(e) => setSort("desc")}
                            />
                            <label htmlFor="desc">Price (Highest first)</label>
                        </div>
                    </div>
                </div>
                <div className="catalog_right">
                    <AllProduct productId={productId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
                </div>
            </div>
        </>
    )

}

export default CatalogPage;