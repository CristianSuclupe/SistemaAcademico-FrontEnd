export const Records = () => {
  return (
    <section className="w-1/4 flex flex-col gap-y-10">
      <div>
        <h3 className="text-secondary font-semibold border-secondary border-b-[1px]">
          Pendientes
        </h3>
        <span className="text-sm text-secondary font-medium">Sin registro</span>
      </div>
      <div>
        <h3 className="text-secondary font-semibold border-secondary border-b-[1px]">
          Recientes
        </h3>
        <span className="text-sm text-secondary font-medium">Sin registro</span>
      </div>
    </section>
  );
};
