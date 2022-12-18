import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img
                        src="https://pixabay.com/get/g71a0b2eb3e161610343d580ea5159531ac48f5502f7a95a84bb768e9819e8e3113e41299752fef60eafd24d3025717c4_640.jpg"
                        alt=""
                    />
                    <button>
                        <Link className="link" to="/products/1">
                            Розпродаж
                        </Link>
                    </button>
                </div>
                <div className="row">
                    <img
                        src="https://pixabay.com/get/ga2363e4a4aa6edeb1c4566144479002fe47c4dddf2b3c3c10540cbb13ea4541964af482246f018c02c552b69d6ee8bcd_640.jpg"
                        alt=""
                    />
                    <button>
                        <Link to="/products/1" className="link">
                            Пелюшки
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    {" "}
                    <img
                        src="https://pixabay.com/get/g240cef40f7cb0eb374e791d728b4f362e79a9b927863d2b7c661699668a7a2ee53463fdddd7460ceb3c1b02840ba4b53_640.jpg"
                        alt=""
                    />
                    <button>
                        <Link to="/products/1" className="link">
                            Комбінезони
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img
                                src="https://pixabay.com/get/gd07ed64f719b315e7bcd8a6d2df72b40a003ec79fc52beb5b78db3ce880706c435393618d11eb97b90999b1deba406d5_640.jpg"
                                alt=""
                            />
                            <button>
                                <Link to="/products/1" className="link">
                                    Новинки
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            {" "}
                            <img
                                src="https://pixabay.com/get/g1808debf448c600926476f43e323ab06a9ac103e7dbea273e4af1cb00d0d459d1c5e1e761ceeb2b9958cb3863788b504_640.jpg"
                                alt=""
                            />
                            <button>
                                <Link to="/products/1" className="link">
                                    Пледи та конверти
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img
                        src="https://pixabay.com/get/g6d6ac7ad951cc0b9e92238b1c82e37ce384baff2feccf7986be8cd5bc358ff1b61dbf003cd34d25d25e26b3790de3a16_640.jpg"
                        alt=""
                    />
                    <button>
                        <Link to="/products/1" className="link">
                            Одяг
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Categories;