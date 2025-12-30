import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import monoPanel from "@assets/generated_images/monocrystalline_solar_panel.png";
import polyPanel from "@assets/generated_images/polycrystalline_solar_panel.png";

export default function Products() {
  const allProducts = [
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
    },
    {
      id: "kit-rv",
      name: "TravelMate 200W RV Kit",
      price: "$450.00",
      power: "200W",
      type: "Portable",
      image: polyPanel // Using poly as placeholder for portable
    },
    {
      id: "mono-380",
      name: "HomeClassic 380W Mono",
      price: "$250.00",
      power: "380W",
      type: "Residential",
      image: monoPanel
    },
    {
      id: "batt-10",
      name: "PowerWall 10kWh Battery",
      price: "$6,500.00",
      power: "10kWh",
      type: "Storage",
      image: monoPanel // Placeholder
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-slate-50 py-12 border-b border-slate-200">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl font-heading font-bold text-slate-900 mb-4">Our Products</h1>
            <p className="text-slate-600 max-w-2xl">
              Browse our selection of high-efficiency solar panels, inverters, and battery storage solutions. 
              Not sure what you need? <a href="/contact" className="text-primary underline font-medium">Contact us for a free consultation</a>.
            </p>
          </div>
        </div>

        <div className="container px-4 md:px-6 py-12">
          {/* Simple Filter Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-8">
            <Button variant="secondary" className="bg-slate-900 text-white hover:bg-slate-800">All Products</Button>
            <Button variant="ghost">Monocrystalline</Button>
            <Button variant="ghost">Polycrystalline</Button>
            <Button variant="ghost">Batteries</Button>
            <Button variant="ghost">Kits</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
