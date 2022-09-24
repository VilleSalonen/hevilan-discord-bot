import { Client } from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();

console.log('Bot is starting...');

const token = process.env.TOKEN;

const client = new Client({
    intents: [],
});
client.login(token);
