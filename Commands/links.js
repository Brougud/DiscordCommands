module.exports = {
  name: 'links',
  description: 'This is a command to send links!',
    execute(message, args) {
    message.channel.send('your links here'); //this will send a message of your links!
    }
}
