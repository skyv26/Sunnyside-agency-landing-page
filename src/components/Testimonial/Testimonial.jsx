import React from 'react';
import Emily from '../../assets/images/image-emily.jpg';
import Thomas from '../../assets/images/image-thomas.jpg';
import Jennie from '../../assets/images/image-jennie.jpg';

import {
  TestimonialContainer,
  Image,
  Name,
  Designation,
  Feedback,
  Card,
  Heading,
} from './Testimonial.styled';

const Testimonial = () => (
  <TestimonialContainer>
    <Heading>Client testimonials</Heading>
    <Card>
      <Image src={Emily} alt="Emily R." />
      <Feedback>
        We put our trust in Sunnyside and they delivered, making sure our
        needs were met and deadlines were always hit.
      </Feedback>
      <Name>
        Emily R.
        <Designation>Marketing Director</Designation>
      </Name>
    </Card>
  </TestimonialContainer>
);
export default Testimonial;
