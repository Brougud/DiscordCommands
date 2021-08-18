exports.getUserFromMention = (mention, client) => {
  if (!mention) {
    return;
  }
  //for IDs ex. <@12896320973250>

  if (mention.startsWith('<@') && mention.endsWith('>')) {
      mention = mention.slice(2, -1);
    
      if (mention.startsWith('!')) {
          mention.slice('1')

      }
    
      return client.users.cache.get(mention);
    
    }
         
  }

//another way is

module.exports = {
    getMember: function(message, toFind = '') {
        toFind = toFind.toLowerCase();

        let target = message.guild.members.get(toFind);
        
        if (!target && message.mentions.members)
            target = message.mentions.members.first();

        if (!target && toFind) {
            target = message.guild.members.find(member => {
                return member.displayName.toLowerCase().includes(toFind) ||
                member.user.tag.toLowerCase().includes(toFind)
            });
        }
            
        if (!target) 
            target = message.member;
            
        return target;
    },

    formatDate: function(date) {
        return new Intl.DateTimeFormat('en-US').format(date)
    }
}
