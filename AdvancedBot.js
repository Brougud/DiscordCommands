const discord = require('discord.js');

const client = new Discord.Client();

const prefix = "."//this is were you put your prefix so for ex. this would be - so i could do -command and it out put what command is

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync(./commands/).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  
  client.commands.set(command.name, command)

}


client.once('ready', () => {
  console.log('<botname> is loaded'); //this is your loadup message
});

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return; 
  
  const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowercase();
  
  if(command === 'links') { //ONLY DO THIS IF YOU WANT A SMALL AMOUNT OF COMMADS VERY VERY BAD WAY!!
    client.commands.get('links').execute(message, args);
} else if(command === 'ban'){
    client.commands.get('ban').execute(message, args);
} else if(command === 'kick'){
  client.commands.get('kick').execute(message, args);
} else if(command === 'reactionrole'){
  client.commands.get('reactionrole').execute(message, args, Discord, client);
}

client.login('x'); //this is were you put your discords bot token! If you do not know how to do this I will put a tutorial in the readme.md!
