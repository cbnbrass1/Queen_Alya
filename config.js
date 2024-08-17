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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348071085887";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348071085887";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU04bERsbndndkZZcURoTjFGc1RlZ0JaQlY3Ymd3U2NCSGtXMEYwbFFIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSlJ3cGc2MjRPYzR1SEo3TTRRTjUvOWtHak1VWFVFZUZOcE9QV1EvdGFVST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRUxXWElaRlZ5RWtDK2prTGhYekRaRHVmeTFjVGd4aGZVTVpLeDMrRTJjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMa0VxYmNNOHdpUlp5SUFMNU9TdVdJc211UGpxUjAyY0JzVjZCZTlKNlJnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktQNkswWVlVOTZ4cnpHU0dWZ0pJdGFLWjcvTHQwbFhjdHRlY1lzZE1lVXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhabVU4WE1xRFhKV3pua1RvYVV6NXJsRmt3SEJFUm5JeUxDWWs4UWUxVkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE1kaE5Jai91WC9pYjJJSVFCcUhFdTkxZGg5TXVEK2tNNEowUDE1Q1cyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibC9KaXM5WFRXN0tVcXhuVHpMMHAyMktUa0xhZldqQjVtcFdBTk9LenZDTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitBRDA3eW9LcHZvZ2szMzhyMjAzc2h4S0gvZzBMclRoUzhPNHRSNWJ4SmN6QjliNmFnSnczd2FSTWRHaElOYlpUdSttN2VtaHVYMUJlZG1WRmtDZ0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ2LCJhZHZTZWNyZXRLZXkiOiJLOS9FdlhJUzJKMisxcXVjRjRuYi8rdzBLSFNpcjQ4UktsZTFvTW4wWDFRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwNzEwODU4ODdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQkNDRkI1Njk1QTE3Njc0M0FGOEE5N0ZGQTU5NzNFMDMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzg4MjQxOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODA3MTA4NTg4N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyNjg1RDgxMTk0QTRBOENDMkU5NzYwNjU0QzczRjgyRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzODgyNDE5fV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqQklSeDBPMVN0TzFXTE5wUHdaQTBRIiwicGhvbmVJZCI6IjY1ZWExNDk2LTk4ZDctNDliYi1iZTQ4LWY0YWE5M2RkMTA4MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1d0NHVkc2YUk0YnE3anViUVZNeFpFOGJuRWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSEJuQ2xQMDc0MUNpN2drV1JDSWtaYUFlb2Y4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlY1TFFDOUVQIiwibWUiOnsiaWQiOiIyMzQ4MDcxMDg1ODg3OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQnJhc3MifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t2SDVzZ0hFS1MzZ2JZR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IktmalB0Z1NiQ0xiaDdTaE1UVkJDWFNpZWJ4amdsd3hPVTAyZ2Ixamc4aTg9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im02WHR5cDJ4OUVQaU9kUVhqL2tXbGxmeHlJWTUrUWRIWHhWVGk4a1NIM05FZWErMTRETy9iNHlmMWFMZ1Y4aDRyZ25EUWNhNVJnOElkbFFkbVg2akNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJZHdQV3lvTlVPTFhuWjc4OGdtb2Izb3Z6M2ZOUjhRckttN3orYzVuRVIwSDJ1Sm9GMTJ1dStRcmlMdGFYRk16UDlPdGJtVDhQVHpjc1FmYmE2eWxEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwNzEwODU4ODc6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTbjR6N1lFbXdpMjRlMG9URTFRUWwwb25tOFk0SmNNVGxOTm9HOVk0UEl2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzODgyNDE3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUw0NiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
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
