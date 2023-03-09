module.exports = {
  labelField: 'body',
  groups: ['SectionComponents'],
  fields: [
    {
      type: 'string',
      name: 'body',
      default: 'body',
      required: true,
    },
    { type: 'string', name: 'author', default: 'author', required: true },
    { type: 'boolean', name: 'hasDarkBackground', default: false },
    { type: 'boolean', name: 'hasQuoteIcon', default: true },
  ],
};
