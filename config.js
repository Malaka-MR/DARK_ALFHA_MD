const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
MONGODB: process.env.MONGODB|| "mongodb://mongo:iyfnhSmIYxBqwwsYJZrynDqqmoqrlyQj@junction.proxy.rlwy.net:39503",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/f1HSsCt/20241013-212427.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello, I am YourName i am alive now!",
AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
AUTO_BIO:"true",
AUTO_VOICE:"true"
};
