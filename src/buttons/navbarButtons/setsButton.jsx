import "./setsButton.css";
import setsIcon from "../../assets/sets.svg";

function SetsButton() {
  return (
    <button className="sets-button">
      <img src={setsIcon} alt=""></img> Sets
    </button>
  );
}

export default SetsButton;
