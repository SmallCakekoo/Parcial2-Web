import { useContext } from "react";
import { RoomsContext } from "../context/RoomsContext";
import type { RoomsContextType } from "../context/RoomsContext";
import { StatBox } from "../components/Stats";
import { RoomCard } from "../components/RoomCard";

export const SummaryPage = () => {
  const context = useContext(RoomsContext);
  if (!context) return null; // para no tipar lo de arriba

  const { roomsList, roomsReserved } = context as RoomsContextType;

  const total = roomsList.length;
  const reservedRooms = roomsReserved.length;
  // const available, resrved

  return (
    <div>
      <StatBox label="total" value={total} />
      <StatBox label="Reservada" value={reservedRooms} />

      <h3>Reservadas ({roomsReserved.length})</h3>
      {roomsReserved.length === 0 ? (
           <p>No hay salas</p>
      ) : (
        <div>
             {roomsReserved.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
        </div>
      )}
    </div>
  );
};
