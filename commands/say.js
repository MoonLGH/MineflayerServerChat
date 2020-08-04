const D = require("discord.js");
const fs = require("fs")
const color = "#RANDOM"
const client = new D.Client();

module.exports = {
    name: 'say',
    cooldown: 120,
    description: "this is a hug command!",
    execute(msg, args){
      if (!args.length) {
        return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
      } else 
      msg.channel.send(`${args.join(' ')}`);
  }
} 