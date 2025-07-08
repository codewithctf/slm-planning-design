import { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true, // Enable local auth
  // For Google OAuth, configure in payload.config.ts or as per Payload docs
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'firstName', 'lastName'],
  },
  fields: [
    { name: 'firstName', type: 'text', required: true },
    { name: 'lastName', type: 'text', required: true },
    { name: 'profileImage', type: 'upload', relationTo: 'media' },
  ],
};
// To enable Google OAuth, use the providers config in payload.config.ts, not here.
