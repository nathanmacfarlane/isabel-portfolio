import React from 'react';
import { Typography } from '../components/Typography';
import { FontLoader } from '../FontLoader';

export default {
  title: 'Components',
  component: Typography
};

export const _Typography = () => (
  <>
    <FontLoader />
    <Typography type="header">Header</Typography>
    <Typography type="subheader">Subheader</Typography>
    <Typography type="paragraph">Paragraph</Typography>
  </>
)