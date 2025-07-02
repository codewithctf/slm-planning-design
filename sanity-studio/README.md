# SLM Sanity Studio

This is the Sanity Studio for SLM. All studio code and configuration has been moved here from the old `npm run dev` folder.

## Usage

- `npm install` — Install dependencies (run this first after cloning or moving the folder)
- `npm run dev` — Start the Sanity Studio locally
- `npm run build` — Build the Studio for production
- `npm run deploy` — Deploy the Studio

## Structure
- `deskStructure.ts`/`deskStructure.js`: Custom desk structure for clear Blog and Project distinction
- `schemaTypes/`: All schema definitions
- `sanity.config.ts`: Main Sanity Studio config

## Migration Note
If you previously used the `npm run dev` folder, you can now delete it after verifying this new setup works.

## Troubleshooting
- If you see errors about missing modules or types, run `npm install` in this folder.
- Make sure your editor is open in the `sanity-studio` folder, not the old one.
- For deployment, point your build system to `sanity-studio`.
