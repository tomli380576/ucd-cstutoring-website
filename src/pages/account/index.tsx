import UserView from '@/src/components/UserView';
import { API_VERSION, GUILD_ID } from '@/src/utils/constants';
import { Typography } from '@mui/material';
import axios from 'axios';
import { APIGuild, APIGuildMember } from 'discord-api-types/v10';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function AccountPage() {
  const { data: session, status } = useSession();
  const [discordInfo, setDiscordInfo] = useState<APIGuildMember | null>(null);

  useEffect(() => {
    const getDiscordInfo = async () => {
      if (!session) {
        return;
      }

      let response;

      try {
        response = await axios<APIGuild[]>(
          `https://discord.com/api/v${API_VERSION}/users/@me/guilds`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
              'Content-Type': 'application/json'
            }
          }
        );

        // User not in guild
        if (response.data.filter(guild => guild.id === GUILD_ID).length == 0) {
          console.log('NOT IN SERVER');
          return;
        }

        response = await axios<APIGuildMember>(
          `https://discord.com/api/v${API_VERSION}/users/@me/guilds/${GUILD_ID}/member`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
              'Content-Type': 'application/json'
            }
          }
        );
        console.log(response.data);
        setDiscordInfo(response.data);
      } catch (error) {
        console.log('An error occurred:', error);
      }
    };

    getDiscordInfo();
  }, [session]);

  if (status !== 'authenticated') {
    return <></>;
  }

  return (
    <>
      {discordInfo ? (
        <>
          <Typography>
            {discordInfo.user?.username} is in CS Tutoring Club Server
          </Typography>
          <UserView roles={discordInfo.roles} userId={discordInfo.user?.id} />
        </>
      ) : (
        <Typography>User is not in CS Tutoring Club Server</Typography>
      )}
    </>
  );
}
