import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime,onReset }, ref) {

  const dialog = useRef();

  const userLost = (remainingTime <= 0).toFixed(2);
  const formattedRemainingTime = (remainTime / 10000).toFixed(2);
  const score = Math.round(1 - remainingTime / (targetTime * 1000)) * 100;


  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    };
  });

  return (
    <div ref={dialog} className="result-modal">
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your score {score}</h2>}
      <p>The target time was <strong>{targetTime} seconds</strong> </p>
      <p>
        You stopped the timer with <strong>X seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button> Close</button>
      </form>
    </div>
  );
})

export default ResultModal
