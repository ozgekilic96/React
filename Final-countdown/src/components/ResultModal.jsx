import React from "react";

export default function ResultModal({ results, targetTime }) {
  return (
    <dialog className="result-modal">
      <h2>You {result}</h2>
      <p>The target time was {targetTime} seconds</p>
      <p>
        You stopped the timer with <strong>X seconds left</strong>
      </p>
      <form method="dialog">
        <button> Close</button>
      </form>
    </dialog>
  );
}
