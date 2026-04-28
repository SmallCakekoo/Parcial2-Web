import React, { useContext } from "react";
import { RoomsContext } from "../context/RoomsContext";
import type { RoomsContextType } from "../context/RoomsContext";

export const FiltersBar = () => {
  const context = useContext(RoomsContext);
  const { filters, setFilters } = context as RoomsContextType;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const clearFilter = (): void =>
    setFilters({
      type: "",
      available: "",
    });

  return (
    <div>
        <select>
            <option value=""></option>
        </select>
      <button type="button" onClick={clearFilter}>
        Clear filters
      </button>
    </div>
  );
};
