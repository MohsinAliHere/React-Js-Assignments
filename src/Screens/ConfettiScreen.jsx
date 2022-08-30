import React from "react";
import Confetti from "react-confetti";

const ConfettiScreen = () => {
  return (
    <Confetti
      width={"2000"}
      height={"2000"}
      numberOfPieces={800}
      recycle={false}
      wind={0}
      gravity={0.1}
    />
  );
};

export default ConfettiScreen;
