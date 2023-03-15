import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Bar = styled.span`
  display: inline-block;
  height: 2.5px;
  width: 100%;
  background-color: white;
`;

const Container = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 2.4rem;
  height: 1.8rem;
  
  &:hover {
    cursor: pointer;
  }

  & ${Bar} {
    transition: all 0.5s ease-in;
  }

  &.active ${Bar}:nth-child(2) {
    display: none;
  }

  &.active ${Bar}:nth-child(1) {
    transform-origin: left;
    transform: rotate(45deg) scale(1.2) translate(0, -1px);
    transition: transform 0.5s ease-in-out;
  }

  &.active ${Bar}:last-child {
    transform-origin: left;
    transform: rotate(-45deg) scale(1.2) translate(-2px, 2px);
    transition: transform 0.5s ease-in-out;
  }
`;

const Hamburger = (props) => {
  const { mobileMenuStatusChange } = props;

  const hamburgerMenuHandler = (e) => {
    e.currentTarget.classList.toggle('active');
    mobileMenuStatusChange((prev) => !prev);
  };

  return (
    <Container onClick={hamburgerMenuHandler}>
      <Bar />
      <Bar />
      <Bar />
    </Container>
  );
};

Hamburger.propTypes = {
  mobileMenuStatusChange: PropTypes.func,
};

Hamburger.defaultProps = {
  mobileMenuStatusChange: () => {},
};

export default Hamburger;
