import Threads from "./Threads";
import threadMock from "../__tests__/threadMock";
import "../sass/components/thread.scss";

export default function ThreadList() {
  return (
    <div className="container">
      <ul className="inner-container">
        {threadMock.threads.map((thread, index) => (
          <li key={index} className="thread-container">
            <Threads threads={thread} />
          </li>
        ))}
      </ul>
    </div>
  );
}
