import { CollectionConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

export const Blog: CollectionConfig = {
  slug: 'blogs',
  auth: false,
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'publishedAt'],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'author', type: 'relationship', relationTo: 'users', required: true },
    { name: 'mainImage', type: 'upload', relationTo: 'media' },
    { name: 'categories', type: 'array', fields: [{ name: 'category', type: 'text' }] },
    { name: 'tags', type: 'array', fields: [{ name: 'tag', type: 'text' }] },
    { name: 'publishedAt', type: 'date' },
    { name: 'body', type: 'richText', required: true, editor: lexicalEditor() },
  ],
};
