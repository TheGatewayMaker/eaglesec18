import { Shield, Users, Truck, Lock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-black mb-6">Our Security Services</h1>
          <p className="text-xl opacity-90 max-w-2xl font-bold leading-relaxed">
            Comprehensive security solutions designed to protect what matters
            most to you
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          {/* Static Security Guards */}
          <div className="mb-20 pb-12 border-b border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-12 h-12 text-accent" />
                  <h2 className="text-4xl font-black text-slate-900">
                    Static Security Guard Services
                  </h2>
                </div>
                <p className="text-slate-700 leading-relaxed mb-8 text-lg font-bold">
                  Eagle Security Guards draws its main pool of manpower from
                  armed forces of Pakistan and imparts training to meet critical
                  security requirements reliably and efficiently.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-bold">
                      Comprehensive personal data screening and vetting process
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-bold">
                      Database verification to ensure no blacklisted guards join
                      ranks
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-bold">
                      Professional training in security protocols and procedures
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-bold">
                      Reliable and efficient protection for premises
                    </span>
                  </li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg h-96">
                <img
                  src="https://images.pexels.com/photos/30487150/pexels-photo-30487150.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional security guards in uniform"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Bodyguards */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-12 rounded-lg border border-border order-2 md:order-1">
                <div className="aspect-square bg-accent rounded-lg opacity-20"></div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-12 h-12 text-accent" />
                  <h2 className="text-h2 font-bold text-primary">Bodyguards</h2>
                </div>
                <p className="text-foreground leading-relaxed mb-6 text-lg">
                  Our bodyguards are mainly drawn from Special Service Group
                  (SSG) of Pakistan Army, an elite force trained to use all
                  available means to survive the worst security hazards.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">
                      Elite personnel from Special Service Group (SSG)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">
                      Cream of handpicked men dedicated to difficult missions
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">
                      Advanced threat assessment and response training
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">
                      Protection in high-risk security scenarios
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Escorts */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="w-12 h-12 text-accent" />
                  <h2 className="text-h2 font-bold text-primary">
                    Mobile Escort Services
                  </h2>
                </div>
                <p className="text-foreground leading-relaxed mb-6 text-lg">
                  Mobile escort services are provided by ESG to protect
                  personnel during movement. Our escort teams are fully trained
                  in defensive measures to meet any eventuality.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">
                      Protection during personnel movement and transit
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">
                      Fully trained teams in defensive measures
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">
                      Emergency response protocols for any situation
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">
                      Discrete and professional protection services
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-12 rounded-lg border border-border">
                <div className="aspect-square bg-accent rounded-lg opacity-20"></div>
              </div>
            </div>
          </div>

          {/* Security Equipment */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-12 rounded-lg border border-border order-2 md:order-1">
                <div className="aspect-square bg-accent rounded-lg opacity-20"></div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-12 h-12 text-accent" />
                  <h2 className="text-h2 font-bold text-primary">
                    Security Equipment
                  </h2>
                </div>
                <p className="text-foreground leading-relaxed mb-6 text-lg">
                  ESG specialises in providing all security equipment needed to
                  safeguard your premises with cutting-edge technology and
                  proven solutions.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">CCTV Cameras</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">Walkthrough Gates</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">
                      Wireless Communication Devices
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">
                      Barbed Wire Protection
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-h2 text-primary-foreground mb-6 font-bold">
            Need Custom Security Solutions?
          </h2>
          <p className="text-xl text-primary-foreground mb-8 opacity-95">
            Contact our team to discuss your specific security requirements
          </p>
          <Link
            to="/contact"
            className="bg-accent text-accent-foreground px-8 py-4 font-bold text-lg rounded-lg hover:opacity-90 transition-opacity inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
