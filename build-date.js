const fs = require('fs');
const path = require('path');

const buildDate = new Date().toISOString();

const data = {
  buildDate: buildDate,
};

fs.writeFileSync(path.join(__dirname, 'src', 'build-date.json'), JSON.stringify(data));
