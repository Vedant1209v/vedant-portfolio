"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Download,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";

const contactSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(3, "Subject is a little short"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MapPin, label: "Location", value: SITE.location, href: undefined },
  { icon: GithubIcon, label: "GitHub", value: "@" + SITE.githubUsername, href: SITE.github },
  { icon: LinkedinIcon, label: "LinkedIn", value: "vedantlandge", href: SITE.linkedin },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactForm) => {
    setStatus("sending");
    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error("EmailJS is not configured yet.");
      }
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="07 — Contact"
          title="Let's build or break something together"
          description="Open to internships, collaborations, and interesting problems."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {CONTACT_INFO.map((item) => (
              <div
                key={item.label}
                className="glass flex items-center gap-4 rounded-2xl p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-accent">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-text transition-colors hover:text-accent"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-text">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <a href={SITE.resumeUrl} download>
              <Button variant="outline" className="mt-2 w-full">
                <Download className="h-4 w-4" /> Download Resume
              </Button>
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="glass space-y-5 rounded-2xl p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field
                label="Name"
                error={errors.name?.message}
                inputProps={{ ...register("name"), placeholder: "Your name" }}
              />
              <Field
                label="Email"
                error={errors.email?.message}
                inputProps={{
                  ...register("email"),
                  placeholder: "you@example.com",
                  type: "email",
                }}
              />
            </div>
            <Field
              label="Subject"
              error={errors.subject?.message}
              inputProps={{ ...register("subject"), placeholder: "What's this about?" }}
            />
            <div>
              <label className="mb-1.5 block text-sm font-medium text-muted">
                Message
              </label>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Tell me a bit about the opportunity or idea…"
                className="w-full resize-none rounded-xl border border-border bg-white/5 px-4 py-3 text-sm text-text placeholder:text-muted/60 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              size="default"
              disabled={status === "sending"}
              className="w-full"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </Button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle2 className="h-4 w-4" /> Message sent — thanks for
                reaching out!
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-amber-400">
                <AlertCircle className="h-4 w-4" /> Couldn&apos;t send right now —
                email me directly at {SITE.email}.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  inputProps,
}: {
  label: string;
  error?: string;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-muted">
        {label}
      </label>
      <input
        {...inputProps}
        className="w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm text-text placeholder:text-muted/60 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
      />
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}
