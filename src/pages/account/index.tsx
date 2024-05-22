import RoleChip from '@/src/components/RoleChip';
import ServerSelect from '@/src/components/ServerSelect';
import UserView from '@/src/components/UserView';
import { useSelectedServer } from '@/src/utils/atom';
import { API_VERSION } from '@/src/utils/constants';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { APIGuild, APIGuildMember } from 'discord-api-types/v10';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function AccountPage() {
  const { data: session, status } = useSession();
  const [selectedServer] = useSelectedServer();
  const [discordInfo, setDiscordInfo] = useState<APIGuildMember>();

  useEffect(() => {
    const getDiscordInfo = async () => {
      if (!session) {
        setDiscordInfo(undefined);
        return;
      }

      try {
        const response = await axios<APIGuildMember>(
          `https://discord.com/api/v${API_VERSION}/users/@me/guilds/${selectedServer?.id}/member`,
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
        setDiscordInfo(undefined);
        console.log('An error occurred:', error);
      }
    };

    getDiscordInfo();
  }, [session, selectedServer]);

  if (status !== 'authenticated') {
    return <></>;
  }

  return (
    <Box padding={4}>
      <ServerSelect />
      {discordInfo ? (
        <>
          <Typography marginBottom={2}>
            <span style={{ fontWeight: 'bold' }}>Username:</span>{' '}
            {discordInfo.user?.username}
          </Typography>
          <Box display="flex" gap={2} marginBottom={6}>
            {discordInfo.roles.map(roleId => {
              const roles = [
                selectedServer?.server.botAdminRoleId,
                selectedServer?.server.staffRoleId,
                selectedServer?.server.studentRoleId
              ];

              if (!roles.includes(roleId)) {
                return;
              }

              return <RoleChip key={roleId} roleId={roleId} />;
            })}
          </Box>
          <UserView roles={discordInfo.roles} userId={discordInfo.user?.id} />
        </>
      ) : (
        <Typography>You are not in {selectedServer?.server.serverName}.</Typography>
      )}
    </Box>
  );
}
