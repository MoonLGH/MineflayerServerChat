const D = require("discord.js");
const chalk = require("chalk");
const mineflayer = require("mineflayer");
const fs = require("fs")
const color = "#RANDOM"
const client = new D.Client();

module.exports = {
    name: 'activity',
    description: "this is a ping command!",
    execute(activty){
        client.user.setStatus(`online`)
        client.user.setActivity(
          `${ip} Servers Chat, | For Help Do  ${prefix}help |`,
          { type: "WATCHING" }
    );
    }
}