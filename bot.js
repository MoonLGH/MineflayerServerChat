const D = require("discord.js");
const chalk = require("chalk");
const mineflayer = require("mineflayer");
const fs = require("fs")
const color = "#RANDOM"
const client = new D.Client();
let botconf = require("./Botstuff.json");
let config = require("./config.json");
let prefix = config.prefix;
let token = config.token;
let ip = config.server;
let username = config.username;
let password = config.password;
let ver = config.version;
let login = config.login;
let botver = botconf.botver;
let sc = config.sc;
//command handler
client.commands = new D.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
let status = [];
let player = [];

const bot = mineflayer.createBot({
    version: config.version,
    host: ip,
    username: username,
	password: password
});

// =========================
// SET ACTIVITY BOT
// =========================
client.on('ready', activity => {
    client.user.setStatus(`online`)
    client.user.setActivity(
      `${ip} Servers Chat, | For Help Do  ${prefix}help |`,
      { type: "WATCHING" }
    )
});
	

// =========================
//  Bot Logins / Serverchat
// =========================


client.on("ready", async () => {
    console.log('\x1B[2J\x1B[3J\x1B[H\x1Bc')
    console.log(chalk.hex("#FFFFFF").bold("────────────────────────────────────────────────────────────"))
    console.log(chalk.hex("#006CFF")(`\u00BB Credits: `) + chalk.hex("#FFFFFF")(`MoonL#6995`))
	console.log(chalk.hex("#006CFF")(`\u00BB Modifier: `) + chalk.hex("#FFFFFF")(`MoonL#6995`))
    console.log(chalk.hex("#006CFF")(`\u00BB Discord Bot: `) + chalk.hex("#FFFFFF")(`Discord Bot is now Online`))
    console.log(chalk.hex("#006CFF")(`\u00BB Any Issue Contact:`) + chalk.hex("#FFFFFF")(`MoonL#6995`))
    console.log(chalk.hex("#006CFF")(`\u00BB Bot Info:`) + chalk.hex("#FFFFFF")(` Logged into user `) + chalk.hex("#006CFF")(`${client.user.tag}. `))
		console.log(chalk.hex("#006CFF")(`\u00BB Bot Curret Version: `) + chalk.hex("#FFFFFF")(`${botver}`))
    console.log(chalk.hex("#FFFFFF").bold("────────────────────────────────────────────────────────────"))
})

bot.on("login", async () => {
    bot.chat(config.joincommand)
    console.log(chalk.hex("#006CFF")(`\u00BB Ingame Bot: `) + chalk.hex("#FFFFFF")(`Igb Bot is now Online`))
    console.log(chalk.hex("#006CFF")(`\u00BB Bot Info: `) + chalk.hex("#FFFFFF")(`Logged into user `) + chalk.hex("#006CFF")(`${username}`))
console.log(chalk.hex("#006CFF")(`\u00BB Server Info: `) + chalk.hex("#FFFFFF")(`Logged into server `) + chalk.hex("#006CFF")(`${ip}`) + chalk.hex("#FFFFFF")(` on version `) + chalk.hex("#006CFF")(`${ver}`))
    console.log(chalk.hex("#FFFFFF").bold("────────────────────────────────────────────────────────────"))
    console.log(chalk.hex("#FFFFFF")(`\u00BB Server chat is `) + chalk.hex("#006CFF")("Enabled.") + chalk.hex("#FFFFFF")(" Logging all chats below"))
		if (config.logsc == false) {
		console.log('You Disable Log SC');
		return
}
})

//SERVER CHAT (Discord)
bot.on("message", message => {
    let channel = client.channels.cache.get(config.sc)
    if (!channel) return;
    channel.send(`From Server Chat >> ${message}`)
})
//SERVER CHAT (log)	
bot.on("message", message => {
	if (config.logsc == false) {
		return
}
    setTimeout(() => {
        console.log(chalk.hex("#006CFF")(`Serverchat \u00BB `) + chalk.hex("#FFFFFF")(`${message}`))
    }, 5000);
})

// Cmds
client.on('message', msg => {
    if (!msg.content.startsWith(prefix)) return
    let args = msg.content.split(" ").slice(1)
    args = msg.content.slice(prefix.length).split(/ +/);
    let command = msg.content.split(" ")[0];
    command = command.slice(prefix.length);
    command = args.shift().toLowerCase();
    if (command == "online") {
        var sharedAccounts = fs.readFileSync("./friendsnick.txt", "utf-8").split("\r\n");
        for (let i = 0; i < sharedAccounts.length; i++) {
            if (bot.players.hasOwnProperty(`${sharedAccounts[i]}`)) {
                player.push(`**${sharedAccounts[i]}**`)
                status.push(`__**Online**__`)
            } else {
                player.push(`**${sharedAccounts[i]}**`)
                status.push(`Offline`)
            }
        }
        setTimeout(() => {
            const embed = new D.MessageEmbed()
                .setDescription(`**Online Accounts**`)
                .addField(`**Account:**`, `${player.join("\n")}`, true)
                .addField(`**Status:**`, `${status.join("\n")}`, true)
                .setColor(color)
            msg.channel.send(embed)
            status = []
            player = []
        }, 750);
    } else if (command == "help") {
        client.commands.get('Help').execute(msg, args);

    } else if (command == "help_mcbot") {
        const help = new D.MessageEmbed()
            .setTitle(`Help McBot`)
			.setColor(color)
			.addField(`${prefix}help `, 'Giving this messages')
			.addField(`${prefix}online`, 'Showing did ur friend is online')
			.addField(`${prefix}sudo`, 'Make the bot to say anything you want ')
            .addField(`${prefix}help movement`, 'Help For Movement')
			.setColor(color)
        msg.channel.send(help)
        
    } else if(command === 'ping'){
        client.commands.get('ping').execute(msg, args);
    }	else if (command === 'hug') {
        client.commands.get('hug').execute(msg, args);
    }	else if (command === 'say') {
        client.commands.get('say').execute(msg, args);
	} else if (command == "help_movement") {
        const Phelp = new D.MessageEmbed()
            .setTitle(`Help McBot Movement`)
			.setColor(color)
			.addField(`${prefix}forward `, 'Make The Bot Move Forward ')
			.addField(`${prefix}backward`, 'Make The Bot Move Backward`')
			.addField(`${prefix}left`, 'Make The Bot Move Left')
			.addField(`${prefix}right`, 'Make The Bot Move Right')
			.addField(`${prefix}stop`, 'Make The Bot Stop Moving')
			.setColor(color)
        msg.channel.send(Phelp)

    }else if (command == "help_DiscordCmd") {
        const Dhelp = new D.MessageEmbed()
            .setTitle(`Help Discord Movement`)
            .setColor(color)
            .setTitle(`Funs`)
			.addField(`${prefix}hug @someone`, 'Hug someone :D')
			.addField(`${prefix}ping`, 'Make The Bot Say A Stupid Ping Command :D`')
			.addField(`${prefix}say [...]`, 'Make The Bot say something u want')
			.setColor(color)
        msg.channel.send(Dhelp)

    } else if (command  == "sudo") {
        let toSend = args.join(" ")
        if (!toSend) return msg.reply("Specify a message to sudo")
        bot.chat(toSend)
        const success = new D.MessageEmbed()
            .setDescription(`:white_check_mark: ${msg.author.tag} sent \`${toSend}\``)
            .setColor(color)
        msg.channel.send(success)
		
	// -------------
	// Movement
	// -------------
    }else if (command  == "forward") {
        bot.setControlState('forward', true)
        const MoForw = new D.MessageEmbed()
            .setDescription(`:white_check_mark: Im Moving forward To Stop Do -stop`)
            .setColor(color)
        msg.channel.send(MoForw)
	}else if (command  == "backward") {
        bot.setControlState('back', true)
        const MoBackw = new D.MessageEmbed()
            .setDescription(`:white_check_mark: Im Moving backward To Stop Do -stop`)
            .setColor(color)
        msg.channel.send(MoBackw)
    }else if (command  == "stop") {
        bot.clearControlStates()
        const MoStop = new D.MessageEmbed()
            .setDescription(`:white_check_mark: Stopped!`)
            .setColor(color)
        msg.channel.send(MoStop)
	}else if (command  == "left") {
        bot.setControlState('left', true)
        const MoLeft = new D.MessageEmbed()
            .setDescription(`:white_check_mark: Im Moving left To Stop Do -stop`)
            .setColor(color)
        msg.channel.send(MoLeft)
	}else if (command  == "right") {
        bot.setControlState('right', true)
        const MoRight = new D.MessageEmbed()
            .setDescription(`:white_check_mark: Im Moving Right To Stop Do -stop`)
            .setColor(color)
        msg.channel.send(MoRight)
		
	}else if (command  == "coord") {
	const Mycoord = new D.MessageEmbed()
            .setDescription(`:white_check_mark: My coords are: ${bot.player.entity.position.x} ${bot.player.entity.position.y} ${bot.player.entity.position.z}.`)
            .setColor(color)
        msg.channel.send(Mycoord)
	}
})

client.login(token)
    .catch(error => {
        console.log(chalk.hex("#F44421")(`[ Invalid Token in Config.json ]`));
    })
