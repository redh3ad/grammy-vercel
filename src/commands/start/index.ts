import { Context } from 'grammy';

const start = async (ctx: Context): Promise<void> => {
  await ctx.reply('Start bot!');
};

export default start;
