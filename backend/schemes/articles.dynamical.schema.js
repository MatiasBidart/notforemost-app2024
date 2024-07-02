const mongoose = require('mongoose');

const DynamicDataSchema = 
new mongoose.Schema(
    {}, 
    { strict: false }, 
    {collection: 'dynamicalarticles'}
);

module.exports = mongoose.model('DynamicData', DynamicDataSchema);
