import { Client } from "discord.js";
import * as dotenv from 'dotenv';

dotenv.config();

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

console.log(client);
