import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

export default function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://pixabay.com/get/ge0ab68770654f20b446fc155512e6de735cdcfc253aefdc94094dc4fe3e49aec4fd42fe1c23c8ce3328c28f513dc8ec3_640.jpg",
        "https://pixabay.com/get/g7c43188c598d974740a76049bbea471f38f353ce1ae881c05bb13501aa1d746fd5ea86564a7bb32cf021a5d73664019d_640.jpg",
        "https://pixabay.com/get/g65280b5bb2fce1ad3990f54ff734bee29965e3e010a26c6aa5b97006a64a5bfbfcc0317752d641ef96f391f8524874d8_640.jpg",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };

    return(
        <>
            <div className="slider">
                <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                    <img src={data[0]} alt="" />
                    <img src={data[1]} alt="" />
                    <img src={data[2]} alt="" />
                </div>
                <div className="icons">
                    <div className="icon" onClick={prevSlide}>
                        <WestOutlinedIcon />
                    </div>
                    <div className="icon" onClick={nextSlide}>
                        <EastOutlinedIcon />
                    </div>
                </div>
            </div>
        </>
    )
}