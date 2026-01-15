import { useState } from "react";
import { mockListings, categories } from "@/lib/mockData";
import { MapPin, Calendar, Clock, ArrowRight, Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredListings = selectedCategory
    ? mockListings.filter((l) => l.category === selectedCategory)
    : mockListings;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="bg-primary px-6 pt-12 pb-8 rounded-b-[2rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-blue-100 text-sm font-medium mb-1">Hoş Geldin,</p>
              <h1 className="text-2xl font-bold text-white">Hangi Hizmete <br/>İhtiyacın Var?</h1>
            </div>
            <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm hover:bg-white/30 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              className="bg-white border-none h-12 pl-10 rounded-2xl shadow-sm text-base placeholder:text-gray-400" 
              placeholder="Hizmet ara (örn. Temizlik)" 
            />
          </div>
        </div>
      </header>

      <div className="px-6 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900">Kategoriler</h2>
          <button 
            onClick={() => setSelectedCategory(null)}
            className="text-primary text-sm font-medium"
          >
            Tümünü Gör
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
              className={`relative overflow-hidden rounded-2xl p-4 h-32 flex flex-col justify-between transition-all duration-300 shadow-sm border border-transparent hover:scale-[1.02] active:scale-95 text-left ${
                selectedCategory === cat.id ? 'ring-2 ring-primary ring-offset-2' : 'bg-white'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${cat.colorClass}`}>
                <cat.icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-gray-900 font-bold block">{cat.name}</span>
                <span className="text-xs text-gray-500">120+ İlan</span>
              </div>
              {/* Subtle Gradient Background */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${cat.gradient} opacity-5 rounded-full blur-2xl -mr-8 -mt-8`} />
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 mt-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          {selectedCategory ? `${categories.find(c => c.id === selectedCategory)?.name} İlanları` : "Popüler İlanlar"}
        </h2>
        
        <div className="space-y-4">
          {filteredListings.map((listing) => (
            <div key={listing.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md mb-2 inline-block">
                      {categories.find(c => c.id === listing.category)?.name}
                    </span>
                    <span className="font-bold text-gray-900 text-lg">{listing.price}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 line-clamp-1">{listing.title}</h3>
                </div>
                
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span className="truncate max-w-[80px]">{listing.address}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{listing.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
