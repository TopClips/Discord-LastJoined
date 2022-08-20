const Discord = require('discord.js')
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MEMBERS"],
})
const TOKEN = process.env.token

client.on("guildMemberAdd", async member => {
  const guild = member.guild;
  const channel =  client.channels.cache.get("961534127348264992");

channel.setName(`Last Joined・${member.user.username}`)
});

client.on('ready', () => {
console.log('Guild Count: ' + client.guilds.cache.size)
  console.log('Ping: ' + Math.round(client.ws.ping))
  console.log('Online, Add A New Member to Server To Update the Count!')

  client.user.setActivity({ type: "WATCHING", name: `Last Joined |TopClips` })
  
  require('http').createServer((req, res) => res.end('Bot is alive!')).listen(3000)
  
})
client.login(TOKEN);