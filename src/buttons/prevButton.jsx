import "./buttons.css";
import arrowLeft from "../assets/arrow-left.svg";

function PrevButton() {
  return (
    <button>
      <img src={arrowLeft} alt="Arrow pointing left" />
    </button>
  );
}

export default PrevButton;
