const discord = require('discord.js');

const client = new Discord.Client();

const prefix = "."//this is were you put your prefix so for ex. this would be - so i could do -command and it out put what command is

const commandFiles = fs.readdirSync(./commands/).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {

}


client.once('ready', () => {
  console.log('<botname> is loaded'); //this is your loadup message
});

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return; 
  
  const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowercase();
  
  if(command === 'links') { //ONLY DO THIS IF YOU WANT A SMALL AMOUNT OF COMMADS VERY VERY BAD WAY!!
    message.channel.send('links here');
}

client.login('x'); //this is were you put your discords bot token! If you do not know how to do this I will put a tutorial in the readme.md!
