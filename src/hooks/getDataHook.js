import { useState, useEffect } from "react";

let scryfallList = [];

const scryfallUrl = "https://api.scryfall.com/sets/mkm";

async function scryfallData(url) {
  scryfallList = await getData(url);
  return await getData(scryfallList.search_uri);
}

async function getData(url = scryfallUrl) {
  const response = await fetch(url);
  if (response.ok !== true) {
    throw new Error("Data fetch failed");
  }

  const data = await response.json();

  return data;
}

export function useParseData() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCards() {
      try {
        const cardData = await scryfallData(scryfallUrl);
        if (cardData.data) {
          setCards(cardData.data);
          console.log(cardData.data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCards();
  }, []);

  return { cards, loading, error };
}
