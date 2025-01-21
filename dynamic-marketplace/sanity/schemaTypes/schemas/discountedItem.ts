import { title } from "process";

export default {
    name: 'discountedItem',
    type: 'document',
    title: 'Discount Item',
    fields: [
      {
        name: 'id',
        title: 'ID',
        type: 'number',
      },
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: (Rule: any) => Rule.required().error('Name is required'),
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true,
        },
        description: 'Upload an image of the product.',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {source: 'name'}
      },
      {
        name: 'price',
        type: 'string',
        title: 'Price',
        validation: (Rule: any) => Rule.required().error('Price is required'),
      },
    {
      name: 'mainHeading',
      type: 'string',
      title: 'Main Heading',
      validation: (Rule: any) => Rule.required().error('Main Heading is required'),
    },
      {
        name: 'discountPercentage',
        type: 'number',
        title: 'Discount Percentage',
        validation: (Rule: any) =>
          Rule.min(0).max(100).warning('Discount must be between 0 and 100.'),
      },
      {
        name: 'stockLevel',
        type: 'number',
        title: 'Stock Level',
        validation: (Rule: any) => Rule.min(0).error('Stock level must be a positive number.'),
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
        options: {
          list: [
            { title: 'Chair', value: 'Chair' },
            { title: 'Sofa', value: 'Sofa' },
          ],
        },
        validation: (Rule: any) => Rule.required().error('Category is required'),
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        validation: (Rule: any) => Rule.required().error('Description is required'),
      },
      {
        name: 'descriptionPoint1',
        title: 'Description Point 1',
        type: 'string',
        description: 'Enter the first point of the description. (not mandatory but it has some ui effects)',
      },
      {
        name: 'descriptionPoint2',
        title: 'Description Point 2',
        type: 'string',
      },
      {
        name: 'descriptionPoint3',
        title: 'Description Point 3',
        type: 'string',
      },
      {
        name: 'descriptionPoint4',
        title: 'Description Point 4',
        type: 'string',
      },
      
    ],
  };