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
