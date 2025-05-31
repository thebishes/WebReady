import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body against our schema
      const contactData = insertContactSchema.parse(req.body);
      
      // In a real application, we would:
      // 1. Store the contact submission in the database
      // 2. Send email notifications
      // 3. Log the submission for analytics
      
      // For this implementation, we'll just respond with success
      res.status(200).json({
        success: true,
        message: "Contact form submitted successfully",
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          success: false,
          message: "Validation error",
          errors: error.format()
        });
      } else {
        res.status(500).json({ 
          success: false,
          message: "Server error processing your request" 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
