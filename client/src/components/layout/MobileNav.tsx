import { Home, Map, CalendarCheck2, MessageSquare, User } from "lucide-react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function MobileNav() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", icon: Home, label: "Entdecken" },
    { href: "/map", icon: Map, label: "Karte" },
    { href: "/bookings", icon: CalendarCheck2, label: "Buchungen" },
    { href: "/assistant", icon: MessageSquare, label: "Support" },
    { href: "/settings", icon: User, label: "Profil" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-t border-gray-100 pb-safe pt-3 px-4 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] h-[88px]">
      <div className="flex items-center justify-around max-w-lg mx-auto h-full">
        {navItems.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <a className="flex flex-col items-center gap-1 group relative transition-all active:scale-90">
                <div className={cn(
                  "p-2 rounded-2xl transition-all duration-300 relative overflow-hidden",
                  isActive ? "bg-primary text-white shadow-lg shadow-primary/25" : "text-gray-400"
                )}>
                  <item.icon className={cn("w-6 h-6", isActive && "stroke-[2.5px]")} />
                  {isActive && (
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  )}
                </div>
                <span className={cn(
                  "text-[10px] font-bold transition-colors uppercase tracking-widest",
                  isActive ? "text-primary" : "text-gray-400"
                )}>
                  {item.label}
                </span>
                {isActive && (
                  <div className="absolute -top-1 w-1 h-1 rounded-full bg-primary" />
                )}
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
