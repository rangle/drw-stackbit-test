import React from 'react'
import { SlashSailHero } from './SlashSailHero'

export default {
  title: 'Example/SlashSailHero',
  component: SlashSailHero
}

const Template = (args) => <SlashSailHero {...args} />

export const Primary = Template.bind({})
Primary.args = {
  image_on_right: true,
  image_url:
    'https://res.cloudinary.com/drw/image/upload/c_fill,g_face,q_auto,f_auto,w_380,h_480/v1636127712/comm-drw/uploads/cumberland_traders_yrobwy.jpg',
  image_alt: 'photo of stock trader sitting in front of a wall of monitors',
  heading: 'We provide liquidity across a range of asset classes.',
  headingIsSerif: false,
  body: 'Our counterparties benefit from our 30+ years of experience across a variety of asset classes.',
  is_dark: false
}
