// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { auth } from '@/src/server/auth';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const session = await auth(req, res);

  if (!session) {
    res.status(401).json({ message: 'You must be logged in.' });
    return;
  }

  res.status(200).json({ message: 'This is a protected route.' });
}
