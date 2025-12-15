"use client";

import { services } from "@/assets/data/services";
import { Button } from "@/components/ui/Button";
import { FormControl } from "@/components/ui/FormControl";
import useWeb3Forms from "@web3forms/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const { submit } = useWeb3Forms({
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
    <div className="bg-card flex flex-col justify-center rounded-xl md:h-[53rem]">
      <div className="space-y-6 px-8 py-12 md:px-12">
        <h3 className="text-3xl font-semibold">Schedule Free Consultation</h3>

        {result && (
          <div
            className={`rounded-md p-4 ${isSuccess ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
          >
            {result}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <label className="block w-full space-y-2">
            <span className="block">Your Name</span>
            <FormControl
              as="input"
              type="text"
              placeholder="Your name"
              {...register("name", { required: "Name is required" })}
            />
          </label>

          <label className="block w-full space-y-2">
            <span className="block">Email Address</span>
            <FormControl
              as="input"
              type="email"
              placeholder="Email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
          </label>

          <label className="block w-full space-y-2">
            <span className="block">Phone Number</span>
            <FormControl
              as="input"
              type="tel"
              placeholder="Phone number"
              {...register("phone")}
            />
          </label>

          <label className="block w-full space-y-2">
            <span className="block">What Are You Looking For?</span>
            <FormControl
              as="select"
              size="lg"
              {...register("service", { required: "Please select a service" })}
            >
              <option value="">Select a service</option>
              {services.map((svc) => (
                <option key={svc._id} value={svc._id}>
                  {svc.title}
                </option>
              ))}
            </FormControl>
          </label>

          <label className="block w-full space-y-2">
            <span className="block">Your Message</span>
            <FormControl
              as="textarea"
              rows={4}
              placeholder="Your message"
              className="h-auto py-2"
              {...register("message", { required: "Message is required" })}
            />
          </label>

          <Button
            isLoading={isSubmitting}
            size="lg"
            type="submit"
            disabled={isSubmitting}
          >
            <span className="block">
              {isSubmitting ? "Submitting..." : "SUBMIT"}
            </span>
          </Button>
        </form>
      </div>
    </div>
  );
}
