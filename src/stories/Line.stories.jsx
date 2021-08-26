import React from 'react';
import { Line } from '../components/Line';

export default {
  title: 'Components',
  component: Line
};

export const _Line = () => (
  <>
    <Line />
    <br />
    <Line width={80} />
  </>
)