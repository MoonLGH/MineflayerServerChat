const D = require("discord.js");
const chalk = require("chalk");
const mineflayer = require("mineflayer");
const fs = require("fs")
const color = "#RANDOM"
const client = new D.Client();


let config = require("../config.json");
let prefix = config.prefix;
let token = config.token;
let ip = config.server;
let username = config.username;
let password = config.password;
let ver = config.version;
let login = config.login;
let sc = config.sc;

module.exports = {
    name: 'Help',
    description: "this is a Help command!",
    execute(msg, args) {
        const help = new D.MessageEmbed()
            .setTitle(`Help`)
			.setColor(color)
            .addField(`${prefix}help_mcbot`, 'Help For Movement')
            .addField(`${prefix}help_discordcmd`, 'Help For Some stupid discord bot commands')
			.setColor(color)
        msg.channel.send(help)
  }
}