import { Check, X } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  features: PricingFeature[];
  popular?: boolean;
  buttonText?: string;
}

const PricingCard = ({
  name,
  description,
  price,
  features,
  popular = false,
  buttonText = "Get Started",
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        "bg-white border rounded-2xl overflow-hidden relative",
        popular
          ? "border-2 border-primary shadow-xl transform md:-translate-y-4 scale-105"
          : "border-gray-200 shadow-md hover:shadow-xl transition-shadow"
      )}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold font-poppins mb-2">{name}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex items-end mb-6">
          <span className="text-4xl font-bold font-poppins">{price.replace('$', '£')}</span>
          <span className="text-gray-600 ml-2">/year</span>
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              {feature.included ? (
                <>
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature.name}</span>
                </>
              ) : (
                <>
                  <X className="h-5 w-5 text-red-400 mr-2" />
                  <span className="text-gray-400">{feature.name}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 bg-gray-50 border-t border-gray-200">
        <Link href="/contact">
          <a
            className={cn(
              "block w-full py-3 px-4 font-semibold rounded-lg text-center transition-colors",
              popular
                ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30"
                : "bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white"
            )}
          >
            {buttonText}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
