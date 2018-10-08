const Discord = require ('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('I am ready');
});

bot.on('message', message => {
    if (message.content.substring(0, 1) == '!') {
        var args = message.content.substring(1).split(' ');
        var cmd = args[0];
        
        switch(cmd) {
            case 'bday':
                if(args[1] === undefined){
                    message.channel.send(':x: Please ping an existing member of this server :x:');
                    return;
                }
                var person = args[1].toString();
                person = person.substring(1).split('@').toString();
                person = person.substring(0).split('>').toString();
                person = person.replace(',','');
                person = person.replace(',','');
                person = person.replace('!','');

                //if(bot.servers[bot.channels[message.channel].guild_id].members[person] === undefined){
                if(message.member.guild.members.get(person) === undefined){
                    message.channel.send(':x: Please ping an existing member of this server :x:');
                    return;
                }

                person = message.member.guild.members.get(person).displayName;

                message.channel.send('@everyone \n :birthday: Happy Birthday '+person+'! \n', {files: ["https://pbs.twimg.com/media/DckCfriWkAIAVhI.jpg"]});
                return;
            case 'help':
               message.reply(' Type !bday @member');
               return;
            break;
         }
     }

});

bot.login(process.env.BOT_TOKEN);
