import "./buttons.css";
import arrowRight from "../assets/arrow-right.svg";

function NextButton() {
  return (
    <button>
      <img src={arrowRight} alt="arrow pointing right" />
    </button>
  );
}

export default NextButton;
