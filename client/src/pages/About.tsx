import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-heading font-bold text-slate-900">About SolarRay</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded in 2023, SolarRay is dedicated to accelerating the world's transition to sustainable energy. 
              We believe that every roof is an opportunity to generate clean power, save money, and build a greener future.
            </p>
            <div className="w-full h-px bg-slate-200 my-8"></div>
            <p className="text-slate-600">
              Our team consists of certified engineers, experienced installers, and energy consultants who are passionate about solar technology. 
              We partner with top-tier manufacturers to bring you the most efficient and durable solar panels on the market.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
