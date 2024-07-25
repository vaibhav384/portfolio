import { Link as ScrollLink } from 'react-router-dom';
import React from 'react';

const SideBar = () => {

    return (
        <>
        <div className='d-flex' style={{ height: "100%", backgroundColor: "#191524" }}>
            <div className="SideBar p-2 d-flex flex-column justify-content-center">
                    <ScrollLink to="https://github.com/vaibhav384"><i className="fa-brands fa-github fa-2xl" style={{margin: "2rem 1rem", color: "#cbc7c7"}}></i></ScrollLink>
                    <ScrollLink to="https://www.linkedin.com/in/vaibhav-10b80a23a/"><i className="fa-brands fa-linkedin fa-2xl" style={{margin: "2rem 1rem", color: "#cbc7c7"}}></i></ScrollLink>
                    <ScrollLink to=""><i className="fa-brands fa-twitter fa-2xl" style={{margin: "2rem 1rem", color: "#cbc7c7"}}></i></ScrollLink>
            </div>
        </div>

        </>
    )
}

export default SideBar
