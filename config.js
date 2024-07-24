const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = ["Terry"];
global.OwnerNumber = ["447482644580"];
global.ownertag = [""]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"gPBAB9sU6IujJYQlS37+szYgAAapz2wrGS8leCNmf3U="},"public":{"type":"Buffer","data":"ZUHnNvx0Jbw8VnmWAgkwUIz255gRA+0z7PNfZNdQuBk="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"qLcb4e0YjfEtfptI8pgCozTkBAyU1aVAFn63dSff4F0="},"public":{"type":"Buffer","data":"0sKCZSm/Mie6uPFVuPP6To5qRJoTPNxr3tPoC8azsyo="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"kPUyKAd6Rs8VB1tvl5cWfR1upBlHgZPfp6P/dWDySkU="},"public":{"type":"Buffer","data":"cJXe6Fqy0JpcNu0//8MM76G1rHZMwCrkODHnX08Lky0="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"qAOGFsdJsNO85IScx5LzIVAR6L/mtRE1DwI+weyhcmI="},"public":{"type":"Buffer","data":"UNAT29yjrGHrTeF1kbXYAxQfiZ6eN3+fB+YU8rpEIms="}},"signature":{"type":"Buffer","data":"ra45PwZ3guLmZBFZdQYaVZF33daHCfY4yN0DBxEQb/rU+a+AwqO7ralB7BG/lLpdgkqG3wUFZaqDoHKdxvbrjA=="},"keyId":1},"registrationId":11,"advSecretKey":"HSN6PnHsngehH4ULuaj+Ak+5alWla1cvDCZCYpfkp20=","processedHistoryMessages":[{"key":{"remoteJid":"447447859294@s.whatsapp.net","fromMe":true,"id":"3AC6E086CA08A085C77D"},"messageTimestamp":1721802226},{"key":{"remoteJid":"447447859294@s.whatsapp.net","fromMe":true,"id":"3A0D4C3F8B91BD421A47"},"messageTimestamp":1721802229}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"igFl5WKmQAiJzxa7UkB5sg","phoneId":"695cbba5-24fc-4cd6-ba78-b20d59cd4757","identityId":{"type":"Buffer","data":"Y0It2Ho5LzjimVjRdotI5NbeBzA="},"registered":true,"backupToken":{"type":"Buffer","data":"Jdyc/v+GCyGXD9GSdR5OaV7I1i4="},"registration":{},"pairingCode":"S1RQ45YD","me":{"id":"447447859294:9@s.whatsapp.net","name":"lol"},"account":{"details":"CNmR/T0Q5LuCtQYYAiAAKAA=","accountSignatureKey":"qXAdadK+LpVWiFGiTHfXPkRU1BhQ5Vr2asyW70HKzko=","accountSignature":"h/XdLrB2iP9MczGfThbPT5AoJmj4wxX9xjXLNjBmerG7pmkPLNZD7UpiEvDFfiCeIbR03FDjpTf4rJqVfYmvhA==","deviceSignature":"HOAR6++E+SBiwG1edoPbg99kTh56eUQwuMBJSkiI/mIw1xMM2+yaqGugh3N/Igpvu5NWtX1O8+rGEbtcbhrPhg=="},"signalIdentities":[{"identifier":{"name":"447447859294:9@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BalwHWnSvi6VVohRokx31z5EVNQYUOVa9mrMlu9Bys5K"}}],"platform":"smbi","lastAccountSyncTimestamp":1721802225,"myAppStateKeyId":"AAAAANbt"}`
global.prefa = ["."]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
