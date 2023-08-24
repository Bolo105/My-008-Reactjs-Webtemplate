import React from 'react'
import team7 from '../images/team7.jpg'
import team5 from '../images/team5.jpg'
import team8 from '../images/team8.jpg'
import styled from 'styled-components'

const Heading = styled.div`
   max-width: 600px;
`;
const Share = styled.div`
   width: 90px; 
   height: 90px;
   padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    background: #fa464c;
`;
const Par = styled.p`
   color: #fa464c;
`;
const Head1 = styled.h1`
   font-family: 'Rubik', sans-serif;
   color: #04388c;
`;
const Box = styled.div`
   height: 90px;
`;
const Ts = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: -100%;
    display: flex;
    align-items: center;
    background: #fa464c;
    transition: .5s;
`;
const TeamI = styled.div`
   border: 1px solid #010101;
   &:hover .team-social {
    left: 0;
   }
`;
const Imag = styled.img`
   width: 410px;
   height: 380px;
`;
const Btn = styled.a`
    width: 38px;
    height: 38px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
`;
const Spa = styled.span`
    color: #fa464c;
`;

export const Team = () => {
  return (
    <div className="container-xxl py-5">
        <div className="container">
            <Heading className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s">
                <Par className="fw-medium text-uppercase mb-2">Our Team</Par>
                <Head1 className="display-5 mb-5">Dedicated Team Members</Head1>
            </Heading>
            <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <TeamI className="team-item">
                        <Imag className="img-fluid" src={team7} alt="" />
                        <div className="d-flex">
                            <Share className="flex-shrink-0 btn-square" >
                                <i className="fa fa-2x fa-share text-white"></i>
                            </Share>
                            <Box className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4" >
                                <h5>Jhon Travolta</h5>
                                <Spa className="">CEO & Founder</Spa>
                                <Ts className="team-social">
                                    <Btn className="btn btn-square btn-dark rounded-circle mx-1" href="/"><i className="fab fa-facebook-f"></i></Btn>
                                    <Btn className="btn btn-square btn-dark rounded-circle mx-1" href="/"><i className="fab fa-twitter"></i></Btn>
                                    <Btn className="btn btn-square btn-dark rounded-circle mx-1" href="/"><i className="fab fa-instagram"></i></Btn>
                                </Ts>                                                              
                            </Box>
                        </div>
                    </TeamI>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <TeamI className="team-item">
                        <Imag className="img-fluid" src={team5} alt="" />
                        <div className="d-flex">
                            <Share className="flex-shrink-0 btn-square" >
                                <i className="fa fa-2x fa-share text-white"></i>
                            </Share>
                            <Box className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4" >
                                <h5>Amanda Kerr</h5>
                                <Spa className="">Project Manager</Spa>
                                <Ts className="team-social">
                                    <Btn className="btn btn-square btn-dark rounded-circle mx-1" href="/"><i className="fab fa-facebook-f"></i></Btn>
                                    <Btn className="btn btn-square btn-dark rounded-circle mx-1" href="/"><i className="fab fa-twitter"></i></Btn>
                                    <Btn className="btn btn-square btn-dark rounded-circle mx-1" href="/"><i className="fab fa-instagram"></i></Btn>
                                </Ts>
                            </Box>
                        </div>
                    </TeamI>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <TeamI className="team-item">
                        <Imag className="img-fluid" src={team8} alt="" />
                        <div className="d-flex">
                            <Share className="flex-shrink-0 btn-square" >
                                <i className="fa fa-2x fa-share text-white"></i>
                            </Share>
                            <Box className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4">
                                <h5>David Jhonson</h5>
                                <Spa className="">Engineer</Spa>
                                <Ts className="team-social">
                                    <Btn className="btn btn-square btn-dark rounded-circle mx-1" href="/"><i className="fab fa-facebook-f"></i></Btn>
                                    <Btn className="btn btn-square btn-dark rounded-circle mx-1" href="/"><i className="fab fa-twitter"></i></Btn>
                                    <Btn className="btn btn-square btn-dark rounded-circle mx-1" href="/"><i className="fab fa-instagram"></i></Btn>
                                </Ts>
                            </Box>
                        </div>
                    </TeamI>
                </div>

            </div>
        </div>
    </div>
  )
}
