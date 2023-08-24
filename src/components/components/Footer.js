import React from 'react'
    import { FiChevronRight } from 'react-icons/fi'
import styled from 'styled-components';

const Foot = styled.div`
   color: #B0B9AE;
   background: #04388c;
`;
const A = styled.a`
    text-decoration: none;
    display: block;
    margin-bottom: 5px;
    padding: 0;
    text-align: left;
    color: #B0B9AE;
    font-weight: normal;
    text-transform: capitalize;
    transition: .3s;
    &:hover {
        color: #fff;
        letter-spacing: 1px;
        box-shadow: none;
    }
`;
const Btn1 = styled.a`
   background-color: #fa464c;
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
const Icon = styled.i`
    margin-left: -5px;
    font-weight: bold !important;
`;
const Inp = styled.input`
    color: #B0B9AE;
    &::placeholder {
    color: #999;
  }
`;
const Btn = styled.button`
    border-radius: 0;
    background: #fa464c;
    color: #fff;
    &:hover {
        background: #fa464c;
        color: #010101;
        font-weight: 500;
    }
`;
const Copy = styled.div`
    padding-top: 35px;
    color: #B0B9AE;
    border-top: 1px solid rgba(255, 255, 255, .1);
`;
const A1 = styled.a`
    text-decoration: none;
    color: #fa464c;
`;
export const Footer = () => {
  return (
   <section>
    <Foot className="container-fluid footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
            <div className="col-lg-3 col-md-6">
                <h5 className="text-white mb-4">Contact</h5>
                <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>4367 Main Ln, New Jersey, USA</p>
                <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+ 987 654 3210</p>
                <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                <div className="d-flex pt-3">
                    <Btn1 className="btn btn-square  rounded-circle me-2" href="#/"><i className="fab fa-twitter"></i></Btn1>
                    <Btn1 className="btn btn-square  rounded-circle me-2" href="#/"><i className="fab fa-facebook-f"></i></Btn1>
                    <Btn1 className="btn btn-square  rounded-circle me-2" href="#/"><i className="fab fa-youtube"></i></Btn1>
                    <Btn1 className="btn btn-square  rounded-circle me-2" href="#/"><i className="fab fa-linkedin-in"></i></Btn1>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <h5 className="text-white mb-4">Links</h5>
                <A className="btn btn-link" href="#/"><Icon><FiChevronRight /></Icon> About Us</A>
                <A className="btn btn-link" href="#/"><Icon><FiChevronRight /></Icon> Contact Us</A>
                <A className="btn btn-link" href="#/"><Icon><FiChevronRight /></Icon> Our Services</A>
                <A className="btn btn-link" href="#/"><Icon><FiChevronRight /></Icon> Terms & Condition</A>
                <A className="btn btn-link" href="#/"><Icon><FiChevronRight /></Icon> Support</A>
            </div>
            <div className="col-lg-3 col-md-6">
                <h5 className="text-white mb-4">Business Hours</h5>
                <p className="mb-1">Monday - Friday</p>
                <h6 className="text-light">09:00 am - 07:00 pm</h6>
                <p className="mb-1">Saturday</p>
                <h6 className="text-light">09:00 am - 12:00 pm</h6>
                <p className="mb-1">Sunday</p>
                <h6 className="text-light">Closed</h6>
            </div>
            <div className="col-lg-3 col-md-6">
                <h5 className="text-white mb-4">Newsletter</h5>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <div className="position-relative w-100">
                    <Inp className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                    <Btn type="button" className="btn py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</Btn>
                </div>
            </div>
        </div>
    </div>

    <Copy className="container-fluid copyright ">
       <div className="container text-center">
           <p className="mb-2">Copyright &copy; <A1 className="fw-bold" href="#/">engineers.inc</A1>, All Right Reserved.</p>
           
       </div>
    </Copy>
</Foot>
</section>
  )
}
