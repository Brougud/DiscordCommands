module.exports = {

  name: 'ban',
  description: 'use this to ban a player!'
  execute(message, args) {
    
    const member = message.mentions.users.first();
   
    if(message.member.permissions.has("BAN_MEMBERS") {
      
       if(member) {
         
          const memberGet = message.guild.members.cache.get(member.id);
          memberGet.ban();
          message.channel.send(`${member} has been banned from the server!`);
       
    } else {
          message.channel.send('You couldnt ban this player!');
        }
    
  } else {
      message.channel.send('You need the `BAN_MEMBERS` permission to use this command');
     }
   } 
}
