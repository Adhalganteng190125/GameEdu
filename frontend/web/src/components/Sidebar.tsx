import { NavLink } from "react-router-dom";

interface NavItem {
  to: string;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { to: "/", label: "Beranda", icon: "🏠" },
  { to: "/bank-soal", label: "Bank soal", icon: "📋" },
  { to: "/sesi-game", label: "Sesi game", icon: "🎮" },
  { to: "/kelas-siswa", label: "Kelas & siswa", icon: "👥" },
  { to: "/laporan", label: "Laporan", icon: "📊" },
  { to: "/pengaturan", label: "Pengaturan", icon: "⚙️" },
];

export function Sidebar() {
  return (
    <aside className="flex h-full w-64 shrink-0 flex-col gap-1 border-r border-slate-100 bg-white px-4 py-6">
      <div className="mb-6 flex items-center gap-2 px-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-lg font-bold text-white">
          G
        </div>
        <span className="text-lg font-bold text-slate-800">GameEdu</span>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-brand-50 text-brand-700 ring-1 ring-brand-100"
                  : "text-slate-600 hover:bg-slate-50"
              }`
            }
          >
            <span aria-hidden>{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
