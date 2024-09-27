const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Plays audio from youtube or spotify link'),
	async execute(interaction) {
		await interaction.reply('Work in progress, go ahead and bother bubbles');
	},
};
