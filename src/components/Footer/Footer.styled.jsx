import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: hsl(167, 57%, 70%);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem 4rem 10rem 4rem;

  & svg {
    transform: scale(1.5);
  }
`;

export const Menu = styled.a`
  font-size: 1.75rem;
  font-family: var(--barlow);
  font-weight: 600;
  width: 100%;
`;

export const SocailMediaList = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  gap: 2.75rem;

  & ${Menu} {
    color: hsl(167, 40%, 24%);
    font-size: 2.6rem;
    &:hover {
      color: white;
    }
  }
`;

export const NavigationList = styled(SocailMediaList)`
  justify-content: space-between;
  margin-top: 7rem;
  gap: 0;

  & ${Menu} {
    color: hsl(168, 34%, 41%);
    font-size: 1.75rem;
   
    &:hover {
      color: white;
    }
  }
`;

export const List = styled.li`
  /* width: 100%; */
  text-align: center;
`;
