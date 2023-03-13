import React from 'react';
import {
  FeatureSectionContainer,
  FeatureCard,
  FeatureCardImage,
  FeatureCardHeading,
  FeatureCardInner,
  FeatureCardDesc,
  FeatureCardBtn,
} from './Feature.styled';
import EggImage from '../../assets/images/mobile/image-transform.jpg';
import GlassImage from '../../assets/images/mobile/image-stand-out.jpg';

const Feature = () => (
  <FeatureSectionContainer>
    <FeatureCard>
      <FeatureCardImage src={EggImage} alt="" />
      <FeatureCardInner>
        <FeatureCardHeading>Transform your brand</FeatureCardHeading>
        <FeatureCardDesc>
          We are a full-service creative agency specializing in helping brands grow fast.
          Engage your clients through compelling visuals that do most of the marketing for you.
        </FeatureCardDesc>
        <FeatureCardBtn>Learn more</FeatureCardBtn>
      </FeatureCardInner>
    </FeatureCard>
    <FeatureCard>
      <FeatureCardImage src={GlassImage} alt="" />
      <FeatureCardInner>
        <FeatureCardHeading>Stand out to the right audience</FeatureCardHeading>
        <FeatureCardDesc>
          Using a collaborative formula of designers, researchers, photographers,
          videographers, and copywriters, we&apos;ll build and extend your brand in digital places.
        </FeatureCardDesc>
        <FeatureCardBtn className="stand-out">Learn more</FeatureCardBtn>
      </FeatureCardInner>
    </FeatureCard>
  </FeatureSectionContainer>
);

export default Feature;
