export default function TotalGuardsDeployed() {
  return (
    <section className="py-6 sm:py-8 md:py-10 bg-gradient-to-b from-background via-background to-background/95 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="bg-card border border-border p-8 md:p-10 text-center">
          <p className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-widest mb-3 md:mb-4">
            Total Security Personnel
          </p>
          <div className="text-4xl md:text-6xl font-black text-foreground">
            1,541
          </div>
          <p className="text-sm md:text-base font-bold text-muted-foreground mt-2 md:mt-3">
            Total Number of Guards Deployed
          </p>
        </div>
      </div>
    </section>
  );
}
