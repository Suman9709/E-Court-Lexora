import { Link } from "react-router";
import {
  CalendarDays,
  FileText,
  FolderKanban,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const modules = [
  { title: "Client records", icon: Users },
  { title: "Case tracking", icon: FolderKanban },
  { title: "Hearing calendar", icon: CalendarDays },
  { title: "Document vault", icon: FileText },
  { title: "Billing", icon: ReceiptText },
  { title: "AI assistance", icon: Sparkles },
];

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/lexora_Logo.png"
              alt="Lexora"
              className="h-10 w-10 object-contain"
            />
            <div>
              <p className="text-lg font-bold leading-5">Lexora</p>
              <p className="text-xs text-neutral-500">Legal Practice OS</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-600 md:flex">
            <a href="#modules" className="hover:text-neutral-950">
              Modules
            </a>
            <a href="#security" className="hover:text-neutral-950">
              Security
            </a>
            <a href="#roles" className="hover:text-neutral-950">
              Roles
            </a>
          </nav>

          <Link
            to="/login"
            className="rounded-md bg-neutral-950 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
          >
            Login
          </Link>
        </div>
      </header>

      <main>
        <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              For Indian lawyers and small law firms
            </p>
            <h1 className="max-w-3xl text-5xl font-bold leading-tight text-neutral-950 lg:text-6xl">
              Lexora
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
              A simple SaaS workspace to manage clients, cases, hearings,
              documents, tasks, billing, and AI-assisted legal preparation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/login"
                className="rounded-md bg-neutral-950 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Open Workspace
              </Link>
              <a
                href="#modules"
                className="rounded-md border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-50"
              >
                View Modules
              </a>
            </div>
          </div>

          <div className="border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex justify-center border-b border-neutral-200 pb-5">
              <img
                src="/lexora_Logo.png"
                alt="Lexora legal practice management"
                className="h-44 w-44 object-contain"
              />
            </div>
            <div className="border-b border-neutral-200 pb-4">
              <p className="text-sm font-semibold text-neutral-950">
                Today in Workspace
              </p>
              <p className="text-sm text-neutral-500">
                Live product direction for the MVP
              </p>
            </div>
            <div className="grid gap-3 py-5">
              {[
                "4 hearings scheduled today",
                "12 active cases require updates",
                "7 documents recently uploaded",
                "3 invoices pending collection",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-md border border-neutral-200 px-4 py-3"
                >
                  <span className="text-sm font-medium text-neutral-700">
                    {item}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-neutral-950" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="modules" className="border-y border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <div className="mb-8 max-w-2xl">
              <h2 className="text-3xl font-bold text-neutral-950">
                Core MVP modules
              </h2>
              <p className="mt-3 text-neutral-600">
                Start with the daily workflow lawyers actually repeat: client
                intake, case tracking, hearings, files, tasks, and payments.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {modules.map((module) => {
                const Icon = module.icon;

                return (
                  <div
                    key={module.title}
                    className="rounded-md border border-neutral-200 bg-white p-5"
                  >
                    <Icon size={22} className="mb-4 text-neutral-950" />
                    <h3 className="font-semibold text-neutral-950">
                      {module.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="security" className="mx-auto max-w-7xl px-6 py-14">
          <div className="flex flex-col gap-6 border border-neutral-200 p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-neutral-950">
                Built around firm-level privacy
              </h2>
              <p className="mt-2 max-w-3xl text-neutral-600">
                Every client, case, document, task, hearing, invoice, and audit
                event should be scoped by law firm workspace.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-neutral-950">
              <ShieldCheck size={20} />
              RBAC ready
            </div>
          </div>
        </section>

        <section id="roles" className="border-t border-neutral-200 bg-neutral-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <h2 className="text-2xl font-bold">Role-based access</h2>
            <p className="mt-3 max-w-2xl text-neutral-300">
              Clients, staff, and admins should land in different workspaces
              with different navigation and permissions.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};
