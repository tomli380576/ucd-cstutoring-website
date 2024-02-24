// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { auth } from '@/src/server/auth';
import { API_VERSION } from '@/src/utils/constants';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Send request to Discord's API using OAuth token
 * @param req
 * @param res
 * @returns
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await auth(req, res);

  if (!session) {
    res.status(401).json({ message: 'You must be logged in.' });
    return;
  }

  const response = await axios(
    `https://discord.com/api/v${API_VERSION}/users/@me/guilds`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
        'Content-Type': 'application/json'
      }
    }
  );

  console.log(response.data);

  res.status(200).json(response.data);
}
