import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { categories } from "@/lib/mockData";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Upload, Info, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const formSchema = z.object({
  title: z.string().min(5, { message: "Der Titel muss mindestens 5 Zeichen lang sein." }),
  category: z.string().min(1, { message: "Kategorie wählen." }),
  details: z.string().min(10, { message: "Details erforderlich." }),
  address: z.string().min(5, { message: "Gültige Adresse erforderlich." }),
  price: z.string().min(1, { message: "Preis erforderlich." }),
  date: z.string().optional(),
});

export default function CreateListing() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: "", details: "", address: "", price: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Hervorragend!",
      description: "Ihr Inserat wird nun von unserem Team geprüft.",
      className: "bg-gray-900 text-white border-none rounded-2xl shadow-2xl",
    });
  }

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* Dynamic Header */}
      <div className="bg-[#0F172A] px-6 pt-16 pb-12 rounded-b-[3rem] sticky top-0 z-50 shadow-2xl shadow-gray-200/50">
        <div className="flex items-center justify-between mb-8 max-w-xl mx-auto">
          <Link href="/">
            <button className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white backdrop-blur-md hover:bg-white/20 transition-all border border-white/10">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
          <div className="text-center">
            <h1 className="text-xl font-black text-white tracking-tight uppercase">Inserat erstellen</h1>
            <p className="text-[10px] text-primary font-black tracking-widest uppercase mt-1">Deutsche Qualität</p>
          </div>
          <div className="w-12" />
        </div>
        
        {/* Progress Stepper */}
        <div className="max-w-xl mx-auto flex items-center justify-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">1</div>
            <span className="text-[8px] text-white font-black uppercase tracking-widest">DETAILS</span>
          </div>
          <div className="w-12 h-[2px] bg-white/10" />
          <div className="flex flex-col items-center gap-2 opacity-30">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">2</div>
            <span className="text-[8px] text-white font-black uppercase tracking-widest">REVIEW</span>
          </div>
        </div>
      </div>

      <div className="px-6 py-10 max-w-xl mx-auto">
        <div className="bg-blue-50 border border-blue-100 p-6 rounded-[2rem] mb-10 flex gap-4 items-start">
          <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Premium-Standard</h4>
            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
              Dienstleistungen müssen den deutschen Qualitätsstandards entsprechen. Bitte geben Sie alle Details präzise an.
            </p>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid gap-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Titel des Inserats</FormLabel>
                    <FormControl>
                      <Input placeholder="z.B. IT-Infrastruktur Wartung" className="bg-gray-50 border-transparent h-14 rounded-2xl px-6 font-bold text-gray-900 focus:bg-white focus:border-primary transition-all shadow-inner" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Kategorie</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-gray-50 border-transparent h-14 rounded-2xl px-6 font-bold focus:bg-white transition-all shadow-inner">
                            <SelectValue placeholder="Wählen..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="rounded-2xl border-none shadow-2xl p-2">
                          {categories.map((cat) => (
                            <SelectItem key={cat.id} value={cat.id} className="rounded-xl py-3 font-bold">
                              {cat.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Preis (€)</FormLabel>
                      <FormControl>
                        <Input placeholder="z.B. 45 €/Std" className="bg-gray-50 border-transparent h-14 rounded-2xl px-6 font-bold shadow-inner" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Standort / Stadt</FormLabel>
                    <FormControl>
                      <Input placeholder="z.B. München-Zentrum" className="bg-gray-50 border-transparent h-14 rounded-2xl px-6 font-bold shadow-inner" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="bg-gray-50 rounded-3xl p-8 border-2 border-dashed border-gray-200 text-center group hover:border-primary hover:bg-blue-50/30 transition-all cursor-pointer">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
                <h5 className="font-bold text-gray-900">Fotos hinzufügen</h5>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">Max. 10MB pro Datei (JPG, PNG)</p>
              </div>

              <FormField
                control={form.control}
                name="details"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Detaillierte Beschreibung</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Beschreiben Sie Ihre Qualifikationen und den Service..." 
                        className="bg-gray-50 border-transparent min-h-[180px] rounded-[2rem] p-8 font-bold leading-relaxed shadow-inner focus:bg-white transition-all" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <motion.div whileTap={{ scale: 0.98 }}>
              <Button type="submit" className="w-full h-18 text-lg font-black rounded-3xl shadow-2xl shadow-primary/40 uppercase tracking-widest group">
                <CheckCircle2 className="w-6 h-6 mr-2" />
                Inserat Veröffentlichen
              </Button>
            </motion.div>
          </form>
        </Form>
      </div>
    </div>
  );
}
