const D = require("discord.js");
const chalk = require("chalk");
const mineflayer = require("mineflayer");
const fs = require("fs")
const color = "#RANDOM"
const client = new D.Client();

module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(msg, args){
	const ping = new D.MessageEmbed()
		.setDescription(`Pong :D ${msg.author.username} `)
		.setColor(color)
        msg.channel.send(ping)
  }
}