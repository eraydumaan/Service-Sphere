import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { mockListings, categories } from "@/lib/mockData";
import L from 'leaflet';
import { useEffect, useState } from 'react';
import "leaflet/dist/leaflet.css";
import { Star, MapPin, Navigation, Compass } from "lucide-react";

export default function MapPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-screen flex items-center justify-center bg-gray-900 text-white font-bold tracking-widest uppercase">System wird geladen...</div>;

  return (
    <div className="h-screen w-full relative pb-20 overflow-hidden">
      {/* Dynamic Header Overlay */}
      <div className="absolute top-6 left-6 right-6 z-[1000] flex flex-col gap-4">
        <div className="bg-white/80 backdrop-blur-2xl rounded-[2rem] p-6 shadow-2xl border border-white/20">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="font-black text-gray-900 text-xl tracking-tight">Hizmet<span className="text-primary">Pro</span> Map</h1>
              <p className="text-xs text-gray-500 font-medium">Verifizierte Dienstleister in Echtzeit</p>
            </div>
            <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white shadow-xl">
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
             {categories.map(cat => (
               <button key={cat.id} className="flex items-center gap-2 shrink-0 bg-white border border-gray-100 px-4 py-2 rounded-2xl shadow-sm hover:shadow-md transition-all active:scale-95 group">
                 <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.markerColor }}></div>
                 <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest group-hover:text-primary transition-colors">{cat.name}</span>
               </button>
             ))}
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="absolute bottom-32 right-6 z-[1000] flex flex-col gap-4">
        <button className="w-14 h-14 bg-white rounded-2xl shadow-2xl flex items-center justify-center text-gray-900 hover:bg-gray-50 active:scale-95 transition-all border border-gray-100">
          <Navigation className="w-6 h-6" />
        </button>
      </div>

      <MapContainer 
        center={[52.5200, 13.4050]} 
        zoom={12} 
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; CARTO'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        {mockListings.map((listing) => {
          const cat = categories.find(c => c.id === listing.category);
          
          const icon = L.divIcon({
            className: 'custom-div-icon',
            html: `
              <div class="relative group">
                <div class="absolute -inset-2 bg-${listing.category === 'vehicle' ? 'amber' : listing.category === 'home' ? 'emerald' : 'indigo'}-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div style="background-color: ${cat?.markerColor};" class="w-10 h-10 rounded-2xl border-4 border-white shadow-2xl flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:-translate-y-1">
                  <div class="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            `,
            iconSize: [40, 40],
            iconAnchor: [20, 20]
          });

          return (
            <Marker 
              key={listing.id} 
              position={listing.coordinates}
              icon={icon}
            >
              <Popup className="premium-popup">
                <div className="w-64 overflow-hidden rounded-3xl">
                  <div className="h-32 w-full relative">
                    <img src={listing.image} className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-lg flex items-center gap-1 shadow-md">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                      <span className="text-[10px] font-black">{listing.rating}</span>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest block mb-1">
                      {cat?.name}
                    </span>
                    <h3 className="font-bold text-gray-900 text-sm mb-2">{listing.title}</h3>
                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-50">
                      <p className="text-gray-900 font-black">{listing.price}</p>
                      <button className="bg-gray-900 text-white text-[9px] font-black px-3 py-1.5 rounded-lg">DETAILS</button>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      <style>{`
        .leaflet-popup-content-wrapper {
          padding: 0;
          overflow: hidden;
          border-radius: 2rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        .leaflet-popup-content {
          margin: 0;
          width: 256px !important;
        }
        .leaflet-popup-tip-container {
          display: none;
        }
      `}</style>
    </div>
  );
}
