import React, { useEffect } from 'react';
import MusicPlayer from './Images/MusicPlayer.png';
import ScrollReveal from 'scrollreveal';

const Experiments = () => {
    const sr = ScrollReveal({
        distance: '5rem',
        duration: 2000,
        reset: true,
    });

    useEffect(() => {
        
        sr.reveal(".exp", { delay: 100, origin: "bottom" });
        sr.reveal(".musicPlayer", { delay: 200, origin: "center" });

        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className='d-flex flex-column p-xl-4' style={{backgroundColor: "#e7e5e5"}}>
                <div className='pt-4 projects'>
                    <h5 style={{fontFamily: "sans-serif", marginTop: "1rem", fontWeight: "bold", color: "#c59a80"}}>Upcoming </h5>
                    <h1 style={{fontFamily: "sans-serif", marginTop: "1rem", fontWeight: "bolder", color: "#545151"}}>Web Is Fun</h1>
                </div>

                <div className='m-lg-5 musicPlayer project-item'>
                    <div className="overlay1">
                        <div className="d-flex flex-column">
                            <div style={{fontSize: "3rem"}}>Music Player</div>
                            <div style={{fontSize: "1.2rem"}}>Coming Soon</div>
                        </div>
                    </div>
                    <img src={MusicPlayer} className="project-image" style={{height: "30rem", boxShadow: "2rem 2rem 2rem rgba(0, 0, 0, 0.6)", borderRadius: "1rem"}} alt=''/>
                </div>
            </div>
            <div style={{backgroundColor: "#e7e5e5", paddingBottom: "2rem"}}></div>
        </>
    )
}

export default Experiments