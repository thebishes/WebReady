import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Mail, Phone, Sparkles, Send, Rocket } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const onSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(data);
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Add a small delay before animation
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      setIsSubmitting(true);
      try {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("service", data.service);
        formData.append("message", data.message);
        formData.append("_captcha", "false"); // disable captcha
        formData.append("_next", "https://yourdomain.com/thank-you"); // change to your success page

        const response = await fetch(
          "https://formsubmit.co/dd34f598e53aecbfc8039addb0f19f25",
          {
            method: "POST",
            body: formData,
          },
        );

        if (!response.ok) {
          throw new Error("Form submission failed");
        }

        return response; // Formsubmit returns HTML, not JSON
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <section className="pt-32 pb-20 min-h-screen overflow-hidden relative bg-[rgba(249,250,251,0.6)]">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              <Sparkles className="h-4 w-4 mr-2 text-accent" />
              LET'S TALK ABOUT YOUR PROJECT
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-4 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-accent/30 -rotate-1"></span>
            </h1>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              Have questions about our website services or ready to get started?
              Contact us using the form, and we'll get back to you promptly.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              animated
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="space-y-8">
                <div className="flex items-start transition-all duration-300 hover:translate-x-2">
                  <div className="mr-4 p-3 bg-primary/10 rounded-xl text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      Mansfield, Nottinghamshire, UK
                    </p>
                  </div>
                </div>

                <div className="flex items-start transition-all duration-300 hover:translate-x-2">
                  <div className="mr-4 p-3 bg-secondary/10 rounded-xl text-secondary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <p className="text-gray-600">info@webready.store</p>
                  </div>
                </div>

                <div className="flex items-start transition-all duration-300 hover:translate-x-2">
                  <div className="mr-4 p-3 bg-accent/10 rounded-xl text-accent">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-gray-600">+44 7900184898</p>
                  </div>
                </div>

                <div className="mt-10 bg-primary/5 p-6 rounded-xl border border-primary/10">
                  <div className="flex items-start">
                    <div className="mr-4 text-primary">
                      <Rocket className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Ready to get started?
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Our team of experts is ready to bring your vision to
                        life with stunning design and powerful functionality.
                      </p>
                      <Button
                        variant="outline"
                        className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                        onClick={() =>
                          document
                            .getElementById("contact-form")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                      >
                        Start Your Project
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-700 delay-300 ${
                animated
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              id="contact-form"
            >
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 transform rotate-45 translate-x-10 -translate-y-10"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-xl"></div>

                  <h2 className="text-2xl font-bold font-poppins mb-6 relative inline-block">
                    Send Us a Message
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/30"></span>
                  </h2>

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel className="font-medium">Your Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John / Jane Doe"
                            {...field}
                            className="border-gray-300 focus:border-primary focus:ring-primary/20 py-6"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel className="font-medium">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john@example.com"
                            type="email"
                            {...field}
                            className="border-gray-300 focus:border-primary focus:ring-primary/20 py-6"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel className="font-medium">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+44..."
                            type="tel"
                            {...field}
                            className="border-gray-300 focus:border-primary focus:ring-primary/20 py-6"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel className="font-medium">
                          Interested In
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="border-gray-300 focus:border-primary focus:ring-primary/20 py-6">
                              <SelectValue placeholder="Select a package" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="starter">Starter</SelectItem>
                            <SelectItem value="starter+">
                              Starter plus
                            </SelectItem>
                            <SelectItem value="Power">Power Pro</SelectItem>
                            <SelectItem value="custom">
                              Custom Requirements
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel className="font-medium">
                          Your Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project requirements..."
                            rows={4}
                            {...field}
                            className="border-gray-300 focus:border-primary focus:ring-primary/20 resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full px-6 py-6 shadow-lg shadow-primary/30 relative overflow-hidden group"
                    disabled={isSubmitting}
                  >
                    <span className="absolute inset-0 bg-primary group-hover:bg-primary/90 transition-colors duration-300"></span>
                    <span className="relative flex items-center justify-center gap-2 z-10">
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4 animate-pulse" />
                        </>
                      )}
                    </span>
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
