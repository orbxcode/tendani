import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { authenticated } from '@/access/authenticated'

export const About: CollectionConfig = {
  slug: 'about',
  labels: {
    singular: 'About Page',
    plural: 'About Page',
  },
  access: {
    read: () => true, // Publicly readable
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'aboutTendani',
      type: 'richText',
      label: 'About Tendani',
      required: true,
      editor: lexicalEditor(),
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Profile Image',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'yearsOfExperience',
      type: 'number',
      label: 'Years of Experience',
      required: true,
      min: 0,
    },
    {
      name: 'happyClients',
      type: 'number',
      label: 'Happy Clients',
      required: true,
      min: 0,
    },
    {
      name: 'awards',
      type: 'number',
      label: 'Industry Awards',
      required: true,
      min: 0,
    },
    {
      name: 'mission',
      type: 'richText',
      label: 'Our Mission',
      required: true,
      editor: lexicalEditor(),
    },
    {
      name: 'vision',
      type: 'richText',
      label: 'Our Vision',
      required: true,
      editor: lexicalEditor(),
    },
  ],
}