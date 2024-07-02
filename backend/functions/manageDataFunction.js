const fs = require('fs');
const jsonFilePath = '../data.json';

const manageDataFunction = async (ModelName) => {
  try {
    
    const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
    const data = JSON.parse(jsonData);

    await ModelName.insertMany(data);
    
    console.log('Data was successfully imported to MongoDB');
  } catch (error) {
    console.error('An error ocurred while importing data.json:', error.message);
  }
};

module.exports = manageDataFunction

