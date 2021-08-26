import React from 'react';
import { Header } from '../components/Header';
import { FontLoader } from '../FontLoader';

export default {
  title: 'Components',
  component: Header
};

export const _Header = () => (
  <>
    <FontLoader />
    <Header onClick={() => console.log('clicked')} />
  </>
)