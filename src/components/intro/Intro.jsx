import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"


const Intro = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay:1500,
            backSpeed:60,
            strings: ['Frontend Developer', 'Backend Developer', 'MERN Stack Developer']
        })
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="profile_img"></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Aryan Maurya</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png"></img>
                </a>
            </div>
        </div>
    )
}

export default Intro