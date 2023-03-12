import styled from 'styled-components';
import MobileHeaderImage from '../../assets/images/mobile/image-header.jpg';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: url(${MobileHeaderImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  position: relative;
  `;

export const MainDisplayText = styled.h1`
  font-family: var(--fraunces);
  font-weight: 900;
  color: white;
  font-size: 6.65vh;
  text-transform: uppercase;
  padding-top: 13rem;
  letter-spacing: 0.5rem;
`;

export const ArrowButton = styled.img`
  display: inline-block;
  position: absolute;
  top: 68%;
  left: 50%;
  transform: translate(-50%, -68%);
  animation: downanimation 2s infinite 1s;
  transition-delay: 0.25s ease-in;

  @keyframes downanimation {
    0% {
      transform: translate(-50%, -68%);
    }
    100% {
      transform: translate(-50%, 4rem);
    }
  }
`;
