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
      {/* <svg
        width="24"
        height="18"
        role="img"
        aria-labelledby="title desc"
        xmlns="http://www.w3.org/2000/svg"
        onClick={hamburgerMenuHandler}
      >
        <title id="title">Hamburger Icon</title>
        <desc id="desc">Hamburger</desc>
        <path
          d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
          fill="#FFF"
          fillRule="evenodd"
        />
      </svg> */}
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
