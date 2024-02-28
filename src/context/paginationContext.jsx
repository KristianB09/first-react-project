import { createContext } from "react";
import { useParseData } from "../hooks/getDataHook.js";
import PropTypes from "prop-types";

export const CardsContext = createContext({
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

CardsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
