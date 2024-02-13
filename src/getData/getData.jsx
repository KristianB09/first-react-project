import { useState, useEffect } from "react";
import "./getData.css";

let scryfallList = [];

const scryfallUrl = "https://api.scryfall.com/sets/mkm";

async function scryfallData(url) {
  scryfallList = await getData(url);
  return await getData(scryfallList.search_uri);
}

async function getData(url = scryfallUrl) {
  const response = await fetch(url);
  if (response.ok !== true) {
    console.log("Something went wrong");
  }

  const data = await response.json();

  return data;
}

function Card() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      const cardData = await scryfallData(scryfallUrl);
      if (cardData.data) {
        setCards(cardData.data);
        console.log(cardData.data);
      }
    }

    fetchCards();
  }, []);

  if (cards.length === 0) {
    return <p className="loading">Loading...</p>;
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
