import { ROLES } from './constants';

export function millisecondsToMinutesSeconds(milliseconds: number): {
  minutes: number;
  seconds: number;
} {
  // Convert milliseconds to seconds
  const totalSeconds: number = milliseconds / 1000;

  // Calculate minutes and remaining seconds
  const minutes: number = Math.floor(totalSeconds / 60);
  const seconds: number = Math.floor(totalSeconds % 60);

  return { minutes, seconds };
}

// Function to get the role ID by role name
export function getRoleId(roleName: (typeof ROLES)[keyof typeof ROLES]) {
  const ids = Object.keys(ROLES) as (keyof typeof ROLES)[];
  return ids.find(id => ROLES[id] === roleName);
}
