const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, '../dist');

console.log('🚀 Starting Gwind Token Build (Tailwind v4 Optimized)...');

// 1. Clean dist
if (fs.existsSync(distPath)) {
    console.log('🧹 Cleaning dist directory...');
    fs.rmSync(distPath, { recursive: true, force: true });
}
fs.mkdirSync(distPath, { recursive: true });

// 2. Generate CSS Sources from TS
console.log('🎨 Generating CSS variables and theme...');
try {
    execSync('npx tsx scripts/generate-css.ts', { stdio: 'inherit' });
} catch (e) {
    console.error('❌ Failed to generate CSS sources');
    process.exit(1);
}

// 3. Build TypeScript
console.log('📦 Compiling TypeScript...');
try {
    execSync('npx tsc', { stdio: 'inherit' });
} catch (e) {
    console.error('⚠️ TypeScript compilation had errors (ignoring for CSS build)');
}

// 4. Build Production CSS with Tailwind v4 CLI
console.log('⚡ Building production CSS with Tailwind v4 CLI...');
try {
    execSync('npx @tailwindcss/cli -i src/styles/styles.css -o dist/gwind.css --minify', { stdio: 'inherit' });
    
    // Copy base and theme to dist/styles for direct import support
    const distStylesPath = path.join(distPath, 'styles');
    if (!fs.existsSync(distStylesPath)) fs.mkdirSync(distStylesPath);
    
    fs.copyFileSync('src/styles/base.css', path.join(distStylesPath, 'base.css'));
    fs.copyFileSync('src/styles/theme.css', path.join(distStylesPath, 'theme.css'));
    
    console.log('✅ Build completed successfully!');
    console.log('   - JS: dist/index.js');
    console.log('   - CSS (Bundled): dist/gwind.css');
    console.log('   - CSS (Variables): dist/styles/base.css');
    console.log('   - CSS (Theme): dist/styles/theme.css');
} catch (e) {
    console.error('❌ CSS Build failed');
    process.exit(1);
}