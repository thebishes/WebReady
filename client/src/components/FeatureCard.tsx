import { DivideIcon as LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  colorClass: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  colorClass,
}: FeatureCardProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-b-4 border-transparent hover:border-accent">
      <div
        className={`w-16 h-16 ${colorClass} flex items-center justify-center rounded-xl mb-6 transform transition-transform hover:rotate-6`}
      >
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-semibold font-poppins mb-3 relative inline-block">
        {title}
        <span className="absolute -bottom-1 left-0 w-12 h-1 bg-primary/40"></span>
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
