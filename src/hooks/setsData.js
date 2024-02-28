import { scryfallData } from "./getDataHook.js";
import { useState, useEffect } from "react";

let scryfallSetsUrl = "https://api.scryfall.com/sets";

export function useSetsData() {
  const [sets, setSets] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSets() {
      try {
        const setsData = await scryfallData(scryfallSetsUrl);

        if (setsData.data) {
          setSets(setsData.data);
          console.log(sets);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSets();
  });

  return { sets, error, isLoading };
}
