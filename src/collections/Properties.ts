import { CollectionConfig } from 'payload';

export const Properties: CollectionConfig = {
  slug: 'properties',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'propertyType', 'transactionType', 'price', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'location',
      type: 'group',
      fields: [
        {
          name: 'city',
          type: 'text',
          required: true,
        },
        {
          name: 'province',
          type: 'text',
          required: true,
        },
        {
          name: 'address',
          type: 'text',
          required: true,
        },
        {
          name: 'coordinates',
          type: 'group',
          fields: [
            {
              name: 'latitude',
              type: 'number',
              required: true,
            },
            {
              name: 'longitude',
              type: 'number',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'propertyType',
      type: 'select',
      required: true,
      options: [
        { label: 'House', value: 'house' },
        { label: 'Apartment', value: 'apartment' },
        { label: 'Townhouse', value: 'townhouse' },
        { label: 'Villa', value: 'villa' },
      ],
    },
    {
      name: 'transactionType',
      type: 'select',
      required: true,
      options: [
        { label: 'For Sale', value: 'sale' },
        { label: 'For Rent', value: 'rent' },
        { label: 'For Swap', value: 'swap' },
      ],
    },
    {
      name: 'features',
      type: 'group',
      fields: [
        {
          name: 'bedrooms',
          type: 'number',
          required: true,
          min: 0,
        },
        {
          name: 'bathrooms',
          type: 'number',
          required: true,
          min: 0,
        },
        {
          name: 'size',
          type: 'number',
          required: true,
          min: 0,
        },
        {
          name: 'parking',
          type: 'number',
          required: true,
          min: 0,
        },
      ],
    },
    {
      name: 'amenities',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Swimming Pool', value: 'pool' },
        { label: 'Garden', value: 'garden' },
        { label: 'Security', value: 'security' },
        { label: 'Garage', value: 'garage' },
        { label: 'Air Conditioning', value: 'air-conditioning' },
        { label: 'Furnished', value: 'furnished' },
      ],
    },
    {
      name: 'images',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'available',
      options: [
        { label: 'Available', value: 'available' },
        { label: 'Under Offer', value: 'under-offer' },
        { label: 'Sold', value: 'sold' },
        { label: 'Rented', value: 'rented' },
      ],
    },
    {
      name: 'swapPreferences',
      type: 'group',
      admin: {
        condition: (data) => data.transactionType === 'swap',
      },
      fields: [
        {
          name: 'preferredLocations',
          type: 'array',
          fields: [
            {
              name: 'city',
              type: 'text',
              required: true,
            },
            {
              name: 'province',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'preferredPropertyTypes',
          type: 'select',
          hasMany: true,
          options: [
            { label: 'House', value: 'house' },
            { label: 'Apartment', value: 'apartment' },
            { label: 'Townhouse', value: 'townhouse' },
            { label: 'Villa', value: 'villa' },
          ],
        },
        {
          name: 'minBedrooms',
          type: 'number',
          min: 0,
        },
        {
          name: 'minBathrooms',
          type: 'number',
          min: 0,
        },
        {
          name: 'minSize',
          type: 'number',
          label: 'Minimum Size (in square meters)',
          min: 0,
        },
        {
          name: 'additionalNotes',
          type: 'textarea',
          label: 'Additional Requirements or Notes',
        },
      ],
    },
  ],
};