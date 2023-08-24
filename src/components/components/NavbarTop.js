import React from 'react'
import styled from 'styled-components'

const Wr = styled.div`
    background: #04388c;
    font-family: 'Open Sans', sans-serif;
`;
const TopR = styled.div`
    position: relative;
    background: #fa464c;
    &::before {
        position: absolute;
        content: "";
        width: 30px;
        height: 100%;
        top: 0;
        left: -15px;
        transform: skewX(-30deg);
        background-color: #fa464c;
    }
`;

export const NavbarTop = () => {
  return (
<Wr className="container-fluid px-0">
    <div className="row g-0 d-none d-lg-flex">
        <div className="col-lg-6 ps-5 text-start">
            <div className="h-100 d-inline-flex align-items-center text-white">
                <span>Follow Us:</span>
                <a className="btn btn-link text-light" href="/"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-link text-light" href="/"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-link text-light" href="/"><i className="fab fa-linkedin-in"></i></a>
                <a className="btn btn-link text-light" href="/"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
        <div className="col-lg-6 text-end">
            <TopR className="h-100 topbar-right d-inline-flex align-items-center text-white py-2 px-5">
                <span className="fs-5 fw-bold me-2"><i className="fa fa-phone-alt me-2"></i>Call Us:</span>
                <span className="fs-5 fw-bold">+987 654 3210</span>
            </TopR>
        </div>
    </div>
</Wr>
  )
}
