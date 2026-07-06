type ModulePageProps = {
  title: string;
  eyebrow: string;
  description: string;
};

export const ModulePage = ({ title, eyebrow, description }: ModulePageProps) => {
  return (
    <div className="rounded-md border border-neutral-200 bg-white p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
        {eyebrow}
      </p>
      <h1 className="mt-2 text-3xl font-bold text-neutral-950">{title}</h1>
      <p className="mt-2 max-w-3xl text-neutral-600">{description}</p>
    </div>
  );
};
