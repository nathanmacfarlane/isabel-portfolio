import React from 'react';
import { Card } from '../components/Card';
import { FontLoader } from '../FontLoader';
import wine from '../images/wine.png';

export default {
  title: 'Components',
  component: Card
};

export const _Card = () => (
  <>
    <FontLoader />
    <Card title="Title" subTitle="Sub Title" image={wine}>
      A search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
    </Card>
    <Card title="Title" subTitle="Sub Title" image={wine}>
      A search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
    </Card>
    <Card title="Title" subTitle="Sub Title" image={wine}>
      A search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
    </Card>
  </>
)