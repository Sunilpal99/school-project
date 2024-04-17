/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'

const Footer = (props) => {
    // eslint-disable-next-line react/prop-types
    const {phoneNumberfirst,phoneNumbersec,phoneNumberthird,emailAddress,footerBg} = props;
    const defaultPhoneNumberfirst = phoneNumberfirst === "" ? "0000000000" : phoneNumberfirst;
    const defaultPhoneNumbersec = phoneNumbersec === "" ? "0000000000" : phoneNumbersec;
    const defaultPhoneNumberthird = phoneNumberthird === "" ? "0000000000" : phoneNumberthird;
    const defaultemailAddress = emailAddress === "" ? "xyz@gmail.com" : emailAddress;
    const defaultfooterBg = footerBg === "" ? '/public/image/footer.jpg' : footerBg;
    return (
        <>
            <div className="footer" style={{backgroundImage:`url(${footerBg})`}}>
                <div className="elementor-background-overlay">
                    <footer className=" ">
                        <div className="container py-4">
                            <div className="row">
                                <div className="col-md-3">
                                    <h5 className="mb-3">Get in touch</h5>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href={`tel:${defaultPhoneNumberfirst}`} className="no-decoration text-muted">
                                                {defaultPhoneNumberfirst}
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`tel:${defaultPhoneNumbersec}`} className=" no-decoration text-muted" >
                                                {defaultPhoneNumbersec}
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`tel:${defaultPhoneNumberthird}`} className=" no-decoration text-muted" >
                                                {defaultPhoneNumberthird}
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`mailto:${defaultemailAddress}`} className=" no-decoration text-muted">
                                                {defaultemailAddress}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h5 className="mb-3">About</h5>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#" className="text-muted no-decoration">
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-muted no-decoration">
                                                Awards & Recognitions
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-muted no-decoration">
                                                Student Achievement
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-muted no-decoration">
                                                Upcoming Events
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-muted no-decoration">
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h5 className="mb-3">Section</h5>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#" className="text-muted no-decoration" >
                                                Circulars & Notices
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-muted no-decoration" >
                                                Transfer Certificates
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"className="text-muted no-decoration" >
                                                Fee Structure
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"className="text-muted no-decoration" >
                                                Activity Integration
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="text-muted no-decoration"
                                            >
                                                Track Your Bus
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h5 className="mb-3">Follow Us</h5>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a href="#" >
                                                <i className="text-muted fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" >
                                                <i className="text-muted fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" >
                                                <i className="text-muted fab fa-facebook"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        
                            <div>
                                <p style={{ textAlign: "center", fontWeight: "bold" }} className='text-muted'>
                                    &copy; 2024 Company, Inc. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer