import { Client, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();

console.log('Bot is starting...');

const token = process.env.TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    } else if (commandName === 'server') {
        if (interaction.guild) {
            await interaction.reply(
                `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`
            );
        }
    } else if (commandName === 'user') {
        await interaction.reply('User info.');
    }
});

client.login(token);
