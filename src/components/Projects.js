import React, { useEffect } from 'react';
import VDrive from './Images/VDrive.png';
import NewsApp from './Images/NewsApp.png';
import ToDoList from './Images/ToDoList.png';
import ScrollReveal from 'scrollreveal';

const Projects = () => {
    const sr = ScrollReveal({
        distance: '5rem',
        duration: 2000,
        reset: true,
    });

    useEffect(() => {
        
        sr.reveal(".projects", { delay: 150, origin: "bottom" });
        sr.reveal(".vdrive", { delay: 200, origin: "left" });
        sr.reveal(".newsapp", { delay: 200, origin: "right" });
        sr.reveal(".todo", { delay: 200, origin: "left" });

        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className='d-flex flex-column p-xl-4' style={{backgroundColor: "#e7e5e5"}}>
                <div className='pt-4 projects'>
                    <h5 style={{fontFamily: "sans-serif", marginTop: "1rem", fontWeight: "bold", color: "#c59a80"}}>PROJECTS</h5>
                    <h1 style={{fontFamily: "sans-serif", marginTop: "1rem", fontWeight: "bolder", color: "#545151"}}>Latest Works</h1>
                </div>

                <div className='project-item vdrive m-lg-5'>
                    <div className="overlay1">
                        <div className="d-flex flex-column">
                            <div style={{fontSize: "5rem"}}>01</div>
                            <div style={{fontSize: "2rem"}}>INoteBook</div>
                        </div>
                    </div>
                    <img src={VDrive} className="project-image" style={{height: "30rem", boxShadow: "2rem 2rem 2rem rgba(0, 0, 0, 0.6)", borderRadius: "1rem"}} alt=''/>
                </div>

                <div className='project-item newsapp m-lg-5'>
                    <div className="overlay1">
                        <div className="d-flex flex-column">
                            <div style={{fontSize: "5rem"}}>02</div>
                            <div style={{fontSize: "2rem"}}>News App</div>
                        </div>
                    </div>
                    <img src={NewsApp} className="project-image" style={{height: "30rem", boxShadow: "2rem 2rem 2rem rgba(0, 0, 0, 0.6)", borderRadius: "1rem"}} alt=''/>
                </div>

                <div className='project-item todo m-lg-5'>
                    <div className="overlay1">
                        <div className="d-flex flex-column">
                            <div style={{fontSize: "5rem"}}>03</div>
                            <div style={{fontSize: "2rem"}}>To-Do List</div>
                        </div>
                    </div>
                    <img src={ToDoList} className="project-image" style={{height: "30rem", boxShadow: "1rem 1rem 2rem rgba(0, 0, 0, 0.6)", borderRadius: "1rem"}} alt=''/>
                </div>

                <div className="p">
                    <div className="p1">
                    </div>
                </div>

            </div>

        </>
    )
}

export default Projects