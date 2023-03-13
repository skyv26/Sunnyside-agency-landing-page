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
import CherryImage from '../../assets/images/mobile/image-graphic-design.jpg';
import OrangeImage from '../../assets/images/mobile/image-photography.jpg';

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
    <FeatureCard className="ImageCard">
      <FeatureCardImage src={CherryImage} alt="" />
      <FeatureCardInner>
        <FeatureCardHeading>Graphic design</FeatureCardHeading>
        <FeatureCardDesc>
          Great design makes you memorable. We deliver artwork that underscores your 
          brand message and captures potential clients&apos; attention.
        </FeatureCardDesc>
      </FeatureCardInner>
    </FeatureCard>
    <FeatureCard className="ImageCard">
      <FeatureCardImage src={OrangeImage} alt="" />
      <FeatureCardInner>
        <FeatureCardHeading>Photography</FeatureCardHeading>
        <FeatureCardDesc>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </FeatureCardDesc>
      </FeatureCardInner>
    </FeatureCard>
  </FeatureSectionContainer>
);

export default Feature;
