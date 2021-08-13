import { Colors } from 'utils/Colors';

module.exports = {
  name: 'links',
  description: 'This is a command to send links!',
    execute(message, args) {
    message.channel.send({
  "embed": {
    "title": "Links!"
}

}); //this will send a message of your links!
    }
}
