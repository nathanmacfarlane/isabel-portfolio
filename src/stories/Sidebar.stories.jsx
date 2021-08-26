import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { FontLoader } from '../FontLoader';

export default {
  title: 'Components',
  component: Sidebar
};

export const _Sidebar = () => (
  <>
    <FontLoader />
    <Sidebar />
  </>
)