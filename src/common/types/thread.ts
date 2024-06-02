export type Thread = {
  team: string;
  id: string;
  question: string;
  subject_id: number;
  question_id: number;
  thread_id: string;
  reply_to?: string;
  text: string;
  created_at: string;
  subject: string;
  score?: number;
  acknowledged?: boolean;
};
