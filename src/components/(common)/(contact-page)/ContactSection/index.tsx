"use client";

import { Button } from "@/components/ui/Button";
import { FormControl } from "@/components/ui/FormControl";
import useWeb3forms from "@web3forms/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ContactSection = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const { submit } = useWeb3forms({
    access_key: "f3794615-5d69-4289-8663-11a81102ed74", //foysalahmedmin@gmail.com;
    settings: {
      from_name: "Rivar Trims",
      subject: "Rivar Trims Contact Message",
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  const onSubmit = (data) => {
    const dynamicSubject = `New Contact Message from ${data.name} - Rivar Trims`;
    const formDataWithSubject = {
      ...data,
      subject: dynamicSubject,
    };
    submit(formDataWithSubject);
  };

  return (
    <section className="intersection-fade-in py-16">
      <div className="container">
        <div className="mx-auto grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Details Card */}
          <div className="bg-card border-primary rounded-lg border-t-4 p-8 shadow-xl md:order-2">
            <h2 className="text-primary mb-6 text-3xl font-bold uppercase">
              Our Details
            </h2>
            <div className="space-y-6 text-lg">
              <div>
                <h4 className="text-muted-foreground mb-1 text-sm font-bold uppercase">
                  Head Office
                </h4>
                <p className="text-foreground font-semibold">
                  House-08 (Lift-2), Road-04/A, Sector-15/G, Uttara, Dhaka-1230,
                  Bangladesh.
                </p>
              </div>
              <div>
                <h4 className="text-muted-foreground mb-1 text-sm font-bold uppercase">
                  Phone (Sales)
                </h4>
                <div className="text-primary text-xl font-bold">
                  <p>+88 01923 205096</p>
                  <p>+88 01920 411806</p>
                </div>
              </div>
              <div>
                <h4 className="text-muted-foreground mb-1 text-sm font-bold uppercase">
                  Email
                </h4>
                <p className="text-foreground font-semibold">
                  info@rivartrims.com
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-card md:order-1 border-primary rounded-lg border-t-4 p-8 shadow-xl">
            <h2 className="text-primary mb-6 text-3xl font-bold uppercase">
              Send Us A Message
            </h2>
            {result && (
              <div
                className={`mb-4 rounded-md p-4 ${isSuccess ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
              >
                {result}
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <FormControl
                as="input"
                type="text"
                placeholder="Your Name"
                className="border-input focus:border-primary w-full rounded-sm border p-3"
                {...register("name", { required: true })}
              />
              <FormControl
                as="input"
                type="email"
                placeholder="Your Email"
                className="border-input focus:border-primary w-full rounded-sm border p-3"
                {...register("email", { required: true })}
              />
              <FormControl
                as="input"
                type="tel"
                placeholder="Phone Number"
                className="border-input focus:border-primary w-full rounded-sm border p-3"
                {...register("phone")}
              />
              <FormControl
                as="textarea"
                rows={4}
                placeholder="Your Message / Query"
                className="border-input focus:border-primary h-auto w-full rounded-sm border p-3"
                {...register("message", { required: true })}
              />
              <Button
                type="submit"
                className="primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
