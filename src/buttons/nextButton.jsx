import "./buttons.css";
import arrowRight from "../assets/arrow-right.svg";
import { useCards } from "../context/useCards.js";

function NextButton() {
  const { nextPage } = useCards();
  return (
    <button onClick={nextPage}>
      <img src={arrowRight} alt="arrow pointing right" />
    </button>
  );
}

export default NextButton;
