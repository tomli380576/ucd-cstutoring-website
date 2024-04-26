import { getRoleId } from '../utils/utils';
import AdminView from './admin/AdminView';
import TutorView from './tutor/TutorView';

type UserViewProps = {
  userId?: string;
  roles: string[];
};

export default function UserView({ userId, roles }: UserViewProps) {
  if (roles.includes(getRoleId('Bot Admin') ?? '')) {
    return <AdminView />;
  }

  if (roles.includes(getRoleId('Tutor') ?? '') && userId) {
    return <TutorView userId={userId} />;
  }

  return <></>;
}
