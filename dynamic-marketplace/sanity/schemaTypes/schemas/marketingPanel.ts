export default {
    name: 'marketingPanel',
    type: 'document',
    title: 'Marketing Panel',
    fields: [
      {
        name: 'smallText',
        type: 'string',
        title: 'Small Text',
      },
      {
        name: 'largeText',
        type: 'string',
        title: 'Large Text',
        description: 'This will be your main heading on the page',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        validation: (Rule: any) =>
          Rule.max(100).warning('Keep the description under 100 characters.'),
      },
      {
        name: 'buttonText',
        type: 'string',
        title: 'Button Text',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image'
      }
    ],
  };