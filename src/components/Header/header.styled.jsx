import styled from 'styled-components';

export const AgencyHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.25rem 2rem;
  /* background-color: rgb(10 182 255); */
  position: relative;
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
`;

export const MenuList = styled.ul`
  padding: 12% 12% 6% 12%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
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

  &:hover {
    font-size: 2rem;
    /* font-family: 700; */
    text-transform: uppercase;
    font-family: var(--fraunces);
    background-color: hsl(51, 100%, 49%);
  }
`;
