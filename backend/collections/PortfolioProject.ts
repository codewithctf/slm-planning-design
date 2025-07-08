import { CollectionConfig } from 'payload';

export const PortfolioProject: CollectionConfig = {
  slug: 'portfolio-projects',
  auth: false,
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'client', 'year', 'status'],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'mainImage', type: 'upload', relationTo: 'media' },
    { name: 'categories', type: 'array', fields: [{ name: 'category', type: 'text' }] },
    { name: 'year', type: 'text', required: true },
    { name: 'client', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },
    { name: 'tags', type: 'array', fields: [{ name: 'tag', type: 'text' }] },
    { name: 'location', type: 'text', required: true },
    { name: 'status', type: 'select', options: ['completed', 'ongoing'], required: true, defaultValue: 'completed' },
  ],
};
