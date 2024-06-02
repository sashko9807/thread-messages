import Threads from "./Threads";

import "../sass/components/thread.scss";
import { useFetchThreads } from "../common/hooks/useFetchThread";

export default function ThreadList() {
  const [threads, isLoading, error] = useFetchThreads();
  console.log(error);

  if (isLoading) return null;
  if (error) return null;
  return (
    <div className="container">
      <ul className="inner-container">
        {threads.map((thread, index) => (
          <li key={index} className="thread-container">
            <Threads threads={thread} />
          </li>
        ))}
      </ul>
    </div>
  );
}
