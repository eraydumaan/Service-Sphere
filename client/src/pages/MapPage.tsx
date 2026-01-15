import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { mockListings, categories } from "@/lib/mockData";
import { Link } from "wouter";
import L from 'leaflet';
import { useEffect, useState } from 'react';
import "leaflet/dist/leaflet.css";

// Fix Leaflet default icon issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Custom colored markers function
const createCustomIcon = (color: string) => {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="background-color: ${color};" class="marker-pin"></div><i class="material-icons"></i>`,
    iconSize: [30, 42],
    iconAnchor: [15, 42]
  });
};

export default function MapPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Custom CSS for marker pin
    const style = document.createElement('style');
    style.innerHTML = `
      .marker-pin {
        width: 30px;
        height: 30px;
        border-radius: 50% 50% 50% 0;
        position: absolute;
        transform: rotate(-45deg);
        left: 50%;
        top: 50%;
        margin: -15px 0 0 -15px;
        animation: bounce 0.5s;
      }
      .marker-pin::after {
          content: '';
          width: 14px;
          height: 14px;
          margin: 8px 0 0 8px;
          background: #fff;
          position: absolute;
          border-radius: 50%;
      }
      .custom-div-icon i {
          position: absolute;
          width: 22px;
          font-size: 22px;
          left: 0;
          right: 0;
          margin: 10px auto;
          text-align: center;
      }
    `;
    document.head.appendChild(style);
  }, []);

  if (!mounted) return <div className="h-screen flex items-center justify-center bg-gray-50 text-gray-400">Harita Yükleniyor...</div>;

  return (
    <div className="h-screen w-full relative pb-20">
      <div className="absolute top-4 left-4 right-4 z-[400]">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/20">
          <h1 className="font-bold text-gray-900 text-lg mb-2">Hizmet Haritası</h1>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
             {categories.map(cat => (
               <div key={cat.id} className="flex items-center gap-1 shrink-0 bg-white border border-gray-100 px-2 py-1 rounded-full shadow-sm">
                 <div className={`w-3 h-3 rounded-full ${cat.colorClass.split(' ')[0].replace('text-', 'bg-')}`}></div>
                 <span className="text-xs font-medium text-gray-600">{cat.name}</span>
               </div>
             ))}
          </div>
        </div>
      </div>

      <MapContainer 
        center={[41.0082, 28.9784]} 
        zoom={11} 
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        {mockListings.map((listing) => {
          const cat = categories.find(c => c.id === listing.category);
          // Extract HSL value from CSS var or use fallback
          // For simplicity in this mock, mapping known colors
          let color = "#3b82f6";
          if(listing.category === 'vehicle') color = "#f59e0b"; // amber
          if(listing.category === 'home') color = "#10b981"; // emerald
          if(listing.category === 'winter') color = "#8b5cf6"; // purple
          if(listing.category === 'office') color = "#3b82f6"; // blue

          const icon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="background-color: ${color};" class="marker-pin"></div>`,
            iconSize: [30, 42],
            iconAnchor: [15, 42]
          });

          return (
            <Marker 
              key={listing.id} 
              position={listing.coordinates}
              icon={icon}
            >
              <Popup className="custom-popup">
                <div className="p-1 min-w-[200px]">
                  <div className="h-24 w-full rounded-lg overflow-hidden mb-2">
                    <img src={listing.image} className="w-full h-full object-cover" />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${cat?.colorClass} mb-1 inline-block`}>
                    {cat?.name}
                  </span>
                  <h3 className="font-bold text-sm mb-1">{listing.title}</h3>
                  <p className="text-primary font-bold">{listing.price}</p>
                  <p className="text-xs text-gray-500 mt-1">{listing.address}</p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
