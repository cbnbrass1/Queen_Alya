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
global.devs = "2347040387034";
global.sudo = process.env.SUDO || "2347040387034";
global.owner = process.env.OWNER_NUMBER || "2347040387034";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0pOWWNsSWFweDR6WHNmYm1URjlIa1UvUHNYZVlDYjlSTzdPVjZkNmttND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDhZUGtJY3JySjJpajdZNXJ0UlBJSk5nNklvQkF6UlM2dlRoRERGbWhTbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SmVMcTJGb09uMkRFdDRNMVU5RXBobzhubEM4dnVubVFKeGxTR3hobUhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFeUhuMXM5eUNGZWpnSXJrWEdWVDdsOFB3K0FMYWI4VW9Ib2RicGtBa1RjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNMRVVPdUFoMXdOT2k3V2Y5MDNqZFBOazNvNDNBcHF0YW9zd1QzL0Y1MjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZ3ZzFKQVRJMDlOTFdmMWg1S3REYTUxM1Z2a2NTdkxxMWRSL2R6WVh1aFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ05rbHdlUGtLb0NyclJaOXhTSHRUZHBJVS9lcnhkdFphOGFaZWtOOVFVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianZOQjBjeTVVQUxHUDJiOURFbDZHcjlyOUtyQjNDSjhQMEo3dmpjOWVUWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlveVRZRXpaM1VLd0FnWEtxSTRtYzBkWHN1bnRPOTlIc1pzaFFpOGNBZDd3WC9McGEvQjRmYkNPd1RoWFY0d1VSTkJKRjFVSzVUYVVHZkgwWnpCWUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTYsImFkdlNlY3JldEtleSI6IkRaMmF1ZnJMcFVxMEdWUUFVMW5BTFZVRktJaGdUZWxIaGVkRkpBVEE5VEE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IklIM3ZLQjlPU28ya24zdG53ZHVMd3ciLCJwaG9uZUlkIjoiYWZlYzE2ZjItMzU5ZC00NzI2LWE2NjYtMDgyOTdkMzdmZTNhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImV0aXd1NzhJbHpqYWROODJ4eFlFSHJsdGZ0MD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY1ZmRS96T09FUG52YmF3MUhzSE0wTDZVeE09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWFdQRDlBWEYiLCJtZSI6eyJpZCI6IjIzNDcwNDAzODcwMzQ6ODhAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0l6SnpQMEdFS0RBbzdZR0dBMGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdQRTY0OVhtQjhzYlB3UUlyTElXUUZtWXI1TTlxYVZubXFLWGk2S1JNMDQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkYrL25jSVllcm9zYjlzNWxaUjBxYm5sajJ5UEN4aFNuK091dU52TUh3YnFJSXczbGZZc0hiOHgySHVMWDRTanNnMDJBYWtzMnp6NDFjUHNxcTc5UkFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1MjcwWlBNbklJN25RTkd6ajEwYjZqK1pjSWNMZUNYeWtNM0hIcFppdmZENjRBYkJURjMzQW5KTm1hSlZpSnhqY2lMZVdLc01mSEJxV0dkbkxScTlCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDAzODcwMzQ6ODhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmp4T3VQVjVnZkxHejhFQ0t5eUZrQlptSytUUGFtbFo1cWlsNHVpa1ROTyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDQ0MDYyMX0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`CBN`",
  author: process.env.PACK_AUTHER || "CBN",
  packname: process.env.PACK_NAME || "CBN",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
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
