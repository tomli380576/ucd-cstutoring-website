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