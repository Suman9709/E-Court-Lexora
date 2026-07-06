export const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
          Admin console
        </p>
        <h1 className="mt-2 text-3xl font-bold text-neutral-950">
          Firm overview
        </h1>
        <p className="mt-2 text-neutral-600">
          Manage clients, cases, staff, billing, documents, and AI tools for the
          complete workspace.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Clients", "42"],
          ["Active cases", "86"],
          ["Pending tasks", "17"],
          ["Pending dues", "Rs. 92k"],
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
