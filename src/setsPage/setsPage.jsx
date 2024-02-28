import "./setsPage.css";
import { useSetsData } from "../hooks/setsData.js";

function SetsPage() {
  const { sets, error, isLoading } = useSetsData();

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p className="loading">Error: {error}</p>;
  }

  return (
    <div className="sets-container">
      {sets
        .filter(
          (set) =>
            set.set_type === "expansion" ||
            set.set_type === "core" ||
            set.set_type === "masters" ||
            set.set_type === "draft_innovation"
        )
        .map((set) => (
          <div key={set.id} className="set-container">
            <div className="set-content">
              <img src={set.icon_svg_uri} className="set-icon"></img>
              <h3 className="set-names">{set.name}</h3>
              <p>cards: {set.card_count}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default SetsPage;
