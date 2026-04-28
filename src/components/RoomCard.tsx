import { useContext } from "react";
import { RoomsContext } from "../context/RoomsContext";
import type { RoomsContextType } from "../context/RoomsContext";
import type { Room } from "../context/RoomsContext";

export const RoomCard = ({ room }: { room: Room }) => {
  const context = useContext(RoomsContext);
  if (!context) return null; // para no tipar lo de arriba

  const { handleRoomsReserved } =
    context as RoomsContextType;

  return (
    <div>
        <div>
      <h3>{room.name}</h3>
      <p>
        Type: {room.type} | Capacity: {room.capacity} | Location: {room.location}
      </p>

      <button onClick={() => handleRoomsReserved(room)}>
        {room.isReserved ? "Quitar Reserva" : "Reservar"}
      </button>
      </div>

    </div>
  );
};
