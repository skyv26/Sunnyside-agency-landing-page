import styled from 'styled-components';

export const GalleryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  display: inline-block;
  object-fit: contain;
  width: calc(100%/2);
  object-position: top;
`;
