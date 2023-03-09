import React from 'react'
import { Cta } from './Cta'

export default {
  title: 'Example/Cta',
  component: Cta
}

const Template = (args) => <Cta {...args} />

export const Primary = Template.bind({})
Primary.args = {
  url: '/work-at-drw/who-we-are/social-responsibility/',
  text: 'Learn about CSR at DRW'
}

export const Secondary = Template.bind({})
Secondary.args = {
  url: '/work-at-drw/who-we-are/',
  text: 'Who we are',
  isSecondary: true
}

export const SecondaryExternal = Template.bind({})
SecondaryExternal.args = {
  url: 'https://www.builtinchicago.org/2023/02/14/professional-development-opportunities-that-support-employees',
  text: 'Read more',
  isSecondary: true
}
