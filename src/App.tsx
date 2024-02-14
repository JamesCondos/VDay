import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Not Allowed",
  "Your Loss",
  " 何で",
  "You PooPoo",
  "아이구",
  "😭",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [continuePressed, setcontinuePressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const message: string = "Hello, TypeScript!";

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTBtaHgwb3dwMTRsOTFiYm9uZmcxa2hsaHg1dGNwdjZkM2Y5M2IwNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYt5jPR6QX5pnqM/giphy.gif"
          />
          <div className="text">Congratulations!</div>

          <button
            className="continueButton"
            onClick={() => setcontinuePressed(true)}
          >
            Continue
          </button>
        </>
      ) : (
        <>
          <img
            alt="bear wtith hearts"
            src="https://gifdb.com/images/high/cute-dog-ears-xujwrlin8x61o393.gif"
          />

          <div className="textstyle">Will you be my Valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
