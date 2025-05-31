import { z } from "zod";
import { insertContactSchema } from "@shared/schema";

export const contactFormSchema = insertContactSchema.extend({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .max(100, { message: "Email must be less than 100 characters" }),
  phone: z
    .string()
    .max(20, { message: "Phone number must be less than 20 characters" })
    .optional()
    .or(z.literal("")),
  service: z.string().optional().or(z.literal("")),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
