import { useState } from "react";
import { Thread } from "../common/types/thread";
import ThreadCard from "./ThreadCard";

type ThreadProps = {
  threads: Thread[];
  itemNum: number;
};
type ThreadState = "expanded" | "collapsed";

export default function Threads({ threads, itemNum }: ThreadProps) {
  const [thread, setThread] = useState<ThreadState>(
    threads.length > 1 ? "collapsed" : "expanded"
  );
  const isCollapsed = thread === "collapsed";
  const classCollapsed = isCollapsed ? "thread_stack--collapsed" : "";

  const handleOnClick = () => {
    setThread("expanded");
  };

  return (
    <ul
      className={`thread_stack ${classCollapsed}`}
      onClick={handleOnClick}
      aria-expanded={!isCollapsed}
      aria-controls="thread-item"
      aria-haspopup={thread.length > 1}
      tabIndex={0}
    >
      {threads.map((thread, i) => {
        const score = !thread.score || thread.score <= 5 ? "low" : "high";
        const cardId = `${itemNum}${i}`;
        return (
          <li
            key={thread.id}
            className="item"
            id={"thread-item"}
            tabIndex={isCollapsed || threads.length === 1 ? -1 : 0}
            aria-describedby={`title-${cardId} question-${cardId} text-${cardId} team-${cardId} created_at-${cardId}`}
          >
            <ThreadCard
              showLabel={isCollapsed && i === 0}
              thread={thread}
              score={score}
              collapsed={isCollapsed}
              mCount={threads.length}
              cardId={cardId}
            />
          </li>
        );
      })}
    </ul>
  );
}
