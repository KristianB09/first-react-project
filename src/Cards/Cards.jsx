import { useCards } from "../context/useCards.js";
import { useState, useEffect } from "react";
import "./Cards.css";
import { OracleText } from "../hooks/transformOracleText.jsx";

function Card() {
  const { cards, loading, error, setName } = useCards();
  const [overlayCard, setOverlayCard] = useState(null);

  function cardClick(card) {
    if (!overlayCard) {
      setOverlayCard(card);
    }
  }

  useEffect(() => {
    function closeOverlay(event) {
      if (overlayCard && !event.target.closest(".overlay-container")) {
        setOverlayCard(null);
      }
    }
    document.addEventListener("mousedown", closeOverlay);

    return () => {
      document.removeEventListener("mousedown", closeOverlay);
    };
  }, [overlayCard]);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p className="loading">Error: {error}</p>;
  }

  return (
    <div className="cards-container">
      <div className="set-name-container">
        <h4 className="set-name">{setName}</h4>
      </div>
      {cards.map(
        (card) =>
          card.image_uris.normal &&
          card.booster && (
            <div
              key={card.id}
              className="card-container"
              onClick={() => cardClick(card)}
            >
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
      {overlayCard && (
        <div className="screen-clicker-overlay">
          <div className="overlay-container">
            <div className="overlay-content">
              <img src={overlayCard.image_uris.normal} alt={overlayCard.name} />
              <div className="details-container">
                <h1>{overlayCard.name}</h1>
                <p>{overlayCard.type_line}</p>
                <OracleText oracleText={overlayCard.oracle_text} />
                <p>
                  {overlayCard.power} / {overlayCard.toughness}
                </p>
                <p>{overlayCard.artist}</p>
                <p>
                  <i>{overlayCard.flavor_text}</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
