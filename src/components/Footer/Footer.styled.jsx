import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: hsl(167, 57%, 70%);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 4rem 7rem 4rem;
`;

export const Icon = styled.i`
  font-size: 3rem;
`;

export const Menu = styled.a`
  font-size: 1.75rem;
  font-family: var(--barlow);
  font-weight: 600;
  color: hsl(168, 34%, 41%);
  width: 100%;
`;

export const SocailMediaList = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  gap: 2.75rem;
`;

export const NavigationList = styled(SocailMediaList)`
  justify-content: space-between;
  margin-top: 2rem;
  gap: 0;
`;

export const List = styled.li`
  /* width: 100%; */
  text-align: center;
`;
