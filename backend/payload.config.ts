// Payload config for SLM Planning & Design
import { buildConfig } from 'payload';
import { Blog } from './collections/Blog.js';
import { PortfolioProject } from './collections/PortfolioProject.js';
import { ContactMessage } from './collections/ContactMessage.js';
import { Users } from './collections/Users.js';
import { Media } from './collections/Media.js';
import { QuoteRequest } from './collections/QuoteRequest.js';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
// @ts-ignore
import { postgresAdapter } from '@payloadcms/db-postgres';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === 'production',
    },
  }),
  secret: process.env.PAYLOAD_SECRET || 'changeme',
});
