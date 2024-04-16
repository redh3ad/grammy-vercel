import { Bot } from 'grammy';

const bot = new Bot(String(process.env.BOT_API_KEY));

export default bot;
