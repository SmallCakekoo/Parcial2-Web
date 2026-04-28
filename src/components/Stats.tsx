export const StatBox = ({ label, value }: { label: string; value: number }) => {
  return (
    <div>
      <p>
        Hay {value}: {label} Salas
      </p>
    </div>
  );
};
