import { ROLES } from './constants';

/** Type guard to determine if an entry is an `Attendance` entry or `HelpSession` */
export function isAttendance(entry: Attendance | HelpSession): entry is Attendance {
  return (
    'activeTimeMs' in entry &&
    'helpEndUnixMs' in entry &&
    'helpStartUnixMs' in entry &&
    'helpedMembers' in entry &&
    'helper' in entry &&
    typeof entry.activeTimeMs === 'number' &&
    typeof entry.helpEndUnixMs === 'number' &&
    typeof entry.helpStartUnixMs === 'number' &&
    Array.isArray(entry.helpedMembers) &&
    entry.helpedMembers.every(
      member => typeof member.id === 'string' && typeof member.displayName === 'string'
    ) &&
    typeof entry.helper === 'object' &&
    typeof entry.helper.id === 'string' &&
    typeof entry.helper.displayName === 'string'
  );
}

/** Returns an object containing the number of minutes and seconds from milliseconds */
export function millisecondsToMinutesSeconds(milliseconds: number): {
  minutes: number;
  seconds: number;
} {
  /* Convert milliseconds to seconds */
  const totalSeconds: number = milliseconds / 1000;

  /* Calculate minutes and remaining seconds */
  const minutes: number = Math.floor(totalSeconds / 60);
  const seconds: number = Math.floor(totalSeconds % 60);

  return { minutes, seconds };
}

/** Function to get the role ID by role name */
export function getRoleId(roleName: (typeof ROLES)[keyof typeof ROLES]) {
  const ids = Object.keys(ROLES) as (keyof typeof ROLES)[];
  return ids.find(id => ROLES[id] === roleName);
}

/** Function to get the most recent Sunday */
export function getLastSunday() {
  const date = new Date();
  const dayOfWeek = date.getDay(); // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const daysSinceLastSunday = dayOfWeek === 0 ? 0 : dayOfWeek; // Days since the last Sunday
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - daysSinceLastSunday
  );
}
