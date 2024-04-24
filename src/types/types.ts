type Attendance = {
  activeTimeMs: number;
  helpEndUnixMs: number;
  helpStartUnixMs: number;
  helpedMembers: { id: string; displayName: string }[];
  helper: { id: string; displayName: string };
};

type AttendanceEntries = {
  entries: Attendance[];
};

type HelpSession = {
  helper: { id: string; displayName: string };
  queueName: string;
  sessionEndUnixMs: number;
  sessionStartUnixMs: number;
  student: { id: string; displayName: string };
  waitStart: number;
  waitTimeMs: number;
};

type HelpSessionEntries = {
  entries: HelpSession[];
};
