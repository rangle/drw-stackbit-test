module.exports = {
  labelField: 'body',
  groups: ['SectionComponents'],
  fields: [
    { type: 'string', name: 'heading' },
    {
      type: 'markdown',
      name: 'body'
    },
    { type: 'string', name: 'text' },
    { type: 'string', name: 'url' },
    { type: 'image', name: 'imageUrl' },
    { type: 'string', name: 'imageAlt' },
    {
      type: 'boolean',
      name: 'image_on_right',
      label: 'Display image on right',
      default: false
    },
    { type: 'boolean', name: 'isDark', label: 'Dark mode', default: false },
    {
      type: 'boolean',
      name: 'ctaSecondary',
      label: 'Use secondary CTA',
      default: false
    }
  ]
}
