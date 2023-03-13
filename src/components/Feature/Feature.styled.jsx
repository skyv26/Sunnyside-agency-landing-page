import styled from 'styled-components';

export const FeatureSectionContainer = styled.div`
  width: 100%;
  background-color: white;
`;

export const FeatureCard = styled(FeatureSectionContainer)`
  width: 100%;
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
`;

export const FeatureCardImage = styled.img`
  display: inline-block;
  width: 100%;
  object-fit: cover;
  object-position: top;
`;

export const FeatureCardHeading = styled.p`
  font-family: var(--fraunces);
  font-weight: 900;
  font-size: 3.6rem;
  color: hsl(212, 27%, 19%);
`;

export const FeatureCardDesc = styled.p`
  font-family: var(--barlow);
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 1.6;
  color: hsl(213, 9%, 39%);
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
