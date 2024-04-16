require('dotenv').config();

import commands from './commands';
import bot from './core/bot';
import { production } from './utils/launch';

bot.use(commands);

// process.env.NODE_ENV === "development" ? development(bot) :
production(bot);

export {};
