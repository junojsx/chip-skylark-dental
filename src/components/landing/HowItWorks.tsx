import { ZapIcon } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className=" relative py-32 px-6 outline-hidden z-10 mx-auto max-w-7xl">
      {/* Header Section */}
      <div className="text-center">
         <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6">
          <ZapIcon className="size-4 text-primary" />
          <span className="text-sm font-medium text-primary">Simple Process</span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
