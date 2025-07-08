// This script removes the Sanity studio and dependencies from your project
// Run this after migrating your data to Payload

const fs = require('fs');
const path = require('path');

const studioPath = path.resolve(__dirname, '../studio-slm');

if (fs.existsSync(studioPath)) {
  fs.rmSync(studioPath, { recursive: true, force: true });
  console.log('Sanity studio-slm folder deleted.');
} else {
  console.log('Sanity studio-slm folder not found.');
}

// Remove Sanity dependencies from root package.json
const pkgPath = path.resolve(__dirname, '../package.json');
if (fs.existsSync(pkgPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  let changed = false;
  ['@sanity/vision', 'sanity', 'sanity-plugin', 'sanity-plugin-vision'].forEach(dep => {
    if (pkg.dependencies && pkg.dependencies[dep]) { delete pkg.dependencies[dep]; changed = true; }
    if (pkg.devDependencies && pkg.devDependencies[dep]) { delete pkg.devDependencies[dep]; changed = true; }
  });
  if (changed) {
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
    console.log('Sanity dependencies removed from package.json.');
  } else {
    console.log('No Sanity dependencies found in package.json.');
  }
}
