import NextButton from "./nextButton";
import PrevButton from "./prevButton";
import "./buttons.css";

function CombineButtons() {
  return (
    <div className="buttons-container">
      <PrevButton />
      <NextButton />
    </div>
  );
}

export default CombineButtons;
