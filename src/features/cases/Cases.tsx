export const Cases = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
          Case management
        </p>
        <h1 className="mt-2 text-3xl font-bold text-neutral-950">Cases</h1>
        <p className="mt-2 text-neutral-600">
          Track case number, court, parties, priority, status, and next hearing.
        </p>
      </div>

      <div className="overflow-hidden rounded-md border border-neutral-200 bg-white">
        <div className="grid grid-cols-4 border-b border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-500">
          <span>Case</span>
          <span>Court</span>
          <span>Status</span>
          <span>Next hearing</span>
        </div>
        {[
          ["CIV/128/2026", "District Court", "Active", "08 Jul 2026"],
          ["CRL/044/2026", "Sessions Court", "Evidence", "12 Jul 2026"],
          ["ARB/091/2026", "Commercial Court", "Filing", "18 Jul 2026"],
        ].map(([caseNo, court, status, hearing]) => (
          <div
            key={caseNo}
            className="grid grid-cols-4 border-b border-neutral-100 px-5 py-4 text-sm last:border-b-0"
          >
            <span className="font-semibold text-neutral-950">{caseNo}</span>
            <span className="text-neutral-600">{court}</span>
            <span className="text-neutral-600">{status}</span>
            <span className="text-neutral-600">{hearing}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
