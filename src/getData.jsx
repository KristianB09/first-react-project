import { useState, useEffect } from "react";
import "./getData.css";

let mtgUrl = "https://api.magicthegathering.io/v1/cards";

let mtgList = [];

let scryfallList = [];

const scryfallUrl = "https://api.scryfall.com/cards/random";

async function scryfallData() {
  scryfallList = await getData(scryfallUrl);
  console.log(scryfallList.name);
}

scryfallData();

async function getData(url = mtgUrl) {
  const response = await fetch(url);
  if (response.ok !== true) {
    console.log("Something went wrong");
  }

  const data = await response.json();

  return data;
}

async function updateMtgList(url) {
  mtgList = await getData(url);
}

function Card() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      await updateMtgList(mtgUrl);
      if (mtgList.cards) {
        setCards(mtgList.cards);
      }
    }

    fetchCards();
  }, []);

  if (cards.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <div className="cards-container">
      {cards.map(
        (card) =>
          card.imageUrl && (
            <div key={card.id} className="card-container">
              <img key={card.id} src={card.imageUrl} alt={card.name} />
              <div className="text-beneath-card">
                <p>- {card.name} -</p>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default Card;
