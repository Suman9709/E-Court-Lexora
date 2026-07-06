import { Link } from "react-router";
import { Bell, LogOut, Plus, Search } from "lucide-react";
import type { UserRole } from "./Sidebar";

const roleTitles: Record<UserRole, string> = {
  client: "Client Portal",
  staff: "Staff Workspace",
  admin: "Admin Console",
};

type NavbarProps = {
  role: UserRole;
};

export const Navbar = ({ role }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-10 flex min-h-16 items-center justify-between gap-4 border-b border-neutral-200 bg-white px-6">
      <div>
        <h2 className="text-lg font-semibold text-neutral-950">
          {roleTitles[role]}
        </h2>
        <p className="text-sm text-neutral-500">
          Manage legal work from one secure workspace
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button className="hidden h-10 items-center gap-2 rounded-md border border-neutral-200 px-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 md:flex">
          <Search size={17} />
          Search
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 text-neutral-700 hover:bg-neutral-50">
          <Bell size={18} />
        </button>
        {role !== "client" ? (
          <button className="flex h-10 items-center gap-2 rounded-md bg-neutral-950 px-4 text-sm font-medium text-white hover:bg-neutral-800">
            <Plus size={17} />
            New Case
          </button>
        ) : null}
        <Link
          to="/"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 text-neutral-700 hover:bg-neutral-50"
          aria-label="Log out"
        >
          <LogOut size={18} />
        </Link>
      </div>
    </header>
  );
};
