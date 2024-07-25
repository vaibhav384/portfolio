import React, { useEffect, useRef } from "react";
import Modal from "./Model";
import SideBar from "./SideBar";

const Home = () => {
    const prRef = useRef(null);
    const homeRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const container = prRef.current;
            const home = homeRef.current;
            if (!container || !home) return;

            const { clientX, clientY } = event;
            const { left, top, width, height } = home.getBoundingClientRect();
            const xPos = clientX - left - width / 2;
            const yPos = clientY - top - height / 2;

            const icons = container.querySelectorAll('.pr i');

            icons.forEach((icon, index) => {
                const speed = (index + 1) * 0.05;
                const xMove = -xPos * speed;
                const yMove = -yPos * speed;
                icon.style.transform = `translate(${xMove}px, ${yMove}px)`;
            });
        };

        const handleMouseLeave = () => {
            const icons = prRef.current.querySelectorAll('.pr i');
            icons.forEach((icon) => {
                icon.style.transform = 'translate(0, 0)';
            });
        };

        const home = homeRef.current;
        if (home) {
            home.addEventListener('mousemove', handleMouseMove);
            home.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (home) {
                home.removeEventListener('mousemove', handleMouseMove);
                home.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <>
            <div className="d-flex flex-row">
                <div style={{ backgroundColor: "#191524", height: "32rem", width: "100%" }}>
                    <div className="pr" ref={prRef}>
                        <div className="pr1">
                            <i className="fa-regular fa-circle fa-xl" style={{ color: "yellow" }}></i>
                        </div>

                        <div className="pr2">
                            <i className="fa-solid fa-laptop-code fa-xl" style={{ color: "#c0c9d1" }}></i>
                        </div>

                        <div className="pr3">
                            <i className="fa-solid fa-exclamation fa-xl" style={{ color: "pink" }}></i>
                        </div>

                        <div className="pr4">
                            <i className="fa-solid fa-equals fa-xl" style={{ color: "#78d9ba" }}></i>
                        </div>

                        <div className="pr5">
                            <i className="fa-solid fa-cube fa-xl" style={{ color: "white" }}></i>
                        </div>

                        <div className="pr6">
                            <i className="fa-solid fa-check fa-xl" style={{ color: "white" }}></i>
                        </div>

                        <div className="pr7">
                            <i className="fa-solid fa-plus fa-xl" style={{ color: "#76bbf9" }}></i>
                        </div>

                        <div className="pr8">
                            <i className="fa-solid fa-terminal fa-xl" style={{ color:"#71dd71" }}></i>
                        </div>

                    </div>

                    <div className="d-flex flex-row mx-3 pb-5 home" ref={homeRef}>
                        <div className="d-flex flex-column align-items-center" style={{ color: "white", height: "26rem", width: "50%", padding: "7rem", fontFamily: "League Spartan, Helvetica, Arial, sans-serif" }}>
                            <p className="text1" style={{ fontSize: "5rem", fontWeight: "bolder" }}>Vaibhav</p>
                            <p className="text2" style={{ fontSize: "1.4rem", fontStyle: "italic", fontWeight: "bold" }}>Interactive Front-End Developer</p>
                            <button type="button" className="btn" data-toggle="modal" data-target="#exampleModal" style={{ backgroundColor: "#db6726" }}>About Me</button>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content center" style={{ color: "white", height: "26rem", width: "50%", padding: "9rem", fontFamily: "League Spartan, Helvetica, Arial, sans-serif" }}> 
                            <i class="fa-solid fa-code fa-8x icon-animation" style={{ color: "white"}}></i>
                        </div>

                    </div>
                    <Modal />

                </div>
                <div className="d-flex justify-content-end">
                    <SideBar />
                </div>
            </div>
        </>
    )
}

export default Home
