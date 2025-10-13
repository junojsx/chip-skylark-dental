const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-20">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>
      {/* End of Grid Background */}

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-3xl" />
      {/* End of Gradient Orbs */}

      <div className="relative z-10 w-full px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* left side */}
            <div className="space-y-10">
              <div className="space-y-6">
                {/* badge */}
                <div
                  aria-hidden="true"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary5 rounded-full border border-primary/20 backdrop-blur-sm"
                >
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <h4 className="text-sm font-medium text:primary">
                    AI-driven Dental Assistant.
                  </h4>
                </div>
              </div>

              {/* MAIN HEADING */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  Your dental
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  questions
                </span>
                <br />
                <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  answered instantly
                </span>
              </h1>

              {/* SUBTITLE */}
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-medium">
                  Chat with our AI dental assistant for instant advice, book smart appointments, and
                  get personalized care recommendations. Available 24/7.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
