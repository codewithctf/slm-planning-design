import { CollectionConfig } from 'payload';

export const ContactMessage: CollectionConfig = {
  slug: 'contact-messages',
  auth: false,
  admin: {
    useAsTitle: 'subject',
    defaultColumns: ['full_name', 'email', 'subject', 'created_at'],
  },
  fields: [
    { name: 'full_name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'subject', type: 'text', required: true },
    { name: 'message', type: 'textarea', required: true },
    { name: 'created_at', type: 'date', admin: { readOnly: true }, defaultValue: () => new Date() },
  ],
};
