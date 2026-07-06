export const StaffDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
          Staff workspace
        </p>
        <h1 className="mt-2 text-3xl font-bold text-neutral-950">
          Assigned work
        </h1>
        <p className="mt-2 text-neutral-600">
          View tasks, hearings, clients, and documents assigned by the firm.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Open tasks", "9"],
          ["Hearings today", "4"],
          ["Document reviews", "6"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-md border border-neutral-200 bg-white p-5">
            <p className="text-sm text-neutral-500">{label}</p>
            <p className="mt-3 text-2xl font-bold text-neutral-950">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
