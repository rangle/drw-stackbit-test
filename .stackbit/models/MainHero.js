module.exports = {
  labelField: 'heading',
  groups: ['SectionComponents'],
  fields: [
    {
      type: 'string',
      name: 'eyebrow',
      default: 'eyebrow',
      required: true,
    },
    { type: 'string', name: 'heading', default: 'heading', required: true },
    { type: 'string', name: 'body', default: 'body' },
  ],
};
