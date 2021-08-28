const { MessageEmbed } = require("discord.js");
module.exports = {
	name: 'say',
	description: 'Say something',
	usage: 'say (text)',
  execute(message, args) {
    let actionMsg = "says";
    if (
      message.content.slice(prefix.length).replace(/ .*/, "").toLowerCase() ==
        "letyouknow" ||
      message.content.slice(prefix.length).replace(/ .*/, "").toLowerCase() ==
        "lyk"
    )
      actionMsg = "wants to let you know";

    const msgArgs = args.slice(0).join(" ");

    const Embed = new MessageEmbed()
      .setAuthor(
        `${message.author.tag} ${actionMsg},`,
        message.author.avatarURL()
      )
      .setTitle(`"${msgArgs}"`)
      .setFooter("//You can change this to anything you want")
      .setColor("RANDOM");
    let mentions = false;
    message.mentions.roles.tap((coll) => {
      if (coll.size > 0) mentions = true;
    });
    if (msgArgs.includes("@everyone") || msgArgs.includes("@here") || mentions)
      return message.reply("I am sorry but you can't have the word `@everyone` or `@here` in your message");
    message.channel
      .send(Embed)
      .then(() => message.delete())
      .catch(console.error);
  },
};
