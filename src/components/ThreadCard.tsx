import { Thread } from "../common/types/thread";
import { addSuffixToDate } from "../utils/addSuffixToDate";
import ThreadCountLabel from "./ThreadCountLabel";

type ThreadCardProps = {
  thread: Thread;
  score: "low" | "high";
  mCount: number;
  showLabel: boolean;
  collapsed: boolean;
  cardId?: string;
};
export default function ThreadCard({
  thread,
  score,
  mCount,
  showLabel,
  collapsed,
  cardId = "",
}: ThreadCardProps) {
  const createdAt = new Date(thread.created_at);
  const month = createdAt.toLocaleString("en-US", { month: "short" });
  const day = createdAt.getDate();
  const dayWithSuffix = `${day}${addSuffixToDate(day)}`;
  const isCollapsed = collapsed && !showLabel ? "collapsed" : "";
  return (
    <article id="thread-card" className="card">
      <ThreadCountLabel show={showLabel} score={score} messagesCount={mCount} />
      <div className={`col1 ${isCollapsed}`} data-testid="card-col">
        <div>
          <h1 id={`title-${cardId}`} className={`h5 card_title--${score}`}>
            {thread.subject}
          </h1>
          <p id={`question-${cardId}`} className="card--question">
            {thread.question}
          </p>
        </div>
        <p id={`text-${cardId}`}>{thread.text}</p>
      </div>
      <div className={`col2 ${isCollapsed}`} data-testid="card-col">
        <span id={`team-${cardId}`} className={`card_team`}>
          {thread.team}
        </span>
        <span
          id={`created_at-${cardId}`}
          className={`card_created-at`}
        >{`${month} ${dayWithSuffix}`}</span>
      </div>
    </article>
  );
}
