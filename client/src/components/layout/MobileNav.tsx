import { Home, Map, PlusCircle, MessageSquare, Settings } from "lucide-react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function MobileNav() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", icon: Home, label: "Ana Sayfa" },
    { href: "/map", icon: Map, label: "Harita" },
    { href: "/create", icon: PlusCircle, label: "İlan Ver", special: true },
    { href: "/assistant", icon: MessageSquare, label: "Asistan" },
    { href: "/settings", icon: Settings, label: "Ayarlar" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 pb-safe pt-2 px-6 shadow-[0_-5px_20px_rgba(0,0,0,0.03)] h-[84px] md:h-auto md:pb-4">
      <div className="flex items-center justify-between max-w-md mx-auto h-full pb-2">
        {navItems.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <a className="flex flex-col items-center gap-1 group w-12 cursor-pointer">
                {item.special ? (
                  <div className={cn(
                    "w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg transform transition-transform group-active:scale-95 mb-4 border-4 border-white",
                    isActive ? "bg-primary text-white" : "bg-primary text-white"
                  )}>
                    <item.icon className="w-6 h-6" strokeWidth={2.5} />
                  </div>
                ) : (
                  <>
                    <div className={cn(
                      "p-1.5 rounded-xl transition-all duration-300",
                      isActive ? "bg-primary/10 text-primary" : "text-gray-400 group-hover:text-primary/60"
                    )}>
                      <item.icon className={cn("w-6 h-6", isActive && "fill-current")} strokeWidth={isActive ? 2.5 : 2} />
                    </div>
                    <span className={cn(
                      "text-[10px] font-medium transition-colors",
                      isActive ? "text-primary" : "text-gray-400"
                    )}>
                      {item.label}
                    </span>
                  </>
                )}
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
