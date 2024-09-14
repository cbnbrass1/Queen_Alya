//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2347040387034";
global.sudo = process.env.SUDO || "2347040387034";
global.owner = process.env.OWNER_NUMBER || "2347040387034";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkdSQmpjL2diRHQyTEZxMlBrdWEzWlgxd3hDYUxLRWxpUkpnZ3Z5K01sTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2VwTW9YYUE3MExrWnBnQ0JobHZtSURRYUZCUDhCNHFybjVjWDFhYTQyRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTjdHTE16TFdwQVo2K3YwdU53V2RKU2FwZXYzOFVyT0JkNStPdHRxM1h3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoVUFNNDFMZlkzWWJ1U1JHMnFuYnNsWFI4Yyt6dittcVNQQm1OdWZ2cEd3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllGZ1ZOMFhRTnJLTmVUY2Y1Qk9tWUxtWmhSMSs4aEc3NDh3L0p3YjU2SEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlrQXRKdG9zQWoyOU9tbzg4cUIvZnA1ekNNNGFWM0MzOFBPRkZnQWNOeG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0l3TTI3WURCUkM3WElrZ2RKaGRjRDh0NHpOWjJjdWhOcmJrZFJjQ0Ftdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkFHMnlxS1VlbVhxZ01qSE53RmFoYXdiWmhTKzFCNmlJb0tJWDBuc1kzST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVUYTZIaHFLOFpyTUdSTTJCcTl2SXdZd1F3Z0oxeTRsZ2JNSldKMjZpYTdJN1drekhweVZGRWdZMmVaYUFJd2gwbllMZEFxSldhdjRWSWNtTllOeERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5IjoiWVQwSG0zVmVNTHVqY21pL21nUThtQzRPNU45NWx4RWhHYUR3czVVclR2WT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiR1kyOXBtNGpRRHFuZ2FTelRGMGVQQSIsInBob25lSWQiOiI3MWY5YWEyMS0wYzcyLTQ5YmMtYmIwMy0xMzUwMTFjYzljYjMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSkRudWJXWTQrMnJYZzY3QUg5bFZrcGdYVUg0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJ0VTlKbys2ZnNvdFhLVnZtTVRRMVl2SnpnTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI0RVJHRkRKTSIsIm1lIjp7ImlkIjoiMjM0NzA0MDM4NzAzNDo5N0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXpKelAwR0VLdnZsYmNHR0JjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR1BFNjQ5WG1COHNiUHdRSXJMSVdRRm1ZcjVNOXFhVm5tcUtYaTZLUk0wND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZFpSbzZjdEg4dUVBcURuSnZaUmRlclc3bGRPZEJ3VWhKV0daUVNkMSs0TWttTEZqbFUvcWt4bzhacTk5NFpGeHVsZWN5aEM5b25SOXVTQ3k1V2dxREE9PSIsImRldmljZVNpZ25hdHVyZSI6Ii9hZVphQVRKdTEzalZma0JJNisyclRxZFZwSmxyTC8zZnp0VlJkRTdmTjQ5bDJrUVc1a1Nya3BPcHM4WGhmREdXaUM1MHZqSVdkRU1Kd0ZlQlYxakFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA0MDM4NzAzNDo5N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSanhPdVBWNWdmTEd6OEVDS3l5RmtCWm1LK1RQYW1sWjVxaWw0dWlrVE5PIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2MzE0NDI0fQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`CBN`",
  author: process.env.PACK_AUTHER || "CBN",
  packname: process.env.PACK_NAME || "CBN BOT",
  botname: process.env.BOT_NAME || "CBN BOT",
  ownername: process.env.OWNER_NAME || "CBN",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
