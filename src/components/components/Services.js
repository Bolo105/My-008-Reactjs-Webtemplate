import React from 'react'
import serv1 from '../images/serv1.jpg'
import serv2 from '../images/serv2.jpg'
import serv3 from '../images/serv3.jpg'
import styled from 'styled-components'


const Sec = styled.div`
   padding-top: 120px;
   padding-bottom: 120px;
`;
const Par = styled.p`
   color: #fa464c;
`;
const Head1 = styled.h1`
   font-family: 'Rubik', sans-serif;
   color: #04388c;
`;
const ServI = styled.div`
    position: relative;
    margin: 65px 0 25px 0;
    height: 80%;
    box-shadow: 0 0 45px rgba(0, 0, 0, .07);
    &:hover .service-title {
        top: -100%;
    }

    &:hover .service-text {
        top: 0;
    }

    &:hover .service-text::before {
        top: -55px;
    }
`;
const ServImg = styled.div`
    position: absolute;
    padding: 10px;
    width: 130px;
    height: 100px;
    top: -65px;
    left: 50%;
    transform: translateX(-50%);
    background: #FFFFFF;
    box-shadow: 0 0 45px rgba(0, 0, 0, .09);
    z-index: 2;
`;
const ServDet = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 1;
`;
const ServTit = styled.div`
    position: absolute;
    padding: 65px 30px 25px 30px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #FFFFFF;
    transition: .5s;
`;
const ServText = styled.div`
    position: absolute;
    overflow: hidden;
    padding: 65px 30px 25px 30px;
    width: 100%;
    height: 100%;
    top: 100%;
    left: 0;
    display: flex;
    align-items: center;
    text-align: center;
    background: rgba(2, 36, 91, 0.7);
    transition: 0.5s;

    &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100px;
        top: -100%;
        left: 0;
        transform: skewY(-12deg);
        background: #FFFFFF;
        transition: 0.5s;
    }
`;
const Btn = styled.a`
    position: absolute;
    width: 130px;
    height: 50px;
    left: 50%;
    bottom: -25px;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #04388c;
    background:  #fff;
    border: none;
    border-radius: 0;
    box-shadow: 0 0 45px rgba(0, 0, 0, .09);
    z-index: 2;  
    &:hover {
      color: #FFFFFF;
      background:  #fa464c;
    }
`;


export const Services = () => {
  return (
    <Sec id='services' className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto pb-4 wow fadeInUp" data-wow-delay="0.1s" >
                <Par className="fw-medium text-uppercase mb-2">Our Services</Par>
                <Head1 className="display-5 mb-4">We Provide Best Industrial Services</Head1>
            </div>
            <div className="row gy-5 gx-4">
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <ServI className="service-item">
                        <img className="img-fluid" src={serv1} alt="" />
                        <ServImg className="service-img">
                            <img className="img-fluid" src={serv1} alt="" />
                        </ServImg>
                        <ServDet className="service-detail">
                            <ServTit className="service-title">
                                <hr className="w-25" />
                                <h3 className="mb-0">Civil & Gas Engineering</h3>
                                <hr className="w-25" />
                            </ServTit>
                            <ServText className="service-text">
                                <p className="text-white mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            </ServText>
                        </ServDet>
                        <Btn className="btn btn-light" href="/">Read More</Btn>
                    </ServI>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <ServI className="service-item">
                        <img className="img-fluid" src={serv2} alt="" />
                        <ServImg className="service-img">
                            <img className="img-fluid" src={serv2} alt="" />
                        </ServImg>
                        <ServDet className="service-detail">
                            <ServTit className="service-title">
                                <hr className="w-25" />
                                <h3 className="mb-0">Power & Energy Engineering</h3>
                                <hr className="w-25" />
                            </ServTit>
                            <ServText className="service-text">
                                <p className="text-white mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            </ServText>
                        </ServDet>
                        <Btn className="btn btn-light" href="/">Read More</Btn>
                    </ServI>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <ServI className="service-item">
                        <img className="img-fluid" src={serv3} alt="" />
                        <ServImg className="service-img">
                            <img className="img-fluid" src={serv3} alt="" />
                        </ServImg>
                        <ServDet className="service-detail">
                            <ServTit className="service-title">
                                <hr className="w-25" />
                                <h3 className="mb-0">Plumbing & Water Treatment</h3>
                                <hr className="w-25" />
                            </ServTit>
                            <ServText className="service-text">
                                <p className="text-white mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            </ServText>
                        </ServDet>
                        <Btn className="btn btn-light" href="/">Read More</Btn>
                    </ServI>
                </div>
            </div>
        </div>
    </Sec>
  )
}

