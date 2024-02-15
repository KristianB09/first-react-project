import { useParseData } from "../hooks/getDataHook.js";
import "./getData.css";

function Card() {
  const { cards, loading, error } = useParseData();

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="cards-container">
      {cards.map(
        (card) =>
          card.image_uris.normal &&
          card.booster && (
            <div key={card.id} className="card-container">
              <img src={card.image_uris.normal} alt={card.name} />
              <div className="text-beneath-card">
                <p className="first-p">
                  <b>Type:</b> {card.type_line}
                </p>
                <p className="not-first-p odd-p">
                  <b>Artist:</b> {card.artist}
                </p>
                <p className="not-first-p">
                  <b>Rarity:</b> {card.rarity}
                </p>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default Card;
