import { useState } from "react";
import { mockListings, categories } from "@/lib/mockData";
import { MapPin, Star, Search, Bell, SlidersHorizontal, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredListings = selectedCategory
    ? mockListings.filter((l) => l.category === selectedCategory)
    : mockListings;

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-28">
      {/* Premium Header */}
      <header className="bg-[#0F172A] px-6 pt-16 pb-12 rounded-b-[3rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px] -ml-24 -mb-24" />
        
        <div className="relative z-10 max-w-xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <div>
                <h1 className="text-white font-bold text-xl tracking-tight">Hizmet<span className="text-primary">Pro</span></h1>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">TÜV Geprüft</span>
                </div>
              </div>
            </div>
            <button className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white backdrop-blur-md hover:bg-white/20 transition-all border border-white/10">
              <Bell className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold text-white leading-tight">
              Premium Services <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">nach deutschem Standard</span>
            </h2>
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors w-5 h-5" />
              <Input 
                className="bg-white/10 border-white/10 h-14 pl-12 pr-12 rounded-2xl text-white placeholder:text-gray-500 focus-visible:ring-primary backdrop-blur-xl" 
                placeholder="Welchen Service suchen Sie?" 
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-primary rounded-xl text-white shadow-lg">
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Categories Horizontal Scroll */}
      <div className="px-6 -mt-8 relative z-20 overflow-hidden">
        <div className="flex gap-4 overflow-x-auto pb-4 pt-2 scrollbar-hide snap-x">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
              className={`snap-center shrink-0 w-40 rounded-3xl p-5 flex flex-col items-start gap-4 transition-all shadow-xl border ${
                selectedCategory === cat.id 
                  ? 'bg-primary border-primary text-white shadow-primary/30' 
                  : 'bg-white border-transparent text-gray-900'
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                selectedCategory === cat.id ? 'bg-white/20' : 'bg-gray-50'
              }`}>
                <cat.icon className={`w-6 h-6 ${selectedCategory === cat.id ? 'text-white' : 'text-primary'}`} />
              </div>
              <div>
                <span className="font-bold text-sm block leading-tight">{cat.name}</span>
                <span className={`text-[10px] mt-1 block font-medium uppercase tracking-wider ${
                  selectedCategory === cat.id ? 'text-white/70' : 'text-gray-400'
                }`}>
                  {cat.description}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="px-6 mt-10 max-w-xl mx-auto">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h3 className="text-2xl font-black text-gray-900 tracking-tight">Top-Angebote</h3>
            <p className="text-gray-500 text-sm font-medium">Verifizierte Fachkräfte in Ihrer Nähe</p>
          </div>
          <button className="text-primary font-bold text-sm hover:underline">Alle ansehen</button>
        </div>
        
        <div className="grid gap-6">
          <AnimatePresence mode="popLayout">
            {filteredListings.map((listing, index) => (
              <motion.div
                key={listing.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={listing.image} 
                    alt={listing.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="text-xs font-bold text-gray-900">{listing.rating}</span>
                    <span className="text-[10px] text-gray-400 font-medium">({listing.reviews})</span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <span className="text-white font-black text-xl">{listing.price}</span>
                    <div className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">
                      JETZT BUCHEN
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">
                      {categories.find(c => c.id === listing.category)?.name}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <div className="flex items-center gap-1 text-gray-400">
                      <MapPin className="w-3 h-3" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">{listing.address}</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors">
                    {listing.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
