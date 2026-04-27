// tengo k importar react por tipado
import React, { createContext, useState, type PropsWithChildren } from "react";
import { initialRooms } from "../data/data";

export interface Room {
  id: number;
  name: string;
  type: "meeting room" | "private office" | "shared desk" | "creative room";
  capacity: number;
  location: string;
  pricePerHour: number;
  available: boolean;
  isReserved?: boolean; // el ? es tipado opcional
}

export interface Filters {
  type: string;
  available: string;
}

export interface RoomsContextType {}

export const RoomsContext = createContext<RoomsContextType | null>(null);

export function AppContextProvider({ children }: PropsWithChildren) {
  const [roomsList, setRoomsList] = useState<Room[]>(() =>
    (initialRooms as Room[]).map((room) => ({ ...room, isReserved: false })),
  );
  // estado derivado
  const roomsReserved: Room[] = roomsList.filter((room) => room.isReserved);

const [filters, setFilters] = useState<Filters>(
    
)

  // Funciones
  const handleRoomsReserved = (room: Room[]): void => {
    setRoomsList((prev) =>
      prev.map((room) =>
        room.id === room.id ? { ...room, isReserved: !room.isReserved } : room,
      ),
    );
  };

  return (
    <RoomsContext.Provider
      value={{ roomsList, setRoomsList, handleRoomsReserved }}
    >
      {children}
    </RoomsContext.Provider>
  );
}
