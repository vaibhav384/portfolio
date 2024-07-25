import { Link as ScrollLink } from 'react-router-dom';
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Footer = () => {
    const sr = ScrollReveal({
        distance: '5rem',
        duration: 2000,
        reset: true,
    });

    useEffect(() => {
        
        sr.reveal(".github", { delay: 150, origin: "left" });
        sr.reveal(".linkedin", { delay: 200, origin: "left" });
        sr.reveal(".twitter", { delay: 200, origin: "left" });

        // eslint-disable-next-line
    }, []);

    return (
        <>

            <div className="footer pb-4">
                
                <div style={{fontFamily: "sans-serif", fontSize: "1.5rem", marginRight: "1.5rem", color: "whitesmoke"}}>Follow me</div>
                {/* <h5 className='footer-h'>Follow Me On Social Media</h5> */}
                <div className='footer-1'>
                    <ScrollLink to="https://github.com/vaibhav384"><i className="fa-brands fa-github fa-2xl github"></i></ScrollLink>
                    <ScrollLink to="https://www.linkedin.com/in/vaibhav-10b80a23a/"><i className="fa-brands fa-linkedin fa-2xl linkedin"></i></ScrollLink>
                    <ScrollLink to=""><i className="fa-brands fa-twitter fa-2xl twitter"></i></ScrollLink>
                </div>
            </div>

            <div className="g">
                <div className="g1">
                </div>
            </div>

            <div className="g">
                <p className="g-p">
                    <p>“It's not a bug. It's an undocumented feature!”</p>
                    <p style={{fontSize: "1rem", fontStyle: "normal"}}>&#169;2024 Vaibhav - Front End Developer</p>
                </p>
            </div>

        </>
    )
}

export default Footer
