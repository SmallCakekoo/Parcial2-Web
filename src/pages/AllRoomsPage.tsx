import { useContext } from "react";
import { RoomsContext } from "../context/RoomsContext";
import type { RoomsContextType } from "../context/RoomsContext";
import type { Room } from "../context/RoomsContext";
import { FiltersBar } from "../components/FiltersBar"

export const AllRoomsPage = () => {
  const context = useContext(RoomsContext);
  if (!context) return null; // otra vez para no tipar lo de arriba

  const {roomsList, filters} = context as RoomsContextType;

  

    return(
  <></>      
    )
}