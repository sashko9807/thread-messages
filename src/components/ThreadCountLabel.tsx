type ThreadCountLabelProps = {
  show: boolean;
  score: "low" | "high";
  messagesCount: number;
};
export default function ThreadCountLabel({
  show,
  score,
  messagesCount,
}: ThreadCountLabelProps) {
  if (!show) return null;
  return (
    <label className={`card--label card--label-${score}`}>
      {messagesCount} messages{" "}
    </label>
  );
}
