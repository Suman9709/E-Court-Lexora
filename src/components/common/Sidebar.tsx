import type { ComponentType } from "react";
import { NavLink } from "react-router";
import {
  Bot,
  CalendarDays,
  ClipboardList,
  CreditCard,
  FileText,
  FolderKanban,
  LayoutDashboard,
  MessageSquareText,
  Settings,
  ShieldCheck,
  User,
  UserCog,
  Users,
} from "lucide-react";

export type UserRole = "client" | "staff" | "admin";

type MenuItem = {
  name: string;
  path: string;
  icon: ComponentType<{ size?: number }>;
};

const roleLabels: Record<UserRole, string> = {
  client: "Client Portal",
  staff: "Staff Workspace",
  admin: "Admin Console",
};

const roleMenuItems: Record<UserRole, MenuItem[]> = {
  client: [
    { name: "Dashboard", path: "/client/dashboard", icon: LayoutDashboard },
    { name: "My Cases", path: "/client/cases", icon: FolderKanban },
    { name: "Hearings", path: "/client/hearings", icon: CalendarDays },
    { name: "Documents", path: "/client/documents", icon: FileText },
    { name: "Invoices", path: "/client/invoices", icon: CreditCard },
    { name: "Messages", path: "/client/messages", icon: MessageSquareText },
    { name: "Profile", path: "/client/profile", icon: User },
  ],
  staff: [
    { name: "Dashboard", path: "/staff/dashboard", icon: LayoutDashboard },
    { name: "Assigned Cases", path: "/staff/cases", icon: FolderKanban },
    { name: "Clients", path: "/staff/clients", icon: Users },
    { name: "Tasks", path: "/staff/tasks", icon: ClipboardList },
    { name: "Hearings", path: "/staff/hearings", icon: CalendarDays },
    { name: "Documents", path: "/staff/documents", icon: FileText },
    { name: "Profile", path: "/staff/profile", icon: User },
  ],
  admin: [
    { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Clients", path: "/admin/clients", icon: Users },
    { name: "Cases", path: "/admin/cases", icon: FolderKanban },
    { name: "Hearings", path: "/admin/hearings", icon: CalendarDays },
    { name: "Documents", path: "/admin/documents", icon: FileText },
    { name: "Tasks", path: "/admin/tasks", icon: ClipboardList },
    { name: "Staff", path: "/admin/staff", icon: UserCog },
    { name: "Billing", path: "/admin/billing", icon: CreditCard },
    { name: "AI Assistant", path: "/admin/ai", icon: Bot },
    { name: "Settings", path: "/admin/settings", icon: Settings },
  ],
};

type SidebarProps = {
  role: UserRole;
};

export const Sidebar = ({ role }: SidebarProps) => {
  const menuItems = roleMenuItems[role];

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r border-neutral-200 bg-white px-4 py-6">
      <div className="mb-8 flex items-center gap-3">
        <img
          src="/lexora_Logo.png"
          alt="Lexora"
          className="h-11 w-11 object-contain"
        />

        <div>
          <h1 className="text-xl font-bold text-neutral-950">Lexora</h1>
          <p className="text-xs text-neutral-500">{roleLabels[role]}</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-md px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-neutral-950 text-white"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950"
                }`
              }
            >
              <Icon size={19} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      <div className="border-t border-neutral-200 pt-4 text-xs text-neutral-500">
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} />
          Firm data scoped by workspace
        </div>
      </div>
    </aside>
  );
};

