import { useContext } from "react";
import { CardsContext } from "./paginationContext";

export function useCards() {
  return useContext(CardsContext);
}
