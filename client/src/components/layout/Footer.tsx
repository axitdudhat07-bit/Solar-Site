import { Sun, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-heading text-xl font-bold text-white">
              <Sun className="h-6 w-6 fill-secondary text-secondary" />
              SolarRay
            </div>
            <p className="text-sm text-slate-400">
              Powering the future with clean, renewable solar energy solutions for homes and businesses.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/"><a className="hover:text-primary transition-colors">Home</a></Link></li>
              <li><Link href="/products"><a className="hover:text-primary transition-colors">Products</a></Link></li>
              <li><Link href="/about"><a className="hover:text-primary transition-colors">About Us</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-primary transition-colors">Contact</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Residential Installation</li>
              <li>Commercial Solutions</li>
              <li>Panel Maintenance</li>
              <li>Energy Storage</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} SolarRay. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
