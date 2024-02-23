import "./buttons.css";
import arrowRight from "../assets/arrow-right.svg";

function nextPage() {}
function NextButton() {
  return (
    <button onClick={nextPage()}>
      <img src={arrowRight} alt="arrow pointing right" />
    </button>
  );
}

export default NextButton;
