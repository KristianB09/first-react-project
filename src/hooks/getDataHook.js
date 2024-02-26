import { useState, useEffect } from "react";
import { scryfallUrl } from "../data/variables.js";

let scryfallList = [];

export async function scryfallData(url) {
  scryfallList = await getData(url);
  return scryfallList;
}

export async function getData(url = scryfallUrl) {
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
  const [currentUrl, setCurrentUrl] = useState(scryfallUrl);
  const [hasMore, setHasMore] = useState(false);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  /* const [sets, setSets] = useState([]); */

  useEffect(() => {
    setLoading(true);
    setCards([]);
    setError(null);

    async function fetchCards() {
      try {
        const cardData = await scryfallData(currentUrl);

        if (cardData.data) {
          setCards(cardData.data);
          if (cardData.has_more) {
            setHasMore(true);
            setNextPageUrl(cardData.next_page);
          }
          console.log(cardData);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCards();
  }, [currentUrl]);

  function nextPage() {
    if (hasMore) {
      setCurrentUrl(nextPageUrl);
    }
  }

  return { cards, loading, error, nextPage };
}
