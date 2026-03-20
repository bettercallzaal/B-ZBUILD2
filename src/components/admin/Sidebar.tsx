"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: "\u2318" },
  { href: "/admin/members", label: "Members", icon: "\uD83D\uDC65" },
  { href: "/admin/content", label: "Content", icon: "\uD83D\uDCDD" },
  { href: "/admin/integrations", label: "Integrations", icon: "\uD83D\uDD17" },
  { href: "/admin/events", label: "Events", icon: "\uD83D\uDCC5" },
  { href: "/admin/learning", label: "Learning", icon: "\uD83D\uDCDA" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-[#0a0a0a] border-r border-white/10 p-6">
      <Link href="/" className="block mb-8">
        <h2 className="text-lg font-bold text-[#fdcb6e]">B&Z Admin</h2>
      </Link>
      <nav className="space-y-1">
        {navItems.map((item) => {
          const isActive =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive
                  ? "bg-white/10 text-[#fdcb6e]"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
