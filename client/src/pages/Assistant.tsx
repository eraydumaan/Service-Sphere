import { useState, useRef, useEffect } from "react";
import { Send, User, Bot, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  time: string;
};

const predefinedQuestions = [
  "Hizmet nerede kaldı?",
  "Sigorta var mı?",
  "Ödeme yöntemleri neler?",
  "Randevu iptali nasıl yapılır?"
];

export default function Assistant() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Merhaba! Ben Hizmet Asistanı. Size nasıl yardımcı olabilirim?", sender: "bot", time: "10:00" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = (text: string = inputValue) => {
    if (!text.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: text,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue("");

    // Bot response logic
    setTimeout(() => {
      let botResponse = "Anladım, bu konuda size yardımcı olması için bir temsilciye yönlendiriyorum.";
      
      if (text.includes("nerede kaldı")) {
        botResponse = "Hizmet verenin konumu kontrol ediliyor... Şu an size 15 dakika mesafede görünüyor.";
      } else if (text.includes("Sigorta")) {
        botResponse = "Evet, platformumuz üzerinden alınan tüm hizmetler AXA Sigorta güvencesi altındadır.";
      } else if (text.includes("Ödeme")) {
        botResponse = "Kredi kartı veya hizmet tamamlandığında nakit ödeme yapabilirsiniz.";
      }

      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: botResponse,
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm z-10">
         <div className="flex items-center gap-4">
           <Link href="/">
             <button className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
               <ArrowLeft className="w-6 h-6 text-gray-700" />
             </button>
           </Link>
           <div>
             <h1 className="text-xl font-bold text-gray-900">Hizmet Asistanı</h1>
             <div className="flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               <span className="text-xs text-gray-500">Çevrimiçi</span>
             </div>
           </div>
         </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
              msg.sender === "user" 
                ? "bg-primary text-white rounded-tr-none" 
                : "bg-white text-gray-800 rounded-tl-none border border-gray-100"
            }`}>
              <p className="text-sm">{msg.text}</p>
              <span className={`text-[10px] block mt-1 opacity-70 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                {msg.time}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions Area */}
      <div className="px-4 py-2 bg-gray-50 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {predefinedQuestions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(q)}
            className="inline-block mr-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-xs text-primary font-medium hover:bg-primary hover:text-white transition-colors"
          >
            {q}
          </button>
        ))}
      </div>

      <div className="bg-white p-4 border-t border-gray-100 pb-safe">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="flex gap-2 items-center"
        >
          <Input 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Mesajınızı yazın..." 
            className="flex-1 rounded-full h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all"
          />
          <Button type="submit" size="icon" className="h-12 w-12 rounded-full shrink-0 shadow-lg shadow-primary/20">
            <Send className="w-5 h-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
