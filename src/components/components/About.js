import React from 'react'
import about1 from '../images/about1.jpg'
import about2 from '../images/about2.jpg'
import styled from 'styled-components';
import { about } from './Data';
import { FaCheck } from 'react-icons/fa';

const Par = styled.p`
   color: #fa464c;
`;
const Head1 = styled.h1`
   font-family: 'Rubik', sans-serif;
   color: #04388c;
`;
const Years = styled.div`
   background-color: #fa464c;
`;
const H1 = styled.h1`
   font-family: 'Rubik', sans-serif;
   color: #04388c;
`;
const Icon = styled.i`
   color: #fa464c;
`;
const ContIcon = styled.div`
   background-color: #fa464c;
   width: 48px;
   height: 48px;
   padding: 0;
   display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
`;

export const About = () => {
  return (
<div id='about' className="container-xxl py-5">
    <div className="container">
        <div className="row g-5">
            <div className="col-lg-6">
                <div className="row gx-3 h-100">
                    <div className="col-6 align-self-start wow fadeInUp" data-wow-delay="0.1s">
                        <img className="img-fluid" src={about1} alt='' />
                    </div>
                    <div className="col-6 align-self-end wow fadeInDown" data-wow-delay="0.1s">
                        <img className="img-fluid" src={about2} alt='' />
                    </div>
                </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <Par className="fw-medium text-uppercase mb-2">About Us</Par>
                <Head1 className="display-5 mb-4">We Are Leader In Industrial Market</Head1>
                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <div className="d-flex align-items-center mb-4">
                    <Years className="flex-shrink-0  p-4">
                        <H1 className="display-2">25</H1>
                        <h5 className="text-white">Years of</h5>
                        <h5 className="text-white">Experience</h5>
                    </Years>
                    <div className="ms-4">
                        {about.map((val) => (
                        <p><Icon className="me-2"><FaCheck /></Icon>{val.text}</p>
                        ))} 
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-sm-6">
                        <div className="d-flex align-items-center">
                            <ContIcon className="flex-shrink-0 btn-lg-square rounded-circle">
                                <i className="fa fa-envelope-open text-white"></i>
                            </ContIcon>
                            <div className="ms-3">
                                <p className="mb-2">Email us</p>
                                <h5 className="mb-0">info@example.com</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="d-flex align-items-center">
                            <ContIcon className="flex-shrink-0 btn-lg-square rounded-circle">
                                <i className="fa fa-phone-alt text-white"></i>
                            </ContIcon>
                            <div className="ms-3">
                                <p className="mb-2">Call us</p>
                                <h5 className="mb-0">+012 345 6789</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
