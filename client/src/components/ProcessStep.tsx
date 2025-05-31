interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="flex flex-col items-center text-center relative z-10">
      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 shadow-lg border border-white/10 transform transition-transform hover:rotate-12 hover:scale-110 duration-300">
        <span className="text-3xl font-bold font-poppins">{number}</span>
      </div>
      <h3 className="text-xl font-semibold font-poppins mb-3 relative">
        {title}
        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-accent/60 rounded-full"></span>
      </h3>
      <p className="opacity-90 max-w-xs mx-auto">{description}</p>
    </div>
  );
};

export default ProcessStep;
