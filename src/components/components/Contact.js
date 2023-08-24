import React from 'react'
import styled from 'styled-components'

const Par = styled.p`
   color: #fa464c;
`;
const Head1 = styled.h1`
   font-family: 'Rubik', sans-serif;
   color: #04388c;
`;
const Box = styled.div`
   width: 90px; 
   height: 90px;
   padding: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: normal;
`;
const TextA = styled.textarea`
   height: 150px !important;
`;
const Btn  = styled.a`
    background-color: #fa464c;
    color: #fff;
    border-radius: 0;
    transition: .5s;
    font-weight: 500;
    &:hover {
      background-color: #fa464c;
      color: #010101;
    }
`;
const Btn1 = styled.a`
   background-color: #fa464c;
   text-decoration: none;
   color: #fff;
   width: 38px;
   height: 38px;
   padding: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: normal;
    &:hover {
        color: #010101;
        background-color: #fa464c;
    }
`;
const Btn2  = styled.a`
    background-color: #fa464c;
    color: #fff;
    border-radius: 0;
    transition: .5s;
    font-weight: 500;
    &:hover {
      background-color: #fa464c;
    }
`;
const A = styled.a`
    color: #fa464c;
    text-decoration: none;
`;
const Icon = styled.i`
    color: #fa464c;
`;

export const Contact = () => {
  return (

    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 justify-content-center mb-5">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="bg-light text-center h-100 p-5">
                        <Box className="btn-square bg-white rounded-circle mx-auto mb-4" >
                            <Icon className="fa fa-phone-alt fa-2x"></Icon>
                        </Box>
                        <h4 className="mb-3">Phone Number</h4>
                        <p className="mb-2">+012 345 67890</p>
                        <p className="mb-4">+012 345 67890</p>
                        <Btn2 className="btn px-4" href="tel:+0123456789">Call Now <i className="fa fa-arrow-right ms-2"></i></Btn2>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="bg-light text-center h-100 p-5">
                        <Box className="btn-square bg-white rounded-circle mx-auto mb-4" > 
                            <Icon className="fa fa-envelope-open fa-2x"></Icon>
                        </Box>
                        <h4 className="mb-3">Email Address</h4>
                        <p className="mb-2">info@example.com</p>
                        <p className="mb-4">support@example.com</p>
                        <Btn2 className="btn px-4" href="mailto:info@example.com">Email Now <i className="fa fa-arrow-right ms-2"></i></Btn2>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="bg-light text-center h-100 p-5">
                        <Box className="btn-square bg-white rounded-circle mx-auto mb-4" >
                            <Icon className="fa fa-map-marker-alt fa-2x"></Icon>
                        </Box>
                        <h4 className="mb-3">Office Address</h4>
                        <p className="mb-2">+012 345 67890</p>
                        <p className="mb-4">+012 345 67890</p>
                        <Btn2 className="btn px-4" href="https://goo.gl/maps/FsznshxgnULBGgkN9" target="blank">Direction <i className="fa fa-arrow-right ms-2"></i></Btn2>
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                    { /* <iframe ></iframe> */}
                </div>
            </div>
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <Par className="fw-medium text-uppercase mb-2">Contact Us</Par>
                    <Head1 className="display-5 mb-4">If You Have Any Queries, Please Feel Free To Contact Us</Head1>
                    <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <A href="/">Download Now</A>.</p>
                    <div className="row g-4">
                        <div className="col-6">
                            <div className="d-flex">
                                <Btn1 className="flex-shrink-0 btn-square rounded-circle">
                                    <i className="fa fa-phone-alt text-white"></i>
                                </Btn1>
                                <div className="ms-3">
                                    <h6>Call Us</h6>
                                    <span>+012 345 67890</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex">
                                <Btn1 className="flex-shrink-0 btn-square rounded-circle">
                                    <i className="fa fa-envelope text-white"></i>
                                </Btn1>
                                <div className="ms-3">
                                    <h6>Mail Us</h6>
                                    <span>info@example.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <TextA className="form-control" placeholder="Leave a message here" id="message..."></TextA>
                                    <label for="message">Message...</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <Btn className="btn py-3 px-5" type="submit">Send Message</Btn>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

  )
}
