export const ClientDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
          Client portal
        </p>
        <h1 className="mt-2 text-3xl font-bold text-neutral-950">
          My legal matters
        </h1>
        <p className="mt-2 text-neutral-600">
          Track your active cases, upcoming hearings, shared files, and pending
          invoices.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Active cases", "3"],
          ["Next hearing", "Today"],
          ["Shared documents", "18"],
          ["Pending invoices", "2"],
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
