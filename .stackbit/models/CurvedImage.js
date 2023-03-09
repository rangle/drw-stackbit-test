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
    { type: 'image', name: 'image_url' },
    { type: 'string', name: 'image_alt' },
    {
      type: 'boolean',
      name: 'image_on_right',
      label: 'Display image on right',
      default: false
    },
    { type: 'boolean', name: 'is_dark', label: 'Dark mode', default: false },
    {
      type: 'boolean',
      name: 'cta_secondary',
      label: 'Use secondary CTA',
      default: false
    }
  ]
}
