import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img
                        src="https://pixabay.com/get/g37947c38aa11456b16bb134b64f688aaea66b949adf55536328c727dbdf5c3aea4882aa52b81474075765d62eaab48cf03c24a5b0de57f4b292a06c8abfc36b5_1920.png"
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
                        src="https://pixabay.com/get/g54062fce3cc479def08ebe6cb56d89221c69b97144a2d0ae64dff8f09a048798eb467a7875630302ea0b8e696d30d0f813c90a4d00fbf8e34d0b0672fe6511d4_1920.jpg"
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
                        src="https://pixabay.com/get/g449d7b47b937b4a15c3aee845d74ca1c4976114fcfa3f2d24b22a196b5c989cd3f75348eb8e5555210f7f0da94fb7e5e6b5d2a4ad97768fe92ca40dde05f42c8_1920.jpg"
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
                                src="https://pixabay.com/get/g2d229e9a007fee72d10a158604488ed09fabfdced5c12ea3914b52b5f7c9848149061b1a240ffc23e5627ad57a012900f250d36daa8c38549f95c9bd4b7d7e5b_1920.jpg"
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
                                src="https://pixabay.com/get/g769d460666a945d91a186e324aa84ed40217c46cec0043905aa0f50a666e93bb08ebaaa8c995dd251487647d42be5fed1332238846e159d3d1ac84ffdf427115_1920.jpg"
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
                        src="https://pixabay.com/get/g74c2091ddef515f8d5843f1aae2d18b9dc06c49b724cf52f7cbde80e1897c553767d32ee364669cd7c365c8bd5c45115d2728566459eb0dedf699a727beb2262_1920.jpg"
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