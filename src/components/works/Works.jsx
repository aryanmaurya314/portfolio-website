import "./works.scss"
import { worksData } from "../../data"
import { useState } from "react"


const Works = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (way) => {
        if (way === "left")
            setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : worksData.length - 1);
        else
            setCurrentSlide(currentSlide < worksData.length - 1 ? currentSlide + 1 : 0);
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {worksData.map(d => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")} />
        </div>
    )
}

export default Works