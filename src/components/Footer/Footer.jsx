import React from 'react';
import {
  FooterContainer,
  NavigationList,
  SocailMediaList,
  List,
  Menu,
} from './Footer.styled';
import SunnySideLogo from '../../utils/SunnySideLogo';

const Footer = () => (
  <FooterContainer>
    <SunnySideLogo footer />
    <NavigationList>
      <List>
        <Menu>About</Menu>
      </List>
      <List>
        <Menu>Services</Menu>
      </List>
      <List>
        <Menu>Projects</Menu>
      </List>
      <List>
        <Menu />
      </List>
    </NavigationList>
    <SocailMediaList>
      <List>
        <Menu className="fa-brands fa-square-facebook" />
      </List>
      <List>
        <Menu className="fa-brands fa-instagram" />
      </List>
      <List>
        <Menu className="fa-brands fa-twitter" />
      </List>
      <List>
        <Menu className="fa-brands fa-pinterest" />
      </List>
    </SocailMediaList>
  </FooterContainer>
);

export default Footer;
