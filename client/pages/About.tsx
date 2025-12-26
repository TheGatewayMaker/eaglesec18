import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-h1 font-bold mb-6">About Eagle Security Guards</h1>
          <p className="text-xl opacity-95 max-w-2xl">
            Building trust through excellence in professional security services
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="mb-12">
            <h2 className="text-h2 font-bold text-primary mb-6">Our Story</h2>
            <p className="text-foreground leading-relaxed text-lg mb-6">
              Eagle Security Guards (Pvt) Ltd draws its main pool of manpower from
              the armed forces of Pakistan, ensuring that our personnel bring
              professional military training and discipline to every assignment.
            </p>
            <p className="text-foreground leading-relaxed text-lg mb-6">
              We are committed to imparting comprehensive training to meet critical
              security requirements reliably and efficiently. Our comprehensive
              vetting process ensures that only the most qualified and trustworthy
              individuals join our organization.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-h2 font-bold text-primary mb-6">Our Commitment</h2>
            <p className="text-foreground leading-relaxed text-lg mb-6">
              Every member of our team undergoes rigorous screening and verification.
              Comprehensive personal data is collected, screened, vetted, and stored
              in our secure database, ensuring that no compromised or blacklisted
              individuals join our ranks.
            </p>
            <p className="text-foreground leading-relaxed text-lg">
              This dedication to quality and integrity has made us the trusted choice
              for organizations across government, banking, media, and corporate sectors
              throughout Pakistan.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-lg border border-border">
            <h3 className="text-h3 font-bold text-primary mb-6">Nationwide Presence</h3>
            <p className="text-foreground leading-relaxed mb-6">
              With our head office in Islamabad and multiple regional, area, and sub
              offices across Pakistan, we ensure reliable coverage and local expertise
              wherever you need us.
            </p>
            <p className="text-foreground leading-relaxed">
              Our extensive network allows us to respond quickly to your security needs
              and provide consistent, high-quality service across all regions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-h2 text-primary-foreground mb-6 font-bold">
            Learn More About Our Services
          </h2>
          <Link
            to="/services"
            className="bg-accent text-accent-foreground px-8 py-4 font-bold text-lg rounded-lg hover:opacity-90 transition-opacity inline-block"
          >
            Explore Services
          </Link>
        </div>
      </section>
    </div>
  );
}
