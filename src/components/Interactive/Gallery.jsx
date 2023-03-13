import React from 'react';
import { GalleryContainer, Image } from './Gallery.styled';
import GalleryMilkBottle from '../../assets/images/mobile/image-gallery-milkbottle.jpg';
import GalleryOrange from '../../assets/images/mobile/image-gallery-orange.jpg';
import GalleryCone from '../../assets/images/mobile/image-gallery-cone.jpg';
import GallerySugarCubes from '../../assets/images/mobile/image-gallery-sugar-cubes.jpg';

const Gallery = () => (
  <GalleryContainer>
    <Image src={GalleryMilkBottle} alt="" />
    <Image src={GalleryOrange} alt="" />
    <Image src={GalleryCone} alt="" />
    <Image src={GallerySugarCubes} alt="" />
  </GalleryContainer>
);

export default Gallery;
