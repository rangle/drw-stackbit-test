import React from 'react';

import { MainHero } from './MainHero';

export default {
  title: 'Example/MainHero',
  component: MainHero,
  argTypes: {
    heroImage: { control: {type: 'text'}},
  },
};

const Template = (args) => <MainHero {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  eyebrow: 'Work at DRW',
  heading: 'Careers in Real Estate',
  // date,
  // body,
  // heroImageAlt
};
