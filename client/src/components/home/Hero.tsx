import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/modern_house_with_solar_panels_on_roof.png";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern house with solar panels" 
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      
      <div className="container relative z-10 px-4 md:px-6 py-24 md:py-32 lg:py-40 flex flex-col items-start gap-6">
        <div className="max-w-2xl space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-white ring-1 ring-inset ring-primary/40 backdrop-blur-sm">
            Sustainable Future
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Power Your Home with <span className="text-secondary">Clean Energy</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-lg">
            Reduce your electricity bills and carbon footprint with our premium solar panel systems. Expert installation and 25-year warranty included.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
          <Link href="/products">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white border-none text-base h-12 px-8">
              View Products
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm text-base h-12 px-8 group">
              Get a Free Quote
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
