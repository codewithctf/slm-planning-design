// Payload config for SLM Planning & Design
import { buildConfig } from 'payload';
import { Blog } from './collections/Blog';
import { PortfolioProject } from './collections/PortfolioProject';
import { ContactMessage } from './collections/ContactMessage';
import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { QuoteRequest } from './collections/QuoteRequest';
import path from 'path';
import dotenv from 'dotenv';
// @ts-ignore
import postgresAdapter from '@payloadcms/db-postgres';
dotenv.config({ path: path.resolve(__dirname, '../.env') });

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' | SLM Planning & Design',
    },
    components: {},
    // Remove css property, not supported in admin config
  },
  collections: [Blog, PortfolioProject, ContactMessage, QuoteRequest, Users, Media],
  globals: [],
  typescript: { outputFile: path.resolve(__dirname, 'payload-types.ts') },
  cors: [process.env.FRONTEND_URL || 'http://localhost:5173'],
  csrf: [process.env.FRONTEND_URL || 'http://localhost:5173'],
  db: {
    // @ts-ignore
    adapter: postgresAdapter,
    url: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production',
  },
  secret: process.env.PAYLOAD_SECRET || 'changeme',
});
