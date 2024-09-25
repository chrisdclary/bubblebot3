const auth = require('./auth.json')
//const ytdl = require('ytdl-core')
//const ytsr = require('ytsr')
//const ytpl = require('ytpl')

const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});


client.login(auth.token);