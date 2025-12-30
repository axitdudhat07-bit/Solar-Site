import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/forms/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-slate-900 text-white py-16">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-heading font-bold mb-4">Get in Touch</h1>
            <p className="text-slate-300 max-w-xl mx-auto">
              Ready to switch to solar? Have questions about our products? 
              Fill out the form below or reach out to us directly.
            </p>
          </div>
        </div>

        <div className="container px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="font-heading font-bold text-xl mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-900">Our Office</div>
                      <div className="text-slate-600">
                        123 Solar Avenue<br />
                        Sunnyvale, CA 94086
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-900">Phone</div>
                      <div className="text-slate-600">(555) 123-4567</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-900">Email</div>
                      <div className="text-slate-600">hello@solarray.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-900">Business Hours</div>
                      <div className="text-slate-600">
                        Mon - Fri: 8am - 6pm<br />
                        Sat: 10am - 4pm
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">Request a Free Quote</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
