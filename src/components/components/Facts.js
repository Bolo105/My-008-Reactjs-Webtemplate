import React from 'react'
import { facts } from './Data'
import styled from 'styled-components'

const Fact = styled.div`
    position: relative;
    margin: 6rem 0;
    background: #04388c;
`;
const FactB = styled.div`
    border-color: rgba(255, 255, 255, .1) !important;
`;
const H1 = styled.h1`
     font-weight: 700 !important;
     color: #fa464c;
`;

export const Facts = () => {
  return (
    <Fact className="container-fluid facts my-5 p-5">
        <div className="row g-5">
           {facts.map((val) => (
            <div className="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.1s">
                <FactB className="text-center border p-5">
                    <i className=" fa-3x text-white mb-3">{val.icon}</i>
                    <H1 className="display-2 mb-0" data-toggle="counter-up">{val.num}</H1>
                    <span className="fs-5 fw-semi-bold text-white">{val.text}</span>
                </FactB>
            </div>
            ))} 
        </div>
    </Fact>
  )
}
