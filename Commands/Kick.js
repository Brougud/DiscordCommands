module.exports = {

  name: 'kick',
  description: 'use this to kick a player from the server!'
  execute(message, args) {
    
    const member = message.mentions.users.first();
   
    if(message.member.permissions.has("KICK_MEMBERS") {
      
       if(member) {
         
          const memberGet = message.guild.members.cache.get(member.id);
          memberGet.kick();
          message.channel.send(`${member} has been banned from the server!`);
       
    } else {
          message.channel.send('You couldnt kick this player!');
        }
    
  } else {
      message.channel.send('You need the `KICK_MEMBERS` permission to use this command');
     }
   } 
}
