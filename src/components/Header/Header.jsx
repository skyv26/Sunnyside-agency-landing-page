import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import {
  AgencyHeader,
  MobileMenu,
  MenuList,
  Menu,
} from './header.styled';
import Hamburger from '../../utils/Hamburger';
import SunnySideLogo from '../../utils/SunnySideLogo';

const Header = () => {
  const [mobileMenuStatus, mobileMenuStatusChange] = useState(false);

  return (
    <AgencyHeader>
      <SunnySideLogo />
      <Hamburger mobileMenuStatusChange={mobileMenuStatusChange} />
      {
        mobileMenuStatus && (
          <MobileMenu>
            <MenuList>
              <Menu>about</Menu>
              <Menu>services</Menu>
              <Menu>projects</Menu>
              <Menu>contact</Menu>
            </MenuList>
          </MobileMenu>
        )
      }
    </AgencyHeader>
  );
};

export default Header;
