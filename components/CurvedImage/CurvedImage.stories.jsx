import React from 'react'
import { CurvedImage } from './CurvedImage'

export default {
  title: 'Example/CurvedImage',
  component: CurvedImage
}

const Template = (args) => <CurvedImage {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isDark: false,
  heading: 'Powerful solution to global challenges',
  body: `In 2020, we became one of the world’s first carbon neutral trading firms, partnering with Climate Vault to create and utilize a novel approach to solving climate change.`,
  imageUrl:
    'https://res.cloudinary.com/drw/image/upload/c_fill,g_face,q_auto,f_auto,w_350,h_350/v1638387596/comm-drw/uploads/pexels-jess-loiterton-4601063_w72cvy.jpg',
  imageAlt: 'Ocean meets the shore',
  url: '/work-at-drw/who-we-are/social-responsibility/',
  text: 'Learn about CSR at DRW',
  ctaSecondary: true,
  imageOnRight: true
}

export const Dark = Template.bind({})
Dark.args = {
  isDark: true,
  heading: 'Powerful solution to global challenges',
  body: `In 2020, we became one of the world’s first carbon neutral trading firms, partnering with Climate Vault to create and utilize a novel approach to solving climate change.

  ![](https://res.cloudinary.com/drw/image/upload/v1638386124/comm-drw/uploads/CV_Logo_Horizontal_INVERTED-reduced_aqycpv.png)
  
  This reflects our long-standing commitment to solve emerging global issues and create opportunities in the communities where we live and work. We seek opportunities to use our resources to drive positive change.
  `,
  imageUrl:
    'https://res.cloudinary.com/drw/image/upload/c_fill,g_face,q_auto,f_auto,w_350,h_350/v1638387596/comm-drw/uploads/pexels-jess-loiterton-4601063_w72cvy.jpg',
  imageAlt: 'Ocean meets the shore',
  url: '/work-at-drw/who-we-are/social-responsibility/',
  text: 'Learn about CSR at DRW'
}
