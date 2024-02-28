import { createContext, useContext } from "react";
import { useParseData } from "../hooks/getDataHook.js";
import PropTypes from "prop-types";

const CardsContext = createContext({
  cards: [],
  loading: true,
  error: null,
  nextPage: () => {},
});

export function CardsProvider({ children }) {
  const cards = useParseData();

  return (
    <CardsContext.Provider value={cards}>{children}</CardsContext.Provider>
  );
}

export function useCards() {
  return useContext(CardsContext);
}

CardsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
