import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import monoPanel from "@assets/generated_images/monocrystalline_solar_panel.png";
import polyPanel from "@assets/generated_images/polycrystalline_solar_panel.png";
import installerImg from "@assets/generated_images/solar_panel_installation_technician.png";

export default function Home() {
  const featuredProducts = [
    {
      id: "mono-400",
      name: "UltraBlack 400W Monocrystalline",
      price: "$280.00",
      power: "400W",
      type: "Premium",
      image: monoPanel
    },
    {
      id: "poly-350",
      name: "EcoBlue 350W Polycrystalline",
      price: "$210.00",
      power: "350W",
      type: "Standard",
      image: polyPanel
    },
    {
      id: "mono-450",
      name: "ProSeries 450W Commercial",
      price: "$320.00",
      power: "450W",
      type: "Commercial",
      image: monoPanel
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <Features />
        
        {/* Featured Products Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Popular Products</h2>
                <p className="text-slate-600">
                  Our best-selling solar panels chosen for their efficiency, durability, and value.
                </p>
              </div>
              <Link href="/products">
                <Button variant="outline">View All Products</Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Installation Section */}
        <section className="py-20 bg-slate-900 text-white overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <img 
                  src={installerImg} 
                  alt="Technician installing solar panels" 
                  className="rounded-2xl shadow-2xl transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-secondary text-slate-900 p-6 rounded-xl shadow-lg hidden md:block">
                  <div className="text-4xl font-bold font-heading">500+</div>
                  <div className="font-medium">Installations Completed</div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                  Expert Installation & <br/>
                  <span className="text-primary">Ongoing Support</span>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  We don't just sell panels; we provide comprehensive energy solutions. Our certified team handles everything from initial site assessment to final grid connection.
                </p>
                <ul className="space-y-3">
                  {['Certified Installers', 'Permitting Handling', 'System Monitoring', 'Maintenance Plans'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white border-none">
                      Schedule Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials (Simple) */}
        <section className="py-20 bg-slate-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-heading font-bold text-center text-slate-900 mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Sarah J.", role: "Homeowner", quote: "My electricity bill dropped by 80% in the first month. The installation team was professional and fast." },
                { name: "Michael T.", role: "Business Owner", quote: "Switching our warehouse to solar was the best investment we made this year. SolarRay made it easy." },
                { name: "Elena R.", role: "Homeowner", quote: "I love the monitoring app. Seeing how much energy I'm producing in real-time is addictive!" }
              ].map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <div key={s} className="text-secondary">★</div>)}
                  </div>
                  <p className="text-slate-600 mb-6 italic">"{t.quote}"</p>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
