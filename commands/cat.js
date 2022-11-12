const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cat')
    .setDescription('Get yourself a random cat!'),
  async execute(interaction) {
    const RandomCatEmbed = new EmbedBuilder()
      .setImage(`https://cataas.com/c?${Date.now()}`)
      .setTitle("Here's your random cat! ♡")
      .setColor("FFFFFF")
    return interaction.reply({ embeds: [RandomCatEmbed] });
  },
};
