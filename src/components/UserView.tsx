import { ROLES } from '../utils/constants';
import AdminView from './admin/AdminView';
import TutorView from './tutor/TutorView';

type UserViewProps = {
  userId?: string;
  roles: string[];
};

export default function UserView({ userId, roles }: UserViewProps) {
  if (roles.includes(ROLES.botAdmin)) {
    return <AdminView />;
  }

  if (roles.includes(ROLES.tutor) && userId) {
    return <TutorView userId={userId} />;
  }

  return <></>;
}
