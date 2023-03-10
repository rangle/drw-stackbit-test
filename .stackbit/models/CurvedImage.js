module.exports = {
  labelField: 'body',
  groups: ['SectionComponents'],
  fieldGroups: [{ name: 'cta', label: 'CTA', icon: 'gear' }],
  fields: [
    { type: 'string', name: 'heading' },
    {
      type: 'markdown',
      name: 'body'
    },
    { type: 'string', name: 'text', group: 'cta' },
    { type: 'string', name: 'url', group: 'cta' },
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
