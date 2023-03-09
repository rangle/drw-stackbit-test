import React from 'react';
import { Quote } from './Quote';

export default {
  title: 'Example/Quote',
  component: Quote,
};

const Template = (args) => <Quote {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  hasDarkBackground: false,
  body: 'DRW’s commitment to challenging consensus and continuous innovation enables us to be a transformative force in global markets.',
  author: 'Don Wilson, Founder and CEO',
  hasQuoteIcon: true
};
