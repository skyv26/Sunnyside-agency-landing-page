import styled from 'styled-components';
import MobileHeaderImage from '../../assets/images/mobile/image-header.jpg';
import DesktopHeaderImage from '../../assets/images/desktop/image-header.jpg';

export const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100vh;
  background: url(${MobileHeaderImage});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  text-align: center;
  position: relative;

  @media (min-width: 48em) {
    background-position: center;
  }

  @media (min-width: 64em) {
    background: url(${DesktopHeaderImage});
    min-height: 100%;
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    text-align: center;
  }
`;

export const MainDisplayText = styled.h1`
  font-family: var(--fraunces);
  font-weight: 900;
  color: white;
  font-size: 3rem;
  text-transform: uppercase;
  padding-top: 13rem;
  letter-spacing: 0.5rem;

  @media (min-width: 23em) {
    font-size: 4.25rem;
  }
  
  @media (min-width: 48em) {
    padding-top: 16rem;
  }
  
  @media (min-width: 64em) {
    font-weight: 900;
    padding-top: 14rem;
    font-size: 3.6rem;
    letter-spacing: 1rem;
  }

  @media (min-width: 86em) {
    font-weight: 900;
    padding-top: 19.6rem;
    font-size: 5.675rem;
    letter-spacing: 1rem;
  }
`;

export const ArrowButton = styled.img`
  display: inline-block;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -70%);
  animation: downanimation 3s infinite 1s;
  transition-delay: 0.25s ease-in;

  @keyframes downanimation {
    0% {
      transform: translate(-50%, -70%);
    }
    100% {
      transform: translate(-50%, 5rem);
    }
  }

  @media (min-width: 64em) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
