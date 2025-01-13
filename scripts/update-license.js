const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');


const licenseInputPath = path.join(__dirname, '../license-template');
const licenseOutputPath = path.join(__dirname, '../LICENSE');

if (!fs.existsSync(licenseInputPath)) {
    console.error('Error: license-template file not found at', licenseInputPath);
    process.exit(1);
}

if (!packageJson.author) {
    console.error('Error: package.json author field is missing.');
    process.exit(1);
}

fs.readFile(licenseInputPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading LICENSE file:', err);
        return;
    }

    if (!data.includes('{COMP}')) {
        console.warn('Warning: Placeholder {COMP} not found in license-template.');
    }

    const updatedLicense = data.replace(/{COMP}/g, packageJson.author);

    fs.writeFile(licenseOutputPath, updatedLicense, 'utf8', (err) => {
        if (err) {
            console.error('Error writing LICENSE file:', err);
            return;
        }
        console.log('LICENSE file updated successfully!');
    });
});
