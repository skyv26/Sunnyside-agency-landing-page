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
        <Menu href="">About</Menu>
      </List>
      <List>
        <Menu href="">Services</Menu>
      </List>
      <List>
        <Menu href="">Projects</Menu>
      </List>
    </NavigationList>
    <SocailMediaList class="social-container">
      <List>
        <Menu href="" className="fa-brands fa-square-facebook" />
      </List>
      <List>
        <Menu href="" className="fa-brands fa-instagram" />
      </List>
      <List>
        <Menu href="" className="fa-brands fa-twitter" />
      </List>
      <List>
        <Menu href="" className="fa-brands fa-pinterest" />
      </List>
    </SocailMediaList>
  </FooterContainer>
);

export default Footer;
