import type { CollectionConfig } from 'payload'
import { authenticated } from '@/access/authenticated'

export const ClientTestimonial: CollectionConfig = {
  slug: 'testimonials',
  labels: {
    singular: 'Testimonial',
    plural: 'Testimonials',
  },
  access: {
    read: () => true, // Publicly readable
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'rating',
      type: 'number',
      label: 'Rating (1-5)',
      required: true,
      min: 1,
      max: 5,
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Testimonial Message',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      label: 'Author Name',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      label: 'Location',
      required: true,
    },
  ],
}