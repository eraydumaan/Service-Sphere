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
import { ArrowLeft, Upload, CalendarIcon } from "lucide-react";
import { Link } from "wouter";

const formSchema = z.object({
  title: z.string().min(5, { message: "Başlık en az 5 karakter olmalı." }),
  category: z.string().min(1, { message: "Lütfen bir kategori seçin." }),
  details: z.string().min(10, { message: "Detaylar en az 10 karakter olmalı." }),
  address: z.string().min(5, { message: "Geçerli bir adres girin." }),
  price: z.string().min(1, { message: "Fiyat bilgisi girin." }),
  date: z.string().optional(),
  time: z.string().optional(),
});

export default function CreateListing() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      details: "",
      address: "",
      price: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "İlan Oluşturuldu!",
      description: "İlanınız başarıyla yayına alındı.",
      variant: "default",
    });
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <Link href="/">
            <button className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900">Yeni İlan Oluştur</h1>
        </div>
      </div>

      <div className="px-6 py-6 max-w-lg mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>İlan Başlığı</FormLabel>
                  <FormControl>
                    <Input placeholder="Örn: 2015 Model Araç Detaylı Temizlik" className="bg-white h-12 rounded-xl" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kategori</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white h-12 rounded-xl">
                        <SelectValue placeholder="Kategori Seçin" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tarih</FormLabel>
                    <FormControl>
                      <Input type="date" className="bg-white h-12 rounded-xl" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Saat (Opsiyonel)</FormLabel>
                    <FormControl>
                      <Input type="time" className="bg-white h-12 rounded-xl" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tahmini Bütçe / Fiyat</FormLabel>
                  <FormControl>
                    <Input placeholder="Örn: 1500 TL" className="bg-white h-12 rounded-xl" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adres</FormLabel>
                  <FormControl>
                    <Input placeholder="Mahalle, Cadde, No..." className="bg-white h-12 rounded-xl" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Detaylar</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Yapılacak işi detaylıca anlatın..." 
                      className="bg-white min-h-[120px] rounded-xl resize-none p-4" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-4">
              <Button type="submit" className="w-full h-14 text-lg font-bold rounded-xl shadow-lg shadow-primary/20">
                İlanı Yayınla
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
