import { Car, Snowflake, Home, Briefcase } from "lucide-react";

export type Category = {
  id: string;
  name: string;
  icon: any;
  color: string;
  markerColor: string;
  description: string;
};

export type Listing = {
  id: string;
  title: string;
  category: string;
  price: string;
  address: string;
  date: string;
  image: string;
  coordinates: [number, number];
  rating: number;
  reviews: number;
};

export const categories: Category[] = [
  { 
    id: "vehicle", 
    name: "Fahrzeugservice", 
    icon: Car, 
    color: "hsl(45 93% 47%)",
    markerColor: "#f59e0b",
    description: "Reparatur & Pflege"
  },
  { 
    id: "home", 
    name: "Hausreinigung", 
    icon: Home, 
    color: "hsl(170 70% 40%)",
    markerColor: "#10b981",
    description: "Profi-Reinigung"
  },
  { 
    id: "winter", 
    name: "Winterdienst", 
    icon: Snowflake, 
    color: "hsl(270 50% 50%)",
    markerColor: "#8b5cf6",
    description: "Schneeräumung"
  },
  { 
    id: "office", 
    name: "Büroservice", 
    icon: Briefcase, 
    color: "hsl(210 80% 60%)",
    markerColor: "#3b82f6",
    description: "Business-Lösungen"
  },
];

export const mockListings: Listing[] = [
  {
    id: "1",
    title: "Premium Fahrzeugaufbereitung",
    category: "vehicle",
    price: "89 €",
    address: "Berlin-Mitte",
    date: "Heute, 14:00",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&auto=format&fit=crop&q=60",
    coordinates: [52.5200, 13.4050],
    rating: 4.9,
    reviews: 124
  },
  {
    id: "2",
    title: "Professionelle Hausreinigung",
    category: "home",
    price: "35 €/Std",
    address: "Hamburg-Eppendorf",
    date: "Morgen, 09:00",
    image: "https://images.unsplash.com/photo-1581578731117-104f2a417954?w=800&auto=format&fit=crop&q=60",
    coordinates: [53.5511, 9.9937],
    rating: 4.8,
    reviews: 89
  },
  {
    id: "3",
    title: "Schneeräumung & Streudienst",
    category: "winter",
    price: "150 €",
    address: "München-Solln",
    date: "17. Jan, 07:00",
    image: "https://images.unsplash.com/photo-1483664852095-d6cc6870705d?w=800&auto=format&fit=crop&q=60",
    coordinates: [48.1351, 11.5820],
    rating: 5.0,
    reviews: 45
  },
  {
    id: "4",
    title: "IT-Büroreinigung Express",
    category: "office",
    price: "240 €",
    address: "Frankfurt am Main",
    date: "Wochenende",
    image: "https://images.unsplash.com/photo-1616169123896-189f3152750d?w=800&auto=format&fit=crop&q=60",
    coordinates: [50.1109, 8.6821],
    rating: 4.7,
    reviews: 67
  }
];
