export const StatBox = ({ label, value }: { label: string; value: number }) => {
  return (
    <div>
      <p>
        Hay {label} : {value} Salas
      </p>
    </div>
  );
};
