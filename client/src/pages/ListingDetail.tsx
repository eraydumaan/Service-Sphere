import { motion } from "framer-motion";
import { CheckCircle2, Clock, MapPin, ArrowLeft, ShieldCheck, Star, Heart, Share2, CreditCard, ChevronRight } from "lucide-react";
import { Link, useRoute } from "wouter";
import { mockListings, categories } from "@/lib/mockData";
import { Button } from "@/components/ui/button";

export default function ListingDetail() {
  const [, params] = useRoute("/listing/:id");
  const listing = mockListings.find(l => l.id === params?.id) || mockListings[0];
  const cat = categories.find(c => c.id === listing.category);

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* Hero Image Section */}
      <div className="relative h-[45vh] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          src={listing.image} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        
        {/* Top Actions */}
        <div className="absolute top-12 left-6 right-6 flex justify-between items-center">
          <Link href="/">
            <button className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </Link>
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Floating Price Tag */}
        <div className="absolute bottom-6 left-6">
          <div className="bg-primary px-6 py-3 rounded-2xl shadow-2xl">
            <span className="text-white font-black text-2xl">{listing.price}</span>
            <span className="text-white/70 text-xs ml-1 font-bold">Inkl. MwSt.</span>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-8 relative z-10 bg-white rounded-t-[3rem] pt-8">
        <div className="max-w-xl mx-auto">
          {/* Service Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-50 text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg">
                  {cat?.name}
                </span>
                <div className="flex items-center gap-1 bg-green-50 text-green-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">
                  <ShieldCheck className="w-3 h-3" />
                  ID Verifiziert
                </div>
              </div>
              <h1 className="text-2xl font-black text-gray-900 leading-tight">{listing.title}</h1>
            </div>
          </div>

          {/* Provider Stats */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-3xl mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gray-200 overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-900">Markus Weber</h4>
              <div className="flex items-center gap-1 mt-0.5">
                <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                <span className="text-xs font-black">{listing.rating}</span>
                <span className="text-[10px] text-gray-400">({listing.reviews} Bewertungen)</span>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="rounded-2xl">
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-3xl border border-gray-100 bg-white shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-primary flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] text-gray-400 font-black uppercase tracking-widest">Zone</span>
                <span className="text-sm font-bold text-gray-900">{listing.address}</span>
              </div>
            </div>
            <div className="p-4 rounded-3xl border border-gray-100 bg-white shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] text-gray-400 font-black uppercase tracking-widest">Dauer</span>
                <span className="text-sm font-bold text-gray-900">~ 2-3 Std</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg font-black text-gray-900 mb-4 uppercase tracking-tight">Leistungsbeschreibung</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Unser Service umfasst die komplette professionelle Abwicklung nach höchsten Qualitätsstandards. Wir garantieren Pünktlichkeit, Gründlichkeit ve German Engineering. Alle Arbeitsmittel werden von uns gestellt.
            </p>
            <ul className="mt-4 space-y-3">
              {['Haftpflichtversichert bis 5 Mio €', 'TÜV-geprüfte Reinigunsmittel', 'Inklusive Anfahrt in Berlin'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Security Notice */}
          <div className="p-6 rounded-[2rem] bg-amber-50 border border-amber-100 mb-8 flex gap-4">
            <CreditCard className="w-8 h-8 text-amber-600 shrink-0" />
            <div>
              <h5 className="font-bold text-amber-900 text-sm">Sicher bezahlen</h5>
              <p className="text-xs text-amber-700 mt-1">
                Der Betrag wird erst freigegeben, wenn Sie mit der Leistung zufrieden sind.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Booking Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-2xl border-t border-gray-100 p-6 pb-safe z-50">
        <div className="max-w-xl mx-auto flex gap-4 items-center">
          <div className="hidden sm:block">
            <span className="block text-xs text-gray-400 font-black uppercase tracking-widest">Gesamtpreis</span>
            <span className="text-2xl font-black text-gray-900">{listing.price}</span>
          </div>
          <Button className="flex-1 h-16 rounded-3xl text-lg font-black uppercase tracking-widest shadow-2xl shadow-primary/30">
            Termin anfragen
          </Button>
        </div>
      </div>
    </div>
  );
}
