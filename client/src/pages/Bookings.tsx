import { motion } from "framer-motion";
import { Clock, CheckCircle2, AlertCircle, ChevronRight, Calendar, Filter } from "lucide-react";
import { categories } from "@/lib/mockData";

export default function Bookings() {
  const activeBookings = [
    {
      id: "B-2931",
      title: "Premium Fahrzeugaufbereitung",
      date: "Heute, 14:00 Uhr",
      provider: "Markus Weber",
      status: "Anfahrt",
      statusColor: "text-blue-600 bg-blue-50",
      image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=200",
      category: "vehicle"
    },
    {
      id: "B-2930",
      title: "Professionelle Hausreinigung",
      date: "18. Jan, 09:00 Uhr",
      provider: "Sarah Meyer",
      status: "Bestätigt",
      statusColor: "text-green-600 bg-green-50",
      image: "https://images.unsplash.com/photo-1581578731117-104f2a417954?w=200",
      category: "home"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Header */}
      <div className="bg-white px-6 pt-16 pb-12 rounded-b-[3rem] shadow-sm">
        <div className="flex justify-between items-center max-w-xl mx-auto">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Meine Buchungen</h1>
            <p className="text-sm text-gray-500 font-medium">Ihre anstehenden Dienstleistungen</p>
          </div>
          <button className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="px-6 py-8 max-w-xl mx-auto space-y-6">
        {/* Status Tracker Widget */}
        <div className="bg-[#0F172A] p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          <div className="flex items-center gap-4 mb-6">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-ping" />
            <h3 className="font-bold text-lg">Aktueller Status</h3>
          </div>
          <p className="text-white/60 text-xs font-black uppercase tracking-widest mb-2">In Anfahrt</p>
          <h4 className="text-2xl font-black mb-6">Premium Fahrzeugaufbereitung</h4>
          <div className="flex gap-1 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="w-3/4 h-full bg-primary" />
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xs text-white/60">Ankunft in ca. 12 Min</span>
            <button className="text-[10px] font-black uppercase tracking-widest bg-white/10 px-4 py-2 rounded-xl">Karte öffnen</button>
          </div>
        </div>

        {/* List of Bookings */}
        <div className="space-y-4">
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Kommende Termine</h3>
          {activeBookings.map((booking, idx) => (
            <motion.div
              key={booking.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-5 rounded-[2rem] shadow-sm border border-gray-100 flex gap-4 group hover:shadow-xl transition-all active:scale-98"
            >
              <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                <img src={booking.image} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <div className="flex justify-between items-start">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${booking.statusColor}`}>
                      {booking.status}
                    </span>
                    <span className="text-[10px] text-gray-400 font-bold">{booking.id}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mt-1 leading-snug">{booking.title}</h4>
                </div>
                <div className="flex items-center gap-3 text-[10px] text-gray-500 font-bold">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{booking.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                    <span>{booking.provider}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Help Banner */}
        <div className="bg-blue-50 border border-blue-100 p-6 rounded-[2rem] flex gap-4 items-center">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
            <AlertCircle className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h5 className="font-bold text-gray-900 text-sm">Brauchen Sie Hilfe?</h5>
            <p className="text-[10px] text-gray-500 font-medium leading-relaxed">
              Kontaktieren Sie unseren 24/7 Support für Fragen zu Ihren Buchungen.
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
