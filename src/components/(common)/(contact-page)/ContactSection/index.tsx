"use client";

import { services } from "@/assets/data/services";
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
        <div className="flex flex-col gap-8 md:flex-row-reverse md:gap-12">
          <div className="space-y-8 md:flex-1 md:space-y-12">
            <h2 className="text-4xl">How can we help? </h2>
            {result && (
              <div
                className={`rounded-md p-4 ${isSuccess ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
              >
                {result}
              </div>
            )}
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <label className="w-full space-y-2 lg:col-span-2">
                    <span className="block">Select Service</span>
                    <FormControl as="select" {...register("service")}>
                      <option value="">Select a service</option>
                      {services?.map((service) => (
                        <option key={service._id} value={service._id}>
                          {service?.title}
                        </option>
                      ))}
                    </FormControl>
                  </label>
                  <label className="w-full space-y-2">
                    <span className="block">Country </span>
                    <FormControl
                      as="input"
                      type="text"
                      placeholder="Country"
                      {...register("country")}
                    />
                  </label>
                  <label className="w-full space-y-2">
                    <span className="block">Region </span>
                    <FormControl
                      as="input"
                      type="text"
                      placeholder="Region"
                      {...register("region")}
                    />
                  </label>
                  <label className="w-full space-y-2 lg:col-span-2">
                    <span className="block">Name </span>
                    <FormControl
                      as="input"
                      type="text"
                      placeholder="First Name"
                      {...register("name")}
                    />
                  </label>
                  <label className="w-full space-y-2">
                    <span className="block">Phone Number </span>
                    <FormControl
                      as="input"
                      type="tel"
                      placeholder="Phone Number"
                      {...register("phone")}
                    />
                  </label>
                  <label className="w-full space-y-2">
                    <span className="block">Email Address </span>
                    <FormControl
                      as="input"
                      type="email"
                      placeholder="Email Address"
                      {...register("email")}
                    />
                  </label>
                  <label className="w-full space-y-2 lg:col-span-2">
                    <span className="block">Description </span>
                    <FormControl
                      as="textarea"
                      className="primary h-auto py-2"
                      placeholder="Description"
                      rows={4}
                      {...register("description")}
                    />
                  </label>
                </div>
                <div className="mt-6 w-full text-right md:mt-8">
                  <Button
                    className="primary px-12"
                    size="lg"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? "Sending..." : "SUBMIT"}</span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
