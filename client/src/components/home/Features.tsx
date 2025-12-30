import { Zap, DollarSign, Leaf, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Save Money",
    description: "Drastically reduce your monthly electricity bills and protect yourself from rising energy costs.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Produce clean, renewable energy and significantly lower your home's carbon footprint.",
  },
  {
    icon: Zap,
    title: "Energy Independence",
    description: "Generate your own power and reduce reliance on the grid with optional battery storage.",
  },
  {
    icon: ShieldCheck,
    title: "25-Year Warranty",
    description: "Peace of mind with our industry-leading performance and labor warranties on all installations.",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Why Switch to Solar?</h2>
          <p className="text-slate-600">
            Investing in solar energy is a smart choice for your wallet and the planet. Here's what makes us the right partner for your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 group"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
