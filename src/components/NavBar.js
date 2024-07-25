import { Link as ScrollLink } from 'react-scroll';
import React from 'react';

function Navbar() {

    return (
        <div style={{backgroundColor: "#191524" }}>
            <nav className="fs-5 navbar opacity-100 navbar-expand-lg" style={{ height: "5rem", backgroundColor: "#1c1d2" }}>
                <div className="container-fluid">
                    <ScrollLink className="navbar-brand m-lg-4 m-rg-5" to="home" smooth={true} duration={400}>
                        <img className="rounded float-left" src='https://1000logos.net/wp-content/uploads/2018/04/logo-Vlone.jpg' style={{ height: "3rem" }} alt=''></img>
                    </ScrollLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse m-lg-5" id="navbarNavAltMarkup" style={{justifyContent: "end", paddingRight: "5rem"}}>
                        <div className="navbar-nav">
                            <ScrollLink className="nav-link" aria-current="page" to="home" smooth={true} duration={400} style={{ margin: "0.5rem 1rem"}}>Home</ScrollLink>

                            <ScrollLink className="nav-link" to="projects" smooth={true} duration={400} style={{margin: "0.5rem 1rem"}}>Projects</ScrollLink>

                            <ScrollLink className="nav-link" to="experiments" smooth={true} duration={400} style={{margin: "0.5rem 1rem"}}>Experiments</ScrollLink>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
