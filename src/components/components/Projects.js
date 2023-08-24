import React from 'react'
import styled from 'styled-components'
import project1 from '../images/project1.jpg'
import project2 from '../images/project2.jpg'
import project3 from '../images/project3.jpg'
import project4 from '../images/project4.jpg'
import project5 from '../images/project5.jpg'

const Sec = styled.div`
    background: #04388c;
    margin-top: 50px;
    padding-top: 50px;
    text-align: center !important;
`;
const Head = styled.div`
   max-width: 600px;
   margin-left: auto;
   margin-right: auto;
   padding-bottom: 40px;
`;

const Par = styled.p`
   color: #fa464c;
   text-align: center;
   text-transform: uppercase;
`;
const Head1 = styled.h1`
   font-family: 'Rubik', sans-serif;
   color: #fff; 
   text-align: center;
`;


export const Projects = () => {
  return (
 <Sec id='projects' class="container-fluid pt-5 my-5 px-0">
    <Head class="text-center mt-5 wow fadeIn" data-wow-delay="0.1s">
        <Par class="fw-medium mb-2">Our Projects</Par>
        <Head1 class="display-5 text-white mb-5">See What We Have <br/>Completed Recently</Head1>
    </Head>
    <div class="row no-gutters wow fadeIn" data-wow-delay="0.1s">
        <div class="col-md px-0">
            <a class="project-item" href="/">
                <img class="img-fluid" src={project1} alt="" />
            </a>
        </div>
        <div class="col-md px-0">
            <a class="project-item" href="/">
                <img class="img-fluid" src={project2} alt="" />
            </a>
        </div>
        <div class="col-md px-0">
            <a class="project-item" href="/">
                <img class="img-fluid" src={project3} alt="" />
            </a>
        </div>
        <div class="col-md px-0">
            <a class="project-item" href="/">
                <img class="img-fluid" src={project4} alt="" />
            </a>
        </div>
        <div class="col-md px-0">
            <a class="project-item" href="/">
                <img class="img-fluid" src={project5} alt="" />
            </a>
        </div>
    </div>
</Sec>

  )
}
