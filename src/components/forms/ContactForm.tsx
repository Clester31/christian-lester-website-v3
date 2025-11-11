import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";

// Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  message: z.string().min(1, "Message is required").min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: "christianlester114@gmail.com",
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2"
            style={{ color: "var(--color-text)" }}
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-colors contact-form-input"
            style={{
              backgroundColor: "var(--color-surface)",
              color: "var(--color-text)",
              borderColor: errors.name ? "var(--color-error)" : "var(--color-border)",
            }}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm" style={{ color: "var(--color-error)" }}>
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2"
            style={{ color: "var(--color-text)" }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-colors contact-form-input"
            style={{
              backgroundColor: "var(--color-surface)",
              color: "var(--color-text)",
              borderColor: errors.email ? "var(--color-error)" : "var(--color-border)",
            }}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm" style={{ color: "var(--color-error)" }}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2"
            style={{ color: "var(--color-text)" }}
          >
            Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={6}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-colors resize-vertical contact-form-input"
            style={{
              backgroundColor: "var(--color-surface)",
              color: "var(--color-text)",
              borderColor: errors.message ? "var(--color-error)" : "var(--color-border)",
            }}
            placeholder="Your message here..."
          />
          {errors.message && (
            <p className="mt-1 text-sm" style={{ color: "var(--color-error)" }}>
              {errors.message.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            backgroundColor: isSubmitting
              ? "var(--color-accent-muted)"
              : "var(--color-accent)",
            color: "var(--color-text-inverted)",
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.backgroundColor = "var(--color-accent-hover)";
            }
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.backgroundColor = "var(--color-accent)";
            }
          }}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {submitStatus.type && (
          <div
            className={`p-4 rounded-lg ${
              submitStatus.type === "success"
                ? "bg-green-900/20 border border-green-500/50"
                : "bg-red-900/20 border border-red-500/50"
            }`}
          >
            <p
              className={`text-sm ${
                submitStatus.type === "success"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {submitStatus.message}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
