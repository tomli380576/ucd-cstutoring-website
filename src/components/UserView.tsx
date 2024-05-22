import { useSelectedServer } from '../utils/atom';
import AdminView from './admin/AdminView';
import TutorView from './tutor/TutorView';

type UserViewProps = {
  userId?: string;
  roles: string[];
};

export default function UserView({ userId, roles }: UserViewProps) {
  const [selectedServer] = useSelectedServer();

  if (
    selectedServer?.server.botAdminRoleId &&
    roles.includes(selectedServer.server.botAdminRoleId)
  ) {
    return <AdminView />;
  }

  if (
    selectedServer?.server.staffRoleId &&
    roles.includes(selectedServer.server.staffRoleId) &&
    userId
  ) {
    return <TutorView userId={userId} />;
  }

  return <></>;
}
