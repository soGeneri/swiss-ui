const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'src', 'styles', 'swiss.css');
const dest = path.join(__dirname, '..', 'dist', 'swiss.css');

fs.copyFileSync(src, dest);
console.log('Copied swiss.css to dist/');
