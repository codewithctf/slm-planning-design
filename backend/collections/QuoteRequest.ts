import { CollectionConfig } from 'payload';

export const QuoteRequest: CollectionConfig = {
  slug: 'quote-requests',
  auth: false,
  admin: {
    useAsTitle: 'full_name',
    defaultColumns: ['full_name', 'email', 'project_type', 'created_at'],
  },
  fields: [
    { name: 'full_name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone_number', type: 'text' },
    { name: 'organization', type: 'text' },
    { name: 'project_type', type: 'text', required: true },
    { name: 'project_description', type: 'textarea', required: true },
    { name: 'timeline', type: 'text' },
    { name: 'budget_range', type: 'text' },
    { name: 'created_at', type: 'date', admin: { readOnly: true }, defaultValue: () => new Date() },
  ],
};
