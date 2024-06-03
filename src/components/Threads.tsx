import { useRef, useState } from "react";
import { Thread } from "../common/types/thread";
import ThreadCard from "./ThreadCard";

type ThreadProps = {
  threads: Thread[];
};
type ThreadState = "expanded" | "collapsed";

export default function Threads({ threads }: ThreadProps) {
  const [thread, setThread] = useState<ThreadState>(
    threads.length > 1 ? "collapsed" : "expanded"
  );
  const isCollapsed = thread === "collapsed";
  const classCollapsed = isCollapsed ? "thread_stack--collapsed" : "";
  const listRef = useRef(0);

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

        return (
          <li key={thread.id} className="item" id={"thread-item"}>
            <ThreadCard
              showLabel={isCollapsed && i === 0}
              thread={thread}
              score={score}
              collapsed={isCollapsed}
              mCount={threads.length}
            />
          </li>
        );
      })}
    </ul>
  );
}
