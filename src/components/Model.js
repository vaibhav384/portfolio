import React from "react";

const Modal = () => {
    return (
        <div className="d-flex justify-content-center" style={{ backgroundColor: "whitesmoke", color: "black", fontFamily: "sans-serif" }}>
            <div className="modal fade m-auto" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="d-flex flex-row modal-content " style={{ height: "33rem", width: "33rem" }}>
                        <div style={{ padding: "0.5rem", backgroundColor: "#e4e9e7", width: "50%" }}>
                            <div className="modal-header d-flex justify-content-center">
                                <h5 className="modal-title align-content-center" id="exampleModalLabel" style={{ fontWeight: 'bolder', fontSize: "2rem" }}>About Me</h5>
                            </div>
                            <div>
                                <div className="modal-body" >
                                    <p style={{ fontSize: "1rem" }}> I'm Vaibhav, a 20-year-old Front-end developer. I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications. I am a good listener and observer and open-minded to other people's ideas and thoughts and always keen to learn.</p>

                                    <div className="d-flex flex-row justify-content-center">
                                        <p style={{ margin: "0.4rem 1rem" }}><i className="fa-brands fa-react fa-2xl"></i></p>
                                        <p style={{ margin: "0.4rem 1rem" }}><i className="fa-brands fa-html5 fa-2xl"></i></p>
                                        <p style={{ margin: "0.4rem 1rem" }}><i className="fa-brands fa-js fa-xl fa-2xl"></i></p>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div className="modal-footer ">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div style={{ padding: "0.5rem", backgroundColor: "#383444", width: "50%", color: "whitesmoke" }}>
                            <div className="modal-header d-flex flex-column justify-content-center">
                                <h5 className="modal-title align-content-center" id="exampleModalLabel" style={{ fontWeight: 'bolder', fontSize: "2rem" }}>Contact Me</h5>
                                <p style={{ fontSize: "0.9rem", fontFamily: "sans-serif", fontStyle: "italic" }}>New Projects, Hiring, Freelance Enquiry.</p>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleName" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="exampleName"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    </div>
                                    <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Modal