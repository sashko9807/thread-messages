import { Thread } from "../common/types/thread";
import { addSuffixToDate } from "../utils/addSuffixToDate";
import ThreadCountLabel from "./ThreadCountLabel";

type ThreadCardProps = {
  thread: Thread;
  score: "low" | "high";
  mCount: number;
  showLabel: boolean;
  collapsed: boolean;
};
export default function ThreadCard({
  thread,
  score,
  mCount,
  showLabel,
  collapsed,
}: ThreadCardProps) {
  const createdAt = new Date(thread.created_at);
  const month = createdAt.toLocaleString("en-US", { month: "short" });
  const day = createdAt.getDate();
  const dayWithSuffix = `${day}${addSuffixToDate(day)}`;
  const isCollapsed = collapsed && !showLabel ? "collapsed" : "";
  return (
    <article className="card ">
      <ThreadCountLabel show={showLabel} score={score} messagesCount={mCount} />
      <div className={`col1 ${isCollapsed}`} data-testid="card-col">
        <div>
          <h1 className={`h5 card_title--${score}`}>{thread.subject}</h1>
          <p className="card--question">{thread.question}</p>
        </div>
        <p>{thread.text}</p>
      </div>
      <div className={`col2 ${isCollapsed}`} data-testid="card-col">
        <span className={`card_team`}>{thread.team}</span>
        <span className={`card_created-at`}>{`${month} ${dayWithSuffix}`}</span>
      </div>
    </article>
  );
}
