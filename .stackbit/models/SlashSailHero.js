module.exports = {
  labelField: 'heading',
  groups: ['SectionComponents'],
  fields: [
    {
      type: 'string',
      name: 'heading',
      default: 'heading',
      required: true
    },
    {
      type: 'string',
      name: 'body',
      default: 'body',
      required: true
    },
    { type: 'boolean', name: 'image_on_right', default: false },
    { type: 'boolean', name: 'is_dark', default: false },
    { type: 'boolean', name: 'headingIsSerif', default: false }
  ]
}
