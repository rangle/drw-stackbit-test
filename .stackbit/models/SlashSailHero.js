module.exports = {
  labelField: 'heading',
  groups: ['SectionComponents'],
  fields: [
    {
      type: 'string',
      name: 'heading',
      default: 'heading',
      required: true,
    },
    {
      type: 'string',
      name: 'body',
      default: 'body',
      required: true,
    },
    { type: 'boolean', name: 'imageOnRight', default: false },
    { type: 'boolean', name: 'isDark', default: false },
    { type: 'boolean', name: 'headingIsSerif', default: false },
  ],
};
