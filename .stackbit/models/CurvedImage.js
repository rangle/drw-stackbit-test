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
    { type: 'image', name: 'imageUrl' },
    { type: 'string', name: 'imageAlt' },
    {
      type: 'boolean',
      name: 'imageOnRight',
      label: 'Display image on right',
      default: false
    },
    { type: 'boolean', name: 'isDark', label: 'Dark mode', default: false },
    {
      name: 'cta',
      type: 'object',
      label: 'CTA',
      fields: [
        {
          name: 'isEnabled',
          type: 'boolean'
        },
        {
          name: 'text',
          type: 'string'
        },
        {
          name: 'url',
          type: 'string'
        },
        {
          name: 'useSecondaryStyles',
          type: 'boolean',
          label: 'Use secondary CTA styles',
          const: false
        }
      ]
    },
    {
      name: 'ctaSecondary',
      type: 'object',
      label: 'Secondary CTA',
      fields: [
        {
          name: 'isEnabled',
          type: 'boolean'
        },
        {
          name: 'text',
          type: 'string'
        },
        {
          name: 'url',
          type: 'string'
        },
        {
          type: 'boolean',
          name: 'useSecondaryStyles',
          label: 'Use secondary CTA styles',
          const: true
        }
      ]
    }
  ]
}
