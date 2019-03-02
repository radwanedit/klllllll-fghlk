const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "%";
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('-----------');
    console.log('By Radwan LRG')
  });
  
  
  
  client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='*member')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('📗| Online',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('➡| Server Members',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    
    });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
client.login(process.env.BOT_TOKEN);
