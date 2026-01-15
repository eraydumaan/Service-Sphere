import { Car, Snowflake, Home, Briefcase, MapPin, Search } from "lucide-react";

export type Category = {
  id: string;
  name: string;
  icon: any;
  colorClass: string; // Tailwind class for text/bg
  markerClass: string; // CSS class for map marker
  gradient: string;
};

export type Listing = {
  id: string;
  title: string;
  category: string;
  price: string;
  address: string;
  date: string;
  image: string;
  coordinates: [number, number]; // [lat, lng]
};

export const categories: Category[] = [
  { 
    id: "vehicle", 
    name: "Araç Bakım", 
    icon: Car, 
    colorClass: "text-amber-500 bg-amber-50", 
    markerClass: "marker-vehicle",
    gradient: "from-amber-500 to-orange-500"
  },
  { 
    id: "home", 
    name: "Ev Temizliği", 
    icon: Home, 
    colorClass: "text-emerald-500 bg-emerald-50", 
    markerClass: "marker-home",
    gradient: "from-emerald-500 to-teal-500"
  },
  { 
    id: "winter", 
    name: "Kış Hizmeti", 
    icon: Snowflake, 
    colorClass: "text-purple-500 bg-purple-50", 
    markerClass: "marker-winter",
    gradient: "from-purple-500 to-indigo-500"
  },
  { 
    id: "office", 
    name: "Ofis / Sınıf", 
    icon: Briefcase, 
    colorClass: "text-blue-500 bg-blue-50", 
    markerClass: "marker-office",
    gradient: "from-blue-500 to-cyan-500"
  },
];

export const mockListings: Listing[] = [
  {
    id: "1",
    title: "Detaylı Araç Temizliği",
    category: "vehicle",
    price: "₺500",
    address: "Şişli, İstanbul",
    date: "Bugün, 14:00",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    coordinates: [41.0529, 28.9877],
  },
  {
    id: "2",
    title: "Günlük Ev Temizliği",
    category: "home",
    price: "₺1200",
    address: "Kadıköy, İstanbul",
    date: "Yarın, 09:00",
    image: "https://images.unsplash.com/photo-1581578731117-104f2a417954?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    coordinates: [40.9829, 29.0277],
  },
  {
    id: "3",
    title: "Kar Küreme Hizmeti",
    category: "winter",
    price: "₺2000",
    address: "Levent, İstanbul",
    date: "17 Ocak, 07:00",
    image: "https://images.unsplash.com/photo-1483664852095-d6cc6870705d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    coordinates: [41.0776, 29.0135],
  },
  {
    id: "4",
    title: "Ofis Dezenfeksiyonu",
    category: "office",
    price: "₺3500",
    address: "Maslak, İstanbul",
    date: "Haftasonu",
    image: "https://images.unsplash.com/photo-1616169123896-189f3152750d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    coordinates: [41.1116, 29.0225],
  },
  {
    id: "5",
    title: "Lastik Değişimi",
    category: "vehicle",
    price: "₺800",
    address: "Ümraniye, İstanbul",
    date: "Bugün, 16:30",
    image: "https://images.unsplash.com/photo-1596720165922-29e843c08b5e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    coordinates: [41.0256, 29.1130],
  }
];
