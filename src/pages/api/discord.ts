// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { auth } from '@/src/server/auth';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await auth(req, res);

  if (!session) {
    res.status(401).json({ message: 'You must be logged in.' });
    return;
  }

  const apiVersion = 10;
  const guildId = '888516333761871882';

  const initialDiscordRes = await fetch(
    `https://discord.com/api/v${apiVersion}/users/@me/guilds/${guildId}/member`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
        'Content-Type': 'application/json'
      }
    }
  );

  const discordJson = await initialDiscordRes.json();

  console.log(discordJson);

  res.status(200).json(discordJson);
}
