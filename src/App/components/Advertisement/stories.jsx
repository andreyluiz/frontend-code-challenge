import React from 'react';
import { storiesOf } from '@storybook/react';
import Advertisement from '.';

const props = {
  thumbnail: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.58d3d3fbef33b3.13123877.jpg',
  purpose: 1,
  title: 'Charmante 3-Zi Wohnung im Weinberg mit Panoramablick über Naumburg',
  price: 395,
  numberOfRooms: 3,
  space: 60,
};

storiesOf('Advertisement', module)
  .add('default', () => <div style={{ width: 500 }}><Advertisement {...props} /></div>);
