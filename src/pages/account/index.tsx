import { API_VERSION, GUILD_ID } from '@/src/utils/constants';
import { db } from '@/src/utils/firebase';
import { Typography } from '@mui/material';
import axios from 'axios';
import { APIGuild, APIGuildMember } from 'discord-api-types/v10';
import { collection, getDocs } from 'firebase/firestore';
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

        setDiscordInfo(response.data);
        console.log('GETTING DOCS...');

        await getDocs(collection(db, 'attendance')).then(snapshot => {
          const attendanceEntries = [];
          snapshot.docs.forEach(doc => {
            attendanceEntries.push({ ...doc.data() });
          });
          console.log('ATTENDANCE ENTRIES: ', attendanceEntries);
        });
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
      <Typography>My Account</Typography>
      {discordInfo ? (
        <Typography>
          {discordInfo.user?.username} is in CS Tutoring Club Server
        </Typography>
      ) : (
        <Typography>User is not in CS Tutoring Club Server</Typography>
      )}
    </>
  );
}
