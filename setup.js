const rl = require("readline-sync");
const fs = require("fs");
let none = " change this crack to password if u wanna use premium account";
let server,
    user,
    pass,
    crack,
    version,
    token,
    prefix,
    scid,
    logsc,
    jc,
    onlinecommandChannelid;
    
version = rl.question("what version did the server use ? : ");
token = rl.question("Enter Your Token : ");
prefix = rl.question("Enter the discord bot prefix : ");
scid = rl.question("Enter the server chat channel id : ");
logsc = rl.question(' Do you want the server chat at log ?(Y/N)', {
  trueValue: ['y', 'Y', 'Yes'],
  falseValue: ['n', 'Yes', 'No']
});
if (logsc === true) {
    let logsc = true
    } else if (logsc === false) {
        let logsc = false
    } else {
        console.log('Sorry. What does "' + logsc + '" you said mean?');
    };

jc = rl.question("Enter an command that will the bot execute after join a server: ");
onlinecommandChannelid = rl.question("Enter an channel id that -online can work at: ");
server = rl.question("Enter the server ip that the bot will run on: ");
user = rl.question("Enter the MC account email/username: ");
crack = rl.question(' is your minecraft account crack ? (Y/N)', {
  trueValue: ['y'],
  falseValue: ['n']
});
if (crack === true) {
    let cracka = true;
        console.log("ok minecraft account setted to crack")
    } else if (crack === false) {
        let cracka = false;
    } else {
        console.log('Sorry. What does "' + pass + '" you said mean?');
    };
    
if (crack === false) {
pass = rl.question("Enter the MC account password: ");
}

console.clear();
console.log("Server: " + server);
console.log("Version: " + version);
console.log("token: " + token);
console.log("prefix: " + prefix);
console.log("User: " + user);
console.log("sc channel: " + scid);
console.log("Joincommand: " + jc);
console.log("-online place: " + onlinecommandChannelid);
console.log("Log Sc: " + logsc);

if (crack === true) {
    console.log("Password: crack ");
}
if (crack === false) {
console.log("Password: " + pass);
}

if (rl.keyInYNStrict("Is this ok? ")) {
  console.clear();
  if (crack === true) {
    fs.writeFileSync(
      "config.json",
      JSON.stringify({
        server: server,
        username: user,
        version: version,
        prefix: prefix,
        sc: scid,
        joincommand: jc,
        accountSharingChannel: onlinecommandChannelid,
        logsc: logsc,
        crack: none,
        token: token
      }, null,2)
    );
  } else {
    fs.writeFileSync(
      "config.json",
      JSON.stringify({
        server: server,
        username: user,
        version: version,
        prefix: prefix,
        sc: scid,
        joincommand: jc,
        accountSharingChannel: onlinecommandChannelid,
        logsc: logsc,
        password: pass,
        token: token
      }, null, 2)
    );
  }
  rl.keyInPause("File created. You now can run the program.");
} else {
  rl.keyInPause("OK. Cancelling...");
}