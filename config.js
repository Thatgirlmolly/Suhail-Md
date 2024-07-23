const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""SUHAIL_14_41_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA4MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyOCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDM0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5LFxuICAgICAgICA1OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDgzLFxuICAgICAgICAxODksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDQzLFxuICAgICAgICA4MixcbiAgICAgICAgMTE0LFxuICAgICAgICA4MyxcbiAgICAgICAgOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM3LFxuICAgICAgICAzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2MCxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE5LFxuICAgICAgICA2NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDg0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4LFxuICAgICAgICA5MyxcbiAgICAgICAgNjksXG4gICAgICAgIDg2LFxuICAgICAgICA4NixcbiAgICAgICAgMTg3LFxuICAgICAgICAzOCxcbiAgICAgICAgOTksXG4gICAgICAgIDQwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDU4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjksXG4gICAgICAgIDMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDM2LFxuICAgICAgICAwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgzLFxuICAgICAgICA3MixcbiAgICAgICAgNjksXG4gICAgICAgIDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgxLFxuICAgICAgICAzLFxuICAgICAgICA2OCxcbiAgICAgICAgNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NCxcbiAgICAgICAgNzksXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA5NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMzksXG4gICAgICAgIDkwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDcxLFxuICAgICAgICA0NCxcbiAgICAgICAgODksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWGNBRlZpOXUyWEhkNzdpMk1WVHNHajAzOHpCTDByRzlMODFpbS8vZWM2QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNTNwZ0lhbTdUby04Z3VRRW9SSlBwd1wiLFxuICBcInBob25lSWRcIjogXCIxZTI0OTVlYi0wZjAwLTQ0YzYtYjMyMy1lZDM4MTM2MWNkMWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTAsXG4gICAgICAyOCxcbiAgICAgIDI0NCxcbiAgICAgIDE3MCxcbiAgICAgIDIxNixcbiAgICAgIDM5LFxuICAgICAgMTYyLFxuICAgICAgNjQsXG4gICAgICAyMDEsXG4gICAgICAyNDMsXG4gICAgICAyMTUsXG4gICAgICAxNzIsXG4gICAgICA0MixcbiAgICAgIDk0LFxuICAgICAgMTcwLFxuICAgICAgNDksXG4gICAgICAyMDAsXG4gICAgICAxMDAsXG4gICAgICAzMixcbiAgICAgIDIwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzcsXG4gICAgICAzMixcbiAgICAgIDgxLFxuICAgICAgMTQ5LFxuICAgICAgMTc5LFxuICAgICAgMjM5LFxuICAgICAgODIsXG4gICAgICAxNjUsXG4gICAgICAzMCxcbiAgICAgIDE2NSxcbiAgICAgIDExMSxcbiAgICAgIDE2NixcbiAgICAgIDE0LFxuICAgICAgMTQsXG4gICAgICAyMzQsXG4gICAgICAyMzgsXG4gICAgICAyMzcsXG4gICAgICAxMzMsXG4gICAgICAyOSxcbiAgICAgIDE5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKRUdDN1JHN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0NDM4NjEwNzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDk2MTExMTc2NzA2Mzc6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMUGM1TGNIRUlLQy83UUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlCY3l6RHgvQWw3LzF3N1dHMlBXNjlNUHYvMit0T0M3NmFPdVFRRUhDVTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZlRRRjdwZ2hPTm9MWFB6SlIrcmhZbXZyZFhEV3pCY2pBSDNPN1h3cC9KVG9MeVZMbytiNThGWWp2bVVLMHNmWkJKL01KcXRJanBJL05RbFJWUGNuQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibmtBbjJ4Lzh0RHJEUjI2RkhMVjZsME9VRTM5bzhOM1d1RVpINXhzZ1hPRVg4V1dlOUdmQlpJU21YZmlJcElzWktDTDllQUN4aG5zOXc0ZExjNkZRamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0NDM4NjEwNzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNzQ1NjcwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ1ZqXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDVmouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDQ2tvM0UrTGtUYTE1RXlzZEZjZndvK2FmdDExaUxwZ0tHK1lUWERJRmJNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5OTYwNDE3NzksXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzIxNzQ1NjMyNjQ0XCJ9Igp9  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
