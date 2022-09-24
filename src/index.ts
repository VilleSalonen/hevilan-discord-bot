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

client.login(token);
