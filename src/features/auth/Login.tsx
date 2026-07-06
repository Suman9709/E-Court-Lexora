

import { Link } from "react-router";
import { BriefcaseBusiness, ShieldCheck, UserRound } from "lucide-react";

const roleCards = [
  {
    role: "Client",
    path: "/client/dashboard",
    description: "View case updates, hearings, invoices, and shared documents.",
    icon: UserRound,
  },
  {
    role: "Staff",
    path: "/staff/dashboard",
    description: "Handle assigned cases, tasks, hearings, and document work.",
    icon: BriefcaseBusiness,
  },
  {
    role: "Admin",
    path: "/admin/dashboard",
    description: "Manage the full firm workspace, staff, billing, and AI tools.",
    icon: ShieldCheck,
  },
];

export const Login = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/lexora_Logo.png"
              alt="Lexora"
              className="h-10 w-10 object-contain"
            />
            <div>
              <p className="font-bold leading-5">Lexora</p>
              <p className="text-xs text-neutral-500">Secure workspace</p>
            </div>
          </Link>
          <Link
            to="/"
            className="text-sm font-semibold text-neutral-600 hover:text-neutral-950"
          >
            Back home
          </Link>
        </div>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl flex-col justify-center px-6 py-12">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Frontend demo login
          </p>
          <h1 className="text-4xl font-bold text-neutral-950">
            Choose your workspace access
          </h1>
          <p className="mt-3 text-neutral-600">
            This is a frontend-only setup. Later, your backend will decide this
            role from the logged-in user account.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {roleCards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.role}
                to={card.path}
                className="group rounded-md border border-neutral-200 bg-white p-5 transition hover:border-neutral-950 hover:shadow-sm"
              >
                <Icon size={24} className="text-neutral-950" />
                <h2 className="mt-5 text-xl font-bold text-neutral-950">
                  {card.role}
                </h2>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {card.description}
                </p>
                <p className="mt-5 text-sm font-semibold text-neutral-950">
                  Continue as {card.role}
                </p>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
};
