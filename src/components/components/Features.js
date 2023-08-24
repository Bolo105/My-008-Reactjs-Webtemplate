import React from 'react'
import styled, { keyframes } from 'styled-components';
import feat from '../images/feature.jpg'
import { features } from './Data';

const Par = styled.p`
   color: #fa464c;
   text-transform: uppercase;
`;
const Head1 = styled.h1`
   font-family: 'Rubik', sans-serif;
   color: #04388c;
`;
const pulseBorderAnimation = keyframes`
    0% {
        transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
        opacity: 1;
    }

    100% {
        transform: translateX(-50%) translateY(-50%) translateZ(0) scale(2);
        opacity: 0;
    }
`;

const PlayButton = styled.button`
    position: absolute;
    top: 50%;
    right: -30px;
    transform: translateY(-50%);
    display: block;
    box-sizing: content-box;
    width: 16px;
    height: 26px;
    border-radius: 100%;
    border: none;
    outline: none !important;
    padding: 18px 20px 20px 28px;
    background:  #fa464c;

    @media (max-width: 992px) {
        left: 50%;
        right: auto;
        transform: translate(-50%, -50%);
    }

    &:before,
    &:after {
        content: "";
        position: absolute;
        z-index: 1;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        display: block;
        width: 60px;
        height: 60px;
        background: #fa464c;
        border-radius: 100%;
    }

    &:before {
        z-index: 0;
        animation: ${pulseBorderAnimation} 1500ms ease-out infinite;
    }

    &:after {
        z-index: 1;
        transition: all 200ms;
    }

    span {
        display: block;
        position: relative;
        z-index: 3;
        width: 0;
        height: 0;
        left: -1px;
        border-left: 16px solid #FFFFFF;
        border-top: 11px solid transparent;
        border-bottom: 11px solid transparent;
    }
`;
const Span = styled.span`
  width: 120px;  
  height: 120px;
`;

const Check = styled.div`
   background-color: #fa464c;
   width: 52px;
   height: 48px;
   padding: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: normal;
   border-radius: 50% !important;
`;

export const Features = () => {
  return (
    <div id='features' class="container-xxl py-5">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="position-relative me-lg-4">
                        <img class="img-fluid w-100" src={feat} alt="" />
                        <Span class="position-absolute top-50 start-100 translate-middle bg-white rounded-circle d-none d-lg-block" ></Span>
                        <PlayButton 
                           type="button" 
                           class="btn-play" 
                           data-bs-toggle="modal"
                           data-src="" data-bs-target="#videoModal">
                            <span></span>
                        </PlayButton>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <Par class="fw-medium mb-2">Why Choosing Us!</Par>
                    <Head1 class="display-5 mb-4">Few Reasons Why People Choosing Us!</Head1>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div class="row gy-4">
                       {features.map((val) => (
                        <div class="col-12">
                            <div class="d-flex">
                                <Check class="flex-shrink-0">
                                    <i class="text-white">{val.icon}</i>
                                </Check>
                                <div class="ms-4">
                                    <h4>{val.title}</h4>
                                    <span>{val.text}</span>
                                </div>
                            </div>
                        </div>
                        ))} 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
