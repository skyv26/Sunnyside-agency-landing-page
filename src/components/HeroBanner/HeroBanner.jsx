import React from 'react';
import { HeroContainer, MainDisplayText, ArrowButton } from './HeroBanner.styled';
import LongDownArrow from '../../assets/images/icon-arrow-down.svg';

const HeroBanner = () => (
  <HeroContainer>
    <MainDisplayText>we are creatives</MainDisplayText>
    <ArrowButton src={LongDownArrow} />
  </HeroContainer>
);

export default HeroBanner;
