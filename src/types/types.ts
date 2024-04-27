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

type ServerBackup = {
  afterSessionMessage: string;
  autoGiveStudentRole: false;
  botAdminRoleId: string;
  hoursUntilAutoClear: string | { hours: number; minutes: number };
  loggingChannelId: string;
  promptHelpTopic: boolean;
  queues: {
    name: string;
    parentCategoryId: string;
    studentsInQueue: {
      displayName: string;
      memberId: string;
      waitStart: Date;
    };
  }[];
  seriousServer: false;
  serverName: string;
  staffRoleId: string;
  studentRoleId: string;
  timeStamp: Date;
  timezone: {
    hours: number;
    minutes: 0 | 30 | 45;
    sign: '+' | '-';
  };
  trackingEnabled: boolean;
};

type Server = {
  id: string;
  server: ServerBackup;
};
