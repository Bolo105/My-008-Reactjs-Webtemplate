import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

const BackBut = styled.a`
    color: #fff;
    background: #fa464c;
    width: 48px;
    height: 48px;
    transition: .5s;
    font-weight: 500;
    position: fixed;
    right: 30px;
    bottom: 30px;
    z-index: 99;
    border-radius: 50px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
`;

export const BacktoTopButt = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 300) { /* if scrolling exceeds 300px, the button becomes visible */
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => { /* pressing the button takes us to the top of the page: top: 0....*/
      window.scrollTo({
        top: 0,
        behavior: 'smooth', 
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div>
    {isVisible && (
     <BackBut 
       href="#/" 
       class="btn btn-lg btn-lg-square back-to-top" onClick={scrollToTop}>
            <i class="bi bi-arrow-up">
            </i>
    </BackBut>
    )}
    </div>
  )
}
