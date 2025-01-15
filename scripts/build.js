const fs = require('fs');
const path = require('path');
const {execSync} = require('child_process');


const commands = {
    'build:license': 'node scripts/update-license.js',
    'build:ts': 'npx tsc',
    'build:css': 'npx tailwindcss -i src/styles/styles.css -o ./dist/styles/base.css',
};
const args = process.argv.slice(2);
const allCommand = args.length === 0 || args.includes('build')

const removeDistDirectory = () => {
    if (!allCommand) {
        return
    }
    const distPath = path.join(__dirname, '../dist');
    if (fs.existsSync(distPath)) {
        console.log('Removing existing dist directory...');
        fs.rmSync(distPath, {recursive: true, force: true});
    }
};

const runCommand = command => {
    console.log(`Running: ${command}`);
    try {
        execSync(command, {stdio: 'inherit'});
    } catch (error) {
        console.error(`Error executing command: ${command}`);
        process.exit(1);
    }
};

const commandsToRun = allCommand ? Object.values(commands) : args.map(arg => commands[arg]).filter(Boolean);

removeDistDirectory();

commandsToRun.forEach(runCommand);