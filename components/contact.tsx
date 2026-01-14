"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2, ArrowRight, Phone, Mail, Instagram, Linkedin, Twitter } from "lucide-react";
import toast from "react-hot-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message is too short"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return data;
    },
    onSuccess: () => {
      toast.success("Message sent successfully");
      reset();
    },
    onError: () => {
      toast.error("Something went wrong. Please try again.");
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="relative w-full bg-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
      >
        <div className="flex flex-col justify-between py-4">
          <div className="space-y-8">
            <h2 className="font-serif text-5xl md:text-6xl text-onyx leading-tight">
              Let&apos;s Start a <br /> Conversation.
            </h2>
            <p className="font-sans text-gray-500 max-w-sm leading-relaxed tracking-wide">
              Whether you are looking to acquire a new property or restructure your portfolio, I am here to provide strategic guidance.
            </p>
          </div>

          <div className="space-y-10 mt-12 lg:mt-0">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                 <Phone className="w-5 h-5 text-gray-400" />
                 <a href="tel:+919188740190" className="font-serif text-2xl text-onyx hover:text-gray-600 transition-colors">
                    +91 9188740190
                 </a>
              </div>
              <div className="flex items-center gap-4">
                 <Mail className="w-5 h-5 text-gray-400" />
                 <a href="mailto:lukmansadikp@gmail.com" className="font-serif text-2xl text-onyx hover:text-gray-600 transition-colors">
                    lukmansadikp@gmail.com
                 </a>
              </div>
            </div>

            <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-onyx transition-colors">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-onyx transition-colors">
                    <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-onyx transition-colors">
                    <Instagram className="w-5 h-5" />
                </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Form */}
        <div className="flex flex-col justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 w-full">
            
            {/* Name */}
            <div className="group relative">
              <input
                {...register("name")}
                type="text"
                placeholder=" "
                className={`peer w-full bg-transparent border-b ${
                  errors.name ? "border-red-500" : "border-gray-200"
                } py-4 text-onyx focus:outline-none focus:border-onyx transition-colors placeholder-transparent font-sans`}
              />
              <label className="absolute left-0 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gray-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600 pointer-events-none">
                Full Name
              </label>
              {errors.name && (
                <span className="absolute right-0 top-4 text-xs text-red-500">{errors.name.message}</span>
              )}
            </div>

            {/* Email */}
            <div className="group relative">
              <input
                {...register("email")}
                type="email"
                placeholder=" "
                className={`peer w-full bg-transparent border-b ${
                  errors.email ? "border-red-500" : "border-gray-200"
                } py-4 text-onyx focus:outline-none focus:border-onyx transition-colors placeholder-transparent font-sans`}
              />
              <label className="absolute left-0 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gray-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600 pointer-events-none">
                Email Address
              </label>
              {errors.email && (
                <span className="absolute right-0 top-4 text-xs text-red-500">{errors.email.message}</span>
              )}
            </div>

            {/* Message */}
            <div className="group relative">
              <textarea
                {...register("message")}
                rows={4}
                placeholder=" "
                className={`peer w-full bg-transparent border-b ${
                  errors.message ? "border-red-500" : "border-gray-200"
                } py-4 text-onyx focus:outline-none focus:border-onyx transition-colors placeholder-transparent resize-none font-sans`}
              />
              <label className="absolute left-0 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gray-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600 pointer-events-none">
                How can we help?
              </label>
              {errors.message && (
                <span className="absolute right-0 top-4 text-xs text-red-500">{errors.message.message}</span>
              )}
            </div>

            {/* Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={mutation.isPending}
                className="group flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-onyx font-medium hover:opacity-70 transition-opacity disabled:opacity-50"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </div>

          </form>
        </div>
      </motion.div>
    </section>
  );
}
