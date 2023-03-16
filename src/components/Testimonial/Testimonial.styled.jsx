import styled from 'styled-components';

export const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 8vh 8vw;
  gap: 6rem;

  @media (min-width: 48em) {
    padding: 10vh 8vw;
  }

  @media (min-width: 86em) {
    padding: 16vh 8vw;
    gap: 8rem;
  }
`;

export const TestimonialCardContainer = styled(TestimonialContainer)`
  padding: 0 0;

  @media (min-width: 48em) {
    flex-direction: row;
  }
`;

export const Heading = styled.h2`
  text-transform: uppercase;
  font-family: var(--fraunces);
  font-weight: 900;
  letter-spacing: 3px;
  font-size: 1.75rem;
  color: hsl(210, 4%, 67%);

  @media (min-width: 86em) {
    font-size: 1.8rem;
    letter-spacing: 4px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const Image = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  object-fit: cover;
  object-position: top;
  border-radius: 50%;

  @media (min-width: 48em) {
    width: 5rem;
    height: 5rem;
  }

  @media (min-width: 86em) {
    width: 7rem;
    height: 7rem;
  }
`;

export const Feedback = styled.p`
  font-size: 1.6rem;
  font-family: var(--barlow);
  font-weight: 600;
  color: hsl(212, 27%, 19%);
  line-height: 1.65;

  @media (min-width: 48em) {
    font-size: 1rem;
  }

  @media (min-width: 86em) {
    font-size: 1.9rem;
  }
`;

export const Name = styled(Feedback)`
  font-size: 1.75rem;
  font-family: var(--fraunces);
  font-weight: 900;
  color: hsl(212, 27%, 19%);

  @media (min-width: 48em) {
    font-size: 1.25rem;
  }

  @media (min-width: 86em) {
    font-size: 1.9rem;
  }
`;

export const Designation = styled.span`
  display: block;
  font-size: 1.25rem;
  font-family: var(--barlow);
  font-weight: 600;
  color: hsl(232, 10%, 55%);

  @media (min-width: 48em) {
    font-size: 1rem;
  }

  @media (min-width: 86em) {
    font-size: 1.4rem;
  }
`;
