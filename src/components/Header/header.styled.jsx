import styled from 'styled-components';

export const AgencyHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 3rem 2rem;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgb(50, 192, 255);
  z-index: 10;

  @media (min-width: 86em) {
    padding: 3.2rem 3.25rem;

    & svg {
      display: inline-block;
      transform: scale(1.375) translate(2.2rem, 0);
    }
  }
`;

export const MobileMenu = styled.nav`
  display: flex;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  flex-direction: column;
  height: max-content;
  width: calc(100% - 4rem);
  clip-path: polygon(0% 8%, 93% 8%, 100% 0%, 100% 50%, 100% 100%, 0% 100%, 0% 100%);
  background-color: #ffffff;

  @media (min-width: 48em) {
    top: 100%;
    left: 100%;
    right: 0;
    transform: translate(calc(-100% - 2rem), 0);
    width: 40%;
  }

  @media (orientation: landscape) {
    height: 70vh;
    overflow-y: scroll;
    clip-path: polygon(0% 12%, 95% 12%, 100% 0%, 100% 50%, 100% 100%, 0% 100%, 0% 100%);

    &::-webkit-scrollbar {
      width: 0.6rem;
    }
    
    &::-webkit-scrollbar-track {
      box-shadow:inset 0 0 6px rgba(0,0,0,0.3); 
      border-radius:5px;
      margin-top: 10vh;
     }
   
     &::-webkit-scrollbar-thumb {
      border-radius:5px;
      box-shadow: inset 0 0 6px rgb(25, 98, 130); 
      margin-top: 10vh;
     }
  }

  @media (min-width: 86em) and (orientation: landscape) {
    position: unset;
    top: 0;
    right: 0;
    height: auto;
    display: inline-block;
    transform: translate(0, 0);
    width: auto;
    clip-path: none;
    overflow: unset;
    background-color: transparent;
  }

`;

export const MenuList = styled.ul`
  padding: 12% 12% 6% 12%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  
  @media (min-width: 38em) and (max-height: 20em) {
    padding: 8% 8% 2% 8%;
  }

  @media (min-width: 86em) {
    flex-direction: row;
    padding: 0;
    gap: 4.9rem;
    justify-content: space-between;
  }
`;

export const MenuLink = styled.a`
  text-transform: capitalize;
  font-size: 2.25rem;
  font-family: var(--barlow);
  color: hsl(213, 9%, 39%);
  font-weight: 600;
  padding: 2rem;

  &:hover {
    /* font-family: 700; */
    text-transform: uppercase;
    font-family: var(--fraunces);
    padding: 1.25rem;
  }

  @media (min-width: 86em) {
    padding: 0;
  }
`;

export const Menu = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.25rem;
  font-family: var(--barlow);
  font-weight: 600;
  color: hsl(213, 9%, 39%);
  height: 6.5rem;
  width: 60%;
  text-transform: capitalize;
  border-radius: 4rem;
  
  @media (max-width: 20em) {
    font-size: 1.75rem;
    height: 4rem;
  }

  @media (min-width: 86rem) {
    font-size: 1.8rem;
    height: auto;
    /* padding: 2rem 2.8rem; */
    width: max-content;
    color: white;
  }

  &:last-child {
    font-size: 2rem;
    /* font-family: 700; */
    text-transform: uppercase;
    font-family: var(--fraunces);
    background-color: hsl(51, 100%, 49%);

    @media (max-width: 22em) {
      font-size: 1.4rem;
    }

    @media (min-width: 86em) {
     font-size: 1.47rem;
     padding: 2rem 2.8rem;
     background-color: white;
     color: hsl(212, 27%, 19%);
    }
  }
`;
