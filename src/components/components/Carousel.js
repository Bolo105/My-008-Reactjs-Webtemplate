import React from 'react'
import carousel1 from '../images/carousel1.jpg'
import carousel2 from '../images/carousel2.jpg'
import styled from 'styled-components'

const CarI = styled.div`
   height: 100vh;
   @media (max-width: 912px) {
    height: 100%;
   }
   @media (max-width: 768px) {
        position: relative;
        min-height: 450px;
    }
`;
const Par = styled.p`
    color: #fa464c;
`;
const Head1 = styled.h1`
    font-family: 'Rubik', sans-serif;
`;
const Imag = styled.img`
  @media (max-width: 768px) {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
  }
`;
const CarC = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    background: linear-gradient(to right, rgba(2, 36, 91, 1) 0%, rgba(2, 36, 91, 0) 100%);
    z-index: 1;
`;
const CarContnp = styled.button`
    width: 15%;
`;
const CarContIcon = styled.span`
     width: 3.5rem;
     height: 3.5rem;
     background-color: #fa464c;
     border: 15px solid #fa464c;
     border-radius: 3.5rem;
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


export const Carousel = () => {
  return (
    <div className="container-fluid px-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <CarI className="carousel-item active">
                    <Imag className="w-100" src={carousel1} alt="" />
                    <CarC className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10 text-start">
                                    <Par className="fs-5 fw-medium text-uppercase animated slideInRight">25 Years of Working Experience</Par>
                                    <Head1 className="display-1 text-white mb-5 animated slideInRight">Industrial Solution Providing Company</Head1>
                                    <Btn href="/" className="btn py-3 px-5 animated slideInRight">Explore More</Btn>
                                </div>
                            </div>
                        </div>
                    </CarC>
                </CarI>
                <CarI className="carousel-item">
                    <Imag className="w-100" src={carousel2} alt="" />
                    <CarC className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10 text-start">
                                    <Par className="fs-5 fw-medium text-uppercase animated slideInRight">25 Years of Working Experience</Par>
                                    <Head1 className="display-1 text-white mb-5 animated slideInRight">The Best Reliable Industry Solution</Head1>
                                    <Btn href="/" className="btn py-3 px-5 animated slideInRight">Explore More</Btn>
                                </div>
                            </div>
                        </div>
                    </CarC>
                </CarI>
            </div>
            <CarContnp className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <CarContIcon className="carousel-control-prev-icon" aria-hidden="true"></CarContIcon>
                <span className="visually-hidden">Previous</span>
            </CarContnp>
            <CarContnp className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <CarContIcon className="carousel-control-next-icon" aria-hidden="true"></CarContIcon>
                <span className="visually-hidden">Next</span>
            </CarContnp>
        </div>
    </div>
  )
}
