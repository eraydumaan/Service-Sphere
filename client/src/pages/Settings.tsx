import { User, Settings as SettingsIcon, Bell, Shield, CreditCard, HelpCircle, LogOut, ChevronRight, MapPin, Phone } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-primary px-6 pt-12 pb-20 rounded-b-[2.5rem] relative overflow-hidden">
        <div className="absolute top-[-50%] right-[-10%] w-96 h-96 rounded-full bg-white opacity-5 blur-3xl" />
        <h1 className="text-2xl font-bold text-white relative z-10">Profil & Ayarlar</h1>
      </div>

      <div className="px-6 -mt-12 relative z-10">
        {/* Profile Card */}
        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/50 mb-6 text-center">
          <div className="relative inline-block mb-4">
            <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-lg mx-auto">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-primary rounded-full text-white shadow-md border-2 border-white">
              <SettingsIcon className="w-4 h-4" />
            </button>
          </div>
          <h2 className="text-xl font-bold text-gray-900">Ahmet Yılmaz</h2>
          <p className="text-gray-500 text-sm">ahmet.yilmaz@email.com</p>
          
          <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-gray-100">
            <div className="text-center">
              <span className="block text-xl font-bold text-gray-900">12</span>
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Hizmet</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-bold text-gray-900">4.8</span>
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Puan</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-bold text-gray-900">2</span>
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Aktif</span>
            </div>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="p-4 border-b border-gray-50 flex items-center justify-between">
              <h3 className="font-bold text-gray-900">Hesap Ayarları</h3>
            </div>
            
            <div className="divide-y divide-gray-50">
              <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-gray-900">Kişisel Bilgiler</span>
                    <span className="block text-xs text-gray-500">Ad, soyad ve telefon</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary" />
              </button>

              <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-50 text-green-500 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-gray-900">Kayıtlı Adreslerim</span>
                    <span className="block text-xs text-gray-500">Ev ve iş adresleri</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary" />
              </button>

              <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-gray-900">Ödeme Yöntemleri</span>
                    <span className="block text-xs text-gray-500">Kartlar ve faturalar</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="divide-y divide-gray-50">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
                    <Bell className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-gray-900">Bildirimler</span>
                </div>
                <Switch defaultChecked />
              </div>

               <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-500 flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-gray-900">Gizlilik ve Güvenlik</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300" />
              </div>
            </div>
          </div>

          <Button variant="outline" className="w-full h-14 rounded-xl text-red-500 hover:text-red-600 hover:bg-red-50 border-red-100 mt-4">
            <LogOut className="w-4 h-4 mr-2" />
            Çıkış Yap
          </Button>

          <p className="text-center text-xs text-gray-400 mt-6">Versiyon 1.0.0</p>
        </div>
      </div>
    </div>
  );
}
