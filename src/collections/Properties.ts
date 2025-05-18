import { CollectionConfig } from 'payload/types'

export const Properties: CollectionConfig = {
  slug: 'properties',
  admin: {
    useAsTitle: 'title',
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
      type: 'richText',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
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
      options: [
        {
          label: 'House',
          value: 'house',
        },
        {
          label: 'Apartment',
          value: 'apartment',
        },
        {
          label: 'Townhouse',
          value: 'townhouse',
        },
        {
          label: 'Villa',
          value: 'villa',
        },
      ],
      required: true,
    },
    {
      name: 'transactionType',
      type: 'select',
      options: [
        {
          label: 'For Sale',
          value: 'sale',
        },
        {
          label: 'For Rent',
          value: 'rent',
        },
        {
          label: 'For Swap',
          value: 'swap',
        },
      ],
      required: true,
    },
    {
      name: 'features',
      type: 'group',
      fields: [
        {
          name: 'bedrooms',
          type: 'number',
          required: true,
        },
        {
          name: 'bathrooms',
          type: 'number',
          required: true,
        },
        {
          name: 'size',
          type: 'number',
          required: true,
          label: 'Size (in square meters)',
        },
        {
          name: 'parking',
          type: 'number',
          required: true,
        },
      ],
    },
    {
      name: 'amenities',
      type: 'select',
      hasMany: true,
      options: [
        {
          label: 'Swimming Pool',
          value: 'pool',
        },
        {
          label: 'Garden',
          value: 'garden',
        },
        {
          label: 'Security',
          value: 'security',
        },
        {
          label: 'Air Conditioning',
          value: 'aircon',
        },
        {
          label: 'Built-in Wardrobes',
          value: 'wardrobes',
        },
        {
          label: 'Dishwasher',
          value: 'dishwasher',
        },
        {
          label: 'Balcony',
          value: 'balcony',
        },
        {
          label: 'Elevator',
          value: 'elevator',
        },
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
      name: 'floorPlan',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'nearbyAmenities',
      type: 'array',
      fields: [
        {
          name: 'category',
          type: 'select',
          options: [
            {
              label: 'Education',
              value: 'education',
            },
            {
              label: 'Shopping',
              value: 'shopping',
            },
            {
              label: 'Transportation',
              value: 'transportation',
            },
            {
              label: 'Healthcare',
              value: 'healthcare',
            },
          ],
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'distance',
          type: 'number',
          required: true,
          label: 'Distance (in km)',
        },
      ],
    },
    {
      name: 'agent',
      type: 'relationship',
      relationTo: 'agents',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'available',
      options: [
        {
          label: 'Available',
          value: 'available',
        },
        {
          label: 'Under Offer',
          value: 'under-offer',
        },
        {
          label: 'Sold',
          value: 'sold',
        },
        {
          label: 'Rented',
          value: 'rented',
        },
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
            {
              label: 'House',
              value: 'house',
            },
            {
              label: 'Apartment',
              value: 'apartment',
            },
            {
              label: 'Townhouse',
              value: 'townhouse',
            },
            {
              label: 'Villa',
              value: 'villa',
            },
          ],
        },
        {
          name: 'minBedrooms',
          type: 'number',
        },
        {
          name: 'minBathrooms',
          type: 'number',
        },
        {
          name: 'minSize',
          type: 'number',
          label: 'Minimum Size (in square meters)',
        },
      ],
    },
  ],
}
