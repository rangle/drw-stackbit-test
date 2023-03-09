module.exports = {
  labelField: 'body',
  groups: ['SectionComponents'],
  fields: [
    { type: 'string', name: 'heading' },
    {
      type: 'markdown',
      name: 'body'
    },
    { type: 'string', name: 'ctaText' },
    { type: 'string', name: 'ctaUrl' },
    { type: 'string', name: 'imageUrl' },
    { type: 'string', name: 'imageAlt' },
    {
      type: 'boolean',
      name: 'imageOnRight',
      label: 'Display image on right',
      default: false
    },
    { type: 'boolean', name: 'isDark', label: 'Dark mode', default: false },
    {
      type: 'boolean',
      name: 'useSecondaryCta',
      label: 'Use secondary CTA',
      default: false
    }
  ]
}
