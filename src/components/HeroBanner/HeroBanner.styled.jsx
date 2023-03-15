import styled from 'styled-components';
import MobileHeaderImage from '../../assets/images/mobile/image-header.jpg';

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
`;
