const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/f1HSsCt/20241013-212427.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello, I am YourName i am alive now!",
ALIVE_IMG: process.env.ALIVE_IMG || "https://8030.us.kg/file/zOm4HoO6YnQR.jpg",
AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
AUTO_BIO:"true",
AUTO_VOICE:"true"
};
