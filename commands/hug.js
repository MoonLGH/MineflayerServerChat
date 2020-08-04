const D = require("discord.js");
const fs = require("fs")
const color = "#RANDOM"
const client = new D.Client();

module.exports = {
    name: 'hug',
    cooldown: 120,
    description: "this is a hug command!",
    execute(msg, args){
      if (msg.mentions.users.size < 1) {
      msg.channel.send("please tag someone to hug")
      }
      if (msg.mentions.users.size > 0){
      const mentioned = msg.mentions.users.first();
      const MentUsername = mentioned.username;
        const huge = new D.MessageEmbed()
        .setDescription(`**${MentUsername}**, you've been hugged by **${msg.author.username}**. :heart:`)
        .setColor(color)
        msg.channel.send(huge)
      }
  }
}