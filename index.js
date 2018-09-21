const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(` X-help .`,'https://www.twitch.tv/v5bz');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});

prefix = 'X-';

client.on("message", message => {
 if (message.content === `X-help`) {
  const embed = new Discord.RichEmbed() //by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
      .setColor("RANDOM")//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
      .setDescription(`

 بوت X أوآمر 
X-add-rom ⇏ لأنشآء رومات كتابيه وصوتيه
X-add-rol ⇏ لأنشآء رتب
X-cv ⇏ لإنشاء روم صوتي
X-ct ⇏ لإنشاء روم كتابي
X-dvc ⇏ لحذف الروم صوتي أم كتآبي
X-v2 ⇏ لإنشاء روم صوتي لمدة دقيقتين
X-v4 ⇏ لإنشاء روم صوتي لمدة 4 دقائق 
X-c2 ⇏ لإنشاء روم كتابي لمدة دقيقتين
X-c4 ⇏ لإنشاء روم كتابي لمدة 4 دقائق
X-cr1 ⇏ إنشآء 50 لون مرتب
X-cr2 ⇏ إنشآء 100 لون مرتب
X-cr3 ⇏ إنشاء 130 لون مرتب
X-dr ⇏ لحذف جميع الرتب بشرط رتبة البوت فوق الرتب المراد حذفها
X-dc ⇏ لحذف جميع الرومات الصوتية والكتابيةة
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
X-inv ⇏ لدعوة آلبوت لسيرفرك
X-ping ⇏ لرؤية سرعة تشغيل البوت
X-sug ⇏ لإرسآل أقترآح لمبرمج آلبوت
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
أو من خلال الرابط التالي :
https://discordapp.com/api/oauth2/authorize?client_id=483935942025936896&permissions=8&scope=bot

 `)//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
   message.channel.sendEmbed(embed)//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
    
   }
   }); 
client.on('message', message => {
const prefix = 'X-'	
    if(message.content === prefix + 'cr2') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "1",
                    color: "#050000",
                    permissions: []
     })
           message.guild.createRole({
                  name: "2",
                    color: "#262726",
                    permissions: []
     })
                message.guild.createRole({
                  name: "3",
                    color: "#333433",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "4",
                    color: "#454545",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "5",
                    color: "#565656",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "6",
                    color: "#646464",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "7",
                    color: "#787878",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#8d8c8c",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#9a9a9a",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "9",
                    color: "#afaeae",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "10",
                    color: "#bcbbbb",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "11",
                    color: "#8504fa",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "12",
                    color: "#7607dd",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "13",
                    color: "#6a05c8",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "14",
                    color: "#6006b4",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "15",
                    color: "#5a07a8",
                    permissions: []
     })
                               message.guild.createRole({
                  name: "16",
                    color: "#4c078d",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "17",
                    color: "#43067c",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "18",
                    color: "#360564",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "19",
                    color: "#270349",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "20",
                    color: "#fa04a1",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "21",
                    color: "#ef069b",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "22",
                    color: "#c30781",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "23",
                    color: "#a80871",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "24",
                    color: "#970966",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "25",
                    color: "#7f0956",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "26",
                    color: "#6e094b",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "27",
                    color: "#4e0735",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "28",
                    color: "#f80854",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "29",
                    color: "#db064a",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "30",
                    color: "#ca0745",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "31",
                    color: "#af083d",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "32",
                    color: "#940834",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "33",
                    color: "#7f062c",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "34",
                    color: "#6b0424",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "35",
                    color: "#f8071e",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "36",
                    color: "#d6071b",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "37",
                    color: "#b60516",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "38",
                    color: "#a80515",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "39",
                    color: "#8d0512",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "40",
                    color: "#7f0410",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "41",
                    color: "#6b030d",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "42",
                    color: "#06bcf3",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "43",
                    color: "#099dca",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "44",
                    color: "#098db6",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "45",
                    color: "#057a9e",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "46",
                    color: "#06637f",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "47",
                    color: "#054e64",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "48",
                    color: "#044255",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "49",
                    color: "#02dff8",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "50",
                    color: "#03c5db",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "51",
                    color: "#03b0c3",
                    permissions: []
     })  
     
                                         message.guild.createRole({
                  name: "52",
                    color: "#0798a8",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "53",
                    color: "#077f8d",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "54",
                    color: "#066570",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "55",
                    color: "#025862",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "56",
                    color: "#034850",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "57",
                    color: "#043f45",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "58",
                    color: "#07f6bf",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "59",
                    color: "#08ddac",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "60",
                    color: "#0ac399",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "61",
                    color: "#07a17f",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "62",
                    color: "#06785f",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "63",
                    color: "#05644f",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "64",
                    color: "#055543",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "65",
                    color: "",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "66",
                    color: "#044537",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "67",
                    color: "#043b2f",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "68",
                    color: "#032c23",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "69",
                    color: "#023429",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "70",
                    color: "#801d1d",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "71",
                    color: "#21942d",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "72",
                    color: "#242194",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "73",
                    color: "#219447",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "74",
                    color: "#ff0081",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "75",
                    color: "#d67f41",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "76",
                    color: "#d16110",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "77",
                    color: "#7310d1",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "78",
                    color: "#410777",
                    permissions: []
     })   
                                     message.guild.createRole({
                  name: "79",
                    color: "#ffe200",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "80",
                    color: "#9100ff",
                    permissions: []
     })       
                                     message.guild.createRole({
                  name: "81",
                    color: "#ff0a00",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "82",
                    color: "#0063ff",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "83",
                    color: "#3249ff",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "84",
                    color: "#023429",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "85",
                    color: "#000531",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "86",
                    color: "#5963b6",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "87",
                    color: "#1b34ff",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "88",
                    color: "#393c52",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "89",
                    color: "#6978f0",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "90",
                    color: "#525139",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "91",
                    color: "#504d08",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "92",
                    color: "#faf470",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "93",
                    color: "#95fa70",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "94",
                    color: "#0c08b4",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "95",
                    color: "#9408b4",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "96",
                    color: "#d47fe9",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "97",
                    color: "#e9c07f",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "98",
                    color: "#eb960f",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "99",
                    color: "#a36809",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "100",
                    color: "#47a309",
                    permissions: []
     })     
      
          message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``جاري انشاء 100 لون بنجاح``')});
    }
	});
client.on('message', message => {
const prefix = 'X-'	
    if(message.content === prefix + 'cr1') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "1",
                    color: "#050000",
                    permissions: []
     })
           message.guild.createRole({
                  name: "2",
                    color: "#262726",
                    permissions: []
     })
                message.guild.createRole({
                  name: "3",
                    color: "#333433",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "4",
                    color: "#454545",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "5",
                    color: "#565656",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "6",
                    color: "#646464",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "7",
                    color: "#787878",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#8d8c8c",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#9a9a9a",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "9",
                    color: "#afaeae",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "10",
                    color: "#bcbbbb",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "11",
                    color: "#8504fa",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "12",
                    color: "#7607dd",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "13",
                    color: "#6a05c8",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "14",
                    color: "#6006b4",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "15",
                    color: "#5a07a8",
                    permissions: []
     })
                               message.guild.createRole({
                  name: "16",
                    color: "#4c078d",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "17",
                    color: "#43067c",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "18",
                    color: "#360564",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "19",
                    color: "#270349",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "20",
                    color: "#fa04a1",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "21",
                    color: "#ef069b",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "22",
                    color: "#c30781",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "23",
                    color: "#a80871",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "24",
                    color: "#970966",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "25",
                    color: "#7f0956",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "26",
                    color: "#6e094b",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "27",
                    color: "#4e0735",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "28",
                    color: "#f80854",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "29",
                    color: "#db064a",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "30",
                    color: "#ca0745",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "31",
                    color: "#af083d",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "32",
                    color: "#940834",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "33",
                    color: "#7f062c",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "34",
                    color: "#6b0424",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "35",
                    color: "#f8071e",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "36",
                    color: "#d6071b",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "37",
                    color: "#b60516",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "38",
                    color: "#a80515",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "39",
                    color: "#8d0512",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "40",
                    color: "#7f0410",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "41",
                    color: "#6b030d",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "42",
                    color: "#06bcf3",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "43",
                    color: "#099dca",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "44",
                    color: "#098db6",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "45",
                    color: "#057a9e",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "46",
                    color: "#06637f",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "47",
                    color: "#054e64",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "48",
                    color: "#044255",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "49",
                    color: "#02dff8",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "50",
                    color: "#03c5db",
                    permissions: []
     })
       
          message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``جاري انشاء 50 لون بنجاح``')});
    }
	});
client.on('message', omar => {
if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
omar.guild.channels.forEach(m => {
m.delete();
});// omar jedol / Codes
}// omar jedol / Codes
if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
omar.guild.roles.forEach(m => {
m.delete();
});// omar jedol / Codes
omar.reply("`تم حذف جميع الرتب بنجاح`")
}// omar jedol / Codes
});

client.on('message', message => {
    if (message.content === "X-add-rol") {
     message.reply(':envelope: | تم اضافة الرتب بنجاح');
        client.guilds.forEach(m =>{
 message.guild.createRole({
       name : "👑「President」",
       permissions :   [1],
       color : " #000000"
   })
   message.guild.createRole({
       name : "👑「Co President」",
       permissions :   [1],
       color : " #000000"
   })
   message.guild.createRole({
       name : "♚「MINISTER」",
       permissions :   [1],
       color : " #000000"
   })
   message.guild.createRole({
       name : "♜「LEADER」",
       permissions :   [1],
       color : " #000000"
   })
   message.guild.createRole({
       name : "♜「ADMIN」",
       permissions :   [1],
       color : " #000000"
   })

   message.guild.createRole({
       name : "♜ | BOSS",
       permissions :   [1],
       color : " #000000"
   })
   message.guild.createRole({
       name : "♞ | KING",
       permissions :   [1],
       color : " #000000"
   })
   message.guild.createRole({
       name : "♞ | MONSTER",
       permissions :   [1],
       color : " #000000"
   })
      message.guild.createRole({
       name : "♞ | LORD",
       permissions :   [1],
       color : " #000000"
   })
      message.guild.createRole({
       name : "♥ | QUEEN",
       permissions :   [1],
       color : " #000000"
   })
   message.guild.createRole({
       name : "♟ | LEGEND",
       permissions :   [1],
       color : " #000000"
   })
   message.guild.createRole({
       name : "💎 | DIAMOND",
       permissions :   [1],
       color : " #000000"


})
  message.guild.createRole({
       name : "♝ | SILVER",
       permissions :   [1],
       color : " #000000"

})
message.guild.createRole({
       name : "♝ | BRONZE",
       permissions :   [1],
       color : " #000000"

})
message.guild.createRole({
       name : "♟ | LIONS",
       permissions :   [1],
       color : " #000000"

})
message.guild.createRole({
       name : "🔰| SERVER BOT",
       permissions :   [1],
       color : " #000000"

})
message.guild.createRole({
       name : "🔰|Music BOT",
       permissions :   [1],
       color : " #000000"

})
message.guild.createRole({
       name : "🚬 | VISITORS",
       permissions :   [1],
       color : " #000000"

})

})
}

});


client.on('message', message => {
    if (message.content === "X-add-rom") {
     message.reply(':envelope: | تم اضافة الرومات بنجاح');
   if (!message.member.hasPermission('MANAGE_CHANNELS'))

     
      message.guild.createChannel(`●●log●●`, 'text')
     message.guild.createChannel(`rules🚫`, 'text')
     message.guild.createChannel(`info📑`, 'text')
     message.guild.createChannel(`news📰`, 'text')
     message.guild.createChannel(`warnings🔫`, 'text')
     message.guild.createChannel(`chat💬`, 'text')
     message.guild.createChannel(`bot📡`, 'text')
     message.guild.createChannel(`bo7📜`, 'text')
     message.guild.createChannel(`pic🔮`, 'text')
     message.guild.createChannel(`skin🎃`, 'text')
     message.guild.createChannel(`cut-tweet💡`, 'text')

 message.guild.createChannel(`▓▬▬▬event▬▬▬▓`, 'voice')
      message.guild.createChannel(`rules-of-the-event📣`, 'voice')
     message.guild.createChannel(`events📢🎈`, 'voice')
     message.guild.createChannel(`➥🎈Event🏅`, 'voice')


     message.guild.createChannel(`▓▬▬▬♚▬▬▬▓`, 'voice')
     message.guild.createChannel(`♧ Ξ〖 🎤  سواليف 📣  〗`, 'voice')
     message.guild.createChannel(`♢ Ξ〖 🎤 مواهب 🎵  〗`, 'voice')
     message.guild.createChannel(`❋ Ξ〖 🎈فعاليات 🏅 〗`, 'voice')
     message.guild.createChannel(`❋ Ξ〖  🕋 القرآن الكريم  〗`, 'voice')
message.guild.createChannel(`▓▬▬▬youtube▬▬▬▓`, 'voice')
     message.guild.createChannel(`youtube🔥🎬`, 'voice')
     message.guild.createChannel(`➥ R E C .🎥`, 'voice')
message.guild.createChannel(`▓▬▬▬game▬▬▬▓`, 'voice')
     message.guild.createChannel(`➥-dual-agar-🎮`, 'voice')
     message.guild.createChannel(`➥ Fortnite 🎮`, 'voice')
     message.guild.createChannel(`➥ Gota.io 🎮`, 'voice')
     message.guild.createChannel(`➥-gaverio-🎮`, 'voice')
message.guild.createChannel(`▓▬▬▬music▬▬▬▓`, 'voice')
      message.guild.createChannel(`➥ Music 1 🎧🎼`, 'voice')
      message.guild.createChannel(`➥Music 2 🎧🎼`, 'voice')
     message.guild.createChannel(`➥Music 3 🎧🎼`, 'voice')
     message.guild.createChannel(`➥Music 4 🎧🎼`, 'voice')
     message.guild.createChannel(`➥Music 5 🎧🎼`, 'voice')
message.guild.createChannel(`▓▬▬▬ Private▬▬▬▓`, 'voice')
     message.guild.createChannel(`❖ Private 1 🔒`, 'voice')
     message.guild.createChannel(`❖ Private 2 🔒`, 'voice')
     message.guild.createChannel(`❖ Private 3 🔒`, 'voice')
     message.guild.createChannel(`❖ Private 4 🔒`, 'voice')
    message.guild.createChannel(`❖ Private 5🔒`, 'voice')
message.guild.createChannel(`▓▬▬▬ A F K▬▬▬▓`, 'voice')
    message.guild.createChannel(`➥ A F K  Zzz 😴`, 'voice')


}
});
var prefix= "X-";
client.on("message", message => {
    if(message.content.startsWith(prefix + 'v2')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
    
      if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`ADMINISTRATOR` للأسف هذه الخاصية تحتاج الى ').then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
      message.channel.send(`:ballot_box_with_check: TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الصوتي`), 120000))  // 120000 دقيقتان
    }
    });
var prefix= "X-";
client.on("message", message => {
    if(message.content.startsWith(prefix + 'v4')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
    
      if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`ADMINISTRATOR` للأسف هذه الخاصية تحتاج الى ').then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 240000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
      message.channel.send(`:ballot_box_with_check: TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الصوتي`), 120000))  // 120000 دقيقتان
    }
    });
var prefix= "X-";
client.on("message", message => {
    if(message.content.startsWith(prefix + 'c4')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
    
      if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`ADMINISTRATOR` للأسف هذه الخاصية تحتاج الى ').then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'text').then(c => setTimeout(() => c.delete(), 240000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
      message.channel.send(`:ballot_box_with_check: Temporarytext : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الكتابي`), 120000))  // 120000 دقيقتان
    }
    });
var prefix= "X-";
client.on("message", message => {
    if(message.content.startsWith(prefix + 'c2')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
    
      if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`ADMINISTRATOR` للأسف هذه الخاصية تحتاج الى ').then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'text').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
      message.channel.send(`:ballot_box_with_check: Temporarytext : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الكتابي`), 120000))  // 120000 دقيقتان
    }
    });
client.on("message", (message) => {
if (message.content.startsWith("X-ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});


client.on("message", (message) => {
if (message.content.startsWith("X-cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});


client.on("message", (message) => {
    if (message.content.startsWith('X-dvc')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});
client.on('message', message => {
const prefix = 'X-'	
    if(message.content === prefix + 'cr3') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "1",
                    color: "#050000",
                    permissions: []
     })
           message.guild.createRole({
                  name: "2",
                    color: "#262726",
                    permissions: []
     })
                message.guild.createRole({
                  name: "3",
                    color: "#333433",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "4",
                    color: "#454545",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "5",
                    color: "#565656",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "6",
                    color: "#646464",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "7",
                    color: "#787878",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#8d8c8c",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#9a9a9a",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "9",
                    color: "#afaeae",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "10",
                    color: "#bcbbbb",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "11",
                    color: "#8504fa",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "12",
                    color: "#7607dd",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "13",
                    color: "#6a05c8",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "14",
                    color: "#6006b4",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "15",
                    color: "#5a07a8",
                    permissions: []
     })
                               message.guild.createRole({
                  name: "16",
                    color: "#4c078d",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "17",
                    color: "#43067c",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "18",
                    color: "#360564",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "19",
                    color: "#270349",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "20",
                    color: "#fa04a1",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "21",
                    color: "#ef069b",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "22",
                    color: "#c30781",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "23",
                    color: "#a80871",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "24",
                    color: "#970966",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "25",
                    color: "#7f0956",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "26",
                    color: "#6e094b",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "27",
                    color: "#4e0735",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "28",
                    color: "#f80854",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "29",
                    color: "#db064a",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "30",
                    color: "#ca0745",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "31",
                    color: "#af083d",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "32",
                    color: "#940834",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "33",
                    color: "#7f062c",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "34",
                    color: "#6b0424",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "35",
                    color: "#f8071e",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "36",
                    color: "#d6071b",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "37",
                    color: "#b60516",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "38",
                    color: "#a80515",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "39",
                    color: "#8d0512",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "40",
                    color: "#7f0410",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "41",
                    color: "#6b030d",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "42",
                    color: "#06bcf3",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "43",
                    color: "#099dca",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "44",
                    color: "#098db6",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "45",
                    color: "#057a9e",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "46",
                    color: "#06637f",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "47",
                    color: "#054e64",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "48",
                    color: "#044255",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "49",
                    color: "#02dff8",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "50",
                    color: "#03c5db",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "51",
                    color: "#03b0c3",
                    permissions: []
     })  
     
                                         message.guild.createRole({
                  name: "52",
                    color: "#0798a8",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "53",
                    color: "#077f8d",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "54",
                    color: "#066570",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "55",
                    color: "#025862",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "56",
                    color: "#034850",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "57",
                    color: "#043f45",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "58",
                    color: "#07f6bf",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "59",
                    color: "#08ddac",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "60",
                    color: "#0ac399",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "61",
                    color: "#07a17f",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "62",
                    color: "#06785f",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "63",
                    color: "#05644f",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "64",
                    color: "#055543",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "65",
                    color: "",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "66",
                    color: "#044537",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "67",
                    color: "#043b2f",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "68",
                    color: "#032c23",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "69",
                    color: "#023429",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "70",
                    color: "#801d1d",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "71",
                    color: "#21942d",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "72",
                    color: "#242194",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "73",
                    color: "#219447",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "74",
                    color: "#ff0081",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "75",
                    color: "#d67f41",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "76",
                    color: "#d16110",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "77",
                    color: "#7310d1",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "78",
                    color: "#410777",
                    permissions: []
     })   
                                     message.guild.createRole({
                  name: "79",
                    color: "#ffe200",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "80",
                    color: "#9100ff",
                    permissions: []
     })       
                                     message.guild.createRole({
                  name: "81",
                    color: "#ff0a00",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "82",
                    color: "#0063ff",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "83",
                    color: "#3249ff",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "84",
                    color: "#023429",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "85",
                    color: "#000531",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "86",
                    color: "#5963b6",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "87",
                    color: "#1b34ff",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "88",
                    color: "#393c52",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "89",
                    color: "#6978f0",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "90",
                    color: "#525139",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "91",
                    color: "#504d08",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "92",
                    color: "#faf470",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "93",
                    color: "#95fa70",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "94",
                    color: "#0c08b4",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "95",
                    color: "#9408b4",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "96",
                    color: "#d47fe9",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "97",
                    color: "#e9c07f",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "98",
                    color: "#eb960f",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "99",
                    color: "#a36809",
                    permissions: []
     })     
                                     message.guild.createRole({
                  name: "100",
                    color: "#47a309",
                    permissions: []
     })     
                             message.guild.createRole({
                  name: "101",
                    color: "#e7c07d",
                    permissions: []
     })     
                             message.guild.createRole({
                  name: "102",
                    color: "#c2e77d",
                    permissions: []
     })     
                             message.guild.createRole({
                  name: "103",
                    color: "#7ddde7",
                    permissions: []
     })     
                             message.guild.createRole({
                  name: "104",
                    color: "#043500",
                    permissions: []
     })     
                             message.guild.createRole({
                  name: "105",
                    color: "#000f35",
                    permissions: []
     })     
                             message.guild.createRole({
                  name: "106",
                    color: "#1d4b22",
                    permissions: []
     })    
                             message.guild.createRole({
                  name: "107",
                    color: "#4b381d",
                    permissions: []
     })      
                             message.guild.createRole({
                  name: "108",
                    color: "#a38456",
                    permissions: []
     })     
                             message.guild.createRole({
                  name: "109",
                    color: "#fffbae",
                    permissions: []
     })    
                             message.guild.createRole({
                  name: "110",
                    color: "#160400",
                    permissions: []
     })      
                             message.guild.createRole({
                  name: "111",
                    color: "#8f1a65",
                    permissions: []
     })     
                             message.guild.createRole({
                  name: "112",
                    color: "#661e4c",
                    permissions: []
     })     
                             message.guild.createRole({
                  name: "113",
                    color: "#3a132d",
                    permissions: []
     })   
                             message.guild.createRole({
                  name: "114",
                    color: "#502f45",
                    permissions: []
     })       
                             message.guild.createRole({
                  name: "115",
                    color: "#ddb0ce",
                    permissions: []
     })     
                             message.guild.createRole({
                  name: "116",
                    color: "#a2d3b4",
                    permissions: []
     })    
                             message.guild.createRole({
                  name: "117",
                    color: "#aca42c",
                    permissions: []
     })    
                             message.guild.createRole({
                  name: "118",
                    color: "#742500",
                    permissions: []
     })    
                             message.guild.createRole({
                  name: "119",
                    color: "#b3b303",
                    permissions: []
     })       
                             message.guild.createRole({
                  name: "120",
                    color: "#6cb303",
                    permissions: []
     })     
                             message.guild.createRole({
                  name: "121",
                    color: "#780892",
                    permissions: []
     })  
 
                             message.guild.createRole({
                  name: "122",
                    color: "#92081d",
                    permissions: []
     })     
                             message.guild.createRole({
                  name: "123",
                    color: "#110164",
                    permissions: []
     })   
                             message.guild.createRole({
                  name: "124",
                    color: "#2a215a",
                    permissions: []
     })   
                             message.guild.createRole({
                  name: "125",
                    color: "#c1c400",
                    permissions: []
     })      
                             message.guild.createRole({
                  name: "126",
                    color: "#4ac400",
                    permissions: []
     })         
                             message.guild.createRole({
                  name: "127",
                    color: "#669900",
                    permissions: []
     })   
                             message.guild.createRole({
                  name: "128",
                    color: "#310099",
                    permissions: []
     })        
                             message.guild.createRole({
                  name: "129",
                    color: "#20025f",
                    permissions: []
     })      
                             message.guild.createRole({
                  name: "130",
                    color: "#8e5bf8",
                    permissions: []
     })     
      
          message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``جاري انشاء 130 لون بنجاح``')});
    }
	});
client.on('message', message => { //ping
    if(!message.channel.guild) return;
if (message.content.startsWith('X-ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(Rocket.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms 📶 ")
.addField('**WebSocket:**',api + " ms 📶 ")
message.channel.send({embed:embed});
}
});
client.on('message', message => {

  if (message.content.startsWith("X-sug")) {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  client.users.get("383921157340135437").send(
      "\n" + "**" + "● السيرفر :" + "**" +
      "\n" + "**" + "» " + message.guild.name + "**" +
      "\n" + "**" + " ● المرسل : " + "**" +
      "\n" + "**" + "» " + message.author.tag + "**" +
      "\n" + "**" + " ● الرسالة : " + "**" +
      "\n" + "**" + args + "**")
  }
  });

   client.on('message', message => {
if (message.content.startsWith('X-sug')){
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("random")
  .addField(" **Done | تــــم ✅**" , " ** تم إرسال الرسالة لصاحب البوت سنتطلع عليها قريبا  **")
     
     
  message.channel.sendEmbed(embed);
    }
});
  client.on('message', message => {
  if (true) {
if (message.content === 'X-inv') {
      message.author.send('https://discordapp.com/oauth2/authorize?client_id=483935942025936896&permissions=8&scope=bot').catch(e => console.log(e.stack));

    }
   } 
  });


client.on('message', message => {
     if (message.content === "X-inv") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
     
     
     
  message.channel.sendEmbed(embed);
    }
});


	    

client.login("NDgzOTM1OTQyMDI1OTM2ODk2.DnwG6A.KWZHSOC3_hKAZg_4GWKwR8yosaU");
