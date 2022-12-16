import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

export default function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://pixabay.com/get/gc0942c668edee8e99fc237e6b04925d277851d9b93fa05b7c4ff878c3f7777e3b5691f38617a39980ddc3d5414134f25_1920.jpg",
        "https://pixabay.com/get/g4b3523e337730b60cf0702c58e8196c340b847e9bd219f1fe0aaff81a8c9cdb114efa420edcedf722e504de9d96cfa5a_1920.jpg",
        "https://pixabay.com/get/gcf91e3a896a2f634afd3b57a7c71be7a8b3ff44f9b4e837d32518cc6ec2d61d3f507fc17dfa2182bcf908f01858732c2de41f58798517abf4a0d461e5d321d3b_1920.jpg",
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