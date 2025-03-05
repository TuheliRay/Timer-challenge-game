export default function ResultModal({
  ref,
  remainingTime,
  targetTime,
  onReset,
}) {
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  return (
    <dialog ref={ref} className="result-modal">
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score:{score}</h2>}
      <p>
        Your target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left</strong>
      </p>
      <form method="dialogue" onClose={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
}
