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
  TestimonialCardContainer,
} from './Testimonial.styled';

const Testimonial = () => (
  <TestimonialContainer>
    <Heading>Client testimonials</Heading>
    <TestimonialCardContainer>
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
      <Card>
        <Image src={Thomas} alt="Emily R." />
        <Feedback>
          Sunnyside&apos;s enthusiasm coupled with their keen interest in our
          brand&apos;s success made it a satisfying and enjoyable experience.
        </Feedback>
        <Name>
          Thomas S.
          <Designation>Chief Operating Officer</Designation>
        </Name>
      </Card>
      <Card>
        <Image src={Jennie} alt="Emily R." />
        <Feedback>
          Incredible end result! Our sales increased over 400%
          when we worked with Sunnyside. Highly recommended!
        </Feedback>
        <Name>
          Jennie F.
          <Designation>Business Owner</Designation>
        </Name>
      </Card>
    </TestimonialCardContainer>
  </TestimonialContainer>
);
export default Testimonial;
