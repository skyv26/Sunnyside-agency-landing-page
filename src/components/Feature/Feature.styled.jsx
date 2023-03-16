import styled from 'styled-components';
import CherryImage from '../../assets/images/mobile/image-graphic-design.jpg';
import OrangeImage from '../../assets/images/mobile/image-photography.jpg';
import DesktopCherryImage from '../../assets/images/desktop/image-graphic-design.jpg';
import DesktopOrangeImage from '../../assets/images/desktop/image-photography.jpg';

export const FeatureSectionContainer = styled.div`
  width: 100%;
  background-color: white;
`;

export const FeatureCardInner = styled(FeatureSectionContainer)`
  width: 100%;
  padding: 7rem 3.25rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: center;
  background-color: white;
  margin-top: -0.75rem;

  @media (min-width: 48em) {
    width: 50%;
    padding: 0 7rem;
    margin-top: 0;
    text-align: left;
    gap: 2rem;
  }

  @media (min-width: 80em) {
    width: 50%;
    padding: 0 15rem;
    margin: auto;
    text-align: left;
    gap: 2rem;
  }

`;

export const FeatureCardImage = styled.img`
  display: inline-block;
  width: 100%;
  object-fit: cover;
  object-position: top;

  @media (min-width: 48em) {
    width: 50%;
  }
`;

export const ImageFeatureCardContainer = styled(FeatureSectionContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 48em) {
    flex-direction: row;
  }
`;

export const FeatureCard = styled(FeatureSectionContainer)`
  width: 100%;

  @media (min-width: 48em) {
    &:first-child, &:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:first-child {
      flex-direction: row-reverse;
    }
  }

  &.ImageCard {
    position: relative;
    margin-top: -0.75rem;
    background: url(${CherryImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-origin: border-box;
    background-position: center;
    height: calc(100vh - 6rem);

    &:last-child {
      margin-top: -0.75rem;
      background: url(${OrangeImage});
      background-repeat: no-repeat;
      background-size: cover;
      background-origin: border-box;
      background-position: center;
      height: calc(100vh - 6rem);
    }

    @media (min-width: 48em) {
      width: 50%;
      margin-top: 0;
      background: url(${DesktopCherryImage});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      height: 32rem;

      &:last-child {
        margin-top: 0;
        background: url(${DesktopOrangeImage});
        background-repeat: no-repeat;
        background-size: cover;
        background-origin: border-box;
        background-position: center;
        height: 32rem;
      }

      @media (min-width: 64em) {
        height: 50rem;

        &:last-child {
          height: 50rem;
        }
      }

      @media (min-width: 80em) {
        height: 60rem;

        &:last-child {
          height: 60rem;
        }
      }
    }

    & ${FeatureCardInner} {
      padding: 0 3.25rem 7rem 3.25rem;
      width: 100%;
      gap: 3rem;
      height: 100%;
      background-color: transparent;
      justify-content: flex-end;
      bottom: 0;

      
      @media (max-width: 20em) {
        padding: 0 3.25rem 5rem 3.25rem;
        gap: 2rem;
      }

      @media (min-width: 48em) {
        text-align: center;
        padding: 0 9rem 3rem 9rem;
        gap: 2rem;
      }

      @media (min-width: 80em) {
        padding: 0 14rem 6rem 14rem;
      }

      @media (min-width: 86em) {
        padding: 0 16.75rem 6rem 16.75rem;
      }

      & p {
        opacity: 0.7;

        @media (max-width: 320px) {
          &:first-child {
            font-size: 2.25rem;
          }

          &:last-child {
            font-size: 1.1rem;
          }
        }

        @media (min-width: 22em) and (max-width: 360px) {
          &:first-child {
            font-size: 2.6rem;
          }

          &:last-child {
            font-size: 1.5rem;
          }
        }

        @media (min-width: 80em) {
          &:first-child {
            font-size: 3.1rem;
          }

          &:last-child {
            font-size: 1.7rem;
          }
        }
      }
    }
  }
`;

export const FeatureCardHeading = styled.p`
  font-family: var(--fraunces);
  font-weight: 900;
  font-size: 3rem;
  color: hsl(212, 27%, 19%);

  @media (min-width: 48em) {
    font-size: 2.1rem;
  }

  @media (min-width: 64em) {
    font-weight: 700;
    font-size: 3.775rem;
  }
`;

export const FeatureCardDesc = styled.p`
  font-family: var(--barlow);
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.6;
  color: hsl(213, 9%, 39%);

  @media (min-width: 48em) {
    font-size: 0.9rem;
  }

  @media (min-width: 64em) {
    font-size: 1.4rem;
  }

  @media (min-width: 80em) {
    font-size: 1.6rem;
  }
`;

export const FeatureCardBtn = styled.a`
  font-family: var(--fraunces);
  font-weight: 900;
  font-size: 1.75rem;
  line-height: 1.6;
  padding: 0 0.75rem;
  text-transform: uppercase;
  color: hsl(212, 27%, 19%);
  position: relative;
  z-index: 1;
  width: max-content;
  margin: auto;
  cursor: pointer;

  @media (min-width: 48em) {
    font-size: 1.1rem;
    text-align: left;
    margin: 0;
  }

  @media (min-width: 64em) {
    font-size: 1.4rem;
    letter-spacing: 1px;
  }

  @media (min-width: 80em) {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1rem;
    bottom: 0.25rem;
    border-radius: 1rem;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: rgba(250, 212, 0, 0.4);
    z-index: -1;
    transition: background-color 0.5s ease-in-out;

    @media (min-width: 48em) {
      height: .4rem;
    }

    @media (min-width: 64em) {
      height: .6rem;
    }

    @media (min-width: 80em) {
      height: .75rem;
    }
  }
  
  &.stand-out::before {
    background-color: rgba(254, 120, 103, 0.4)
  }

  &.stand-out:hover::before {
    background-color: hsl(6.7549668874172175, 98.69281045751634%, 70%)
  }

  &:hover::before {
    background-color: rgba(250, 212, 0, 1);
    transition: background-color 0.5s ease-in-out;
  }
`;
