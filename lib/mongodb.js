const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://8030.us.kg/file/zOm4HoO6YnQR.jpg' },
    { key: 'ALIVE_MSG', value: 'Hello , I am alive now!!🇱🇰' },
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'AUTO_READ_CMD', value: 'true' },
    { key: 'AUTO_TYPING', value: 'false' },
    { key: 'AUTO_BIO', value: 'false' },
    { key: 'AUTO_VOICE', value: 'false' },
    { key: 'MODE', value: 'public' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
