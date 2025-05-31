import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => {
  return (
    <div className="bg-gray-50 p-8 rounded-xl relative">
      <div className="absolute -top-5 left-8">
        <Quote className="h-8 w-8 text-primary" />
      </div>
      <p className="text-gray-600 italic mb-6 pt-6">{quote}</p>
      <div className="flex items-center">
        <div className="mr-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        </div>
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
