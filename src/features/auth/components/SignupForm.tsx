"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { userForm } from "../types/userForm";

export const formSchema = z
  .object({
    fullname: z.string().min(1, "Full name is required"),
    email: z.string().min(1, "Email is required").email(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must include at least one uppercase letter")
      .regex(/\d/, "Password must include at least one number")
      .regex(
        /[^a-zA-Z0-9]/,
        "Password must include at least one special character"
      ),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], // ← marca el error en el campo correcto
    message: "Passwords do not match",
  });

export default function SignupForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    criteriaMode: "all",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: 0,
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: userForm) => {
    console.log(data);
  };

  const styleError = (param: keyof userForm) => {
    return `transition-all border ${
      form.formState.errors[param]
        ? "border-red-500 focus:ring-red-500"
        : form.getValues(param)
        ? "border-green-500 focus-visible:ring-green-500/50 focus-visible:border-green-500"
        : "border-gray-300 focus:ring-gray-300"
    }`;
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 justify-center items-center"
      >
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 w-full">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name<span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    {...field}
                    className={styleError("fullname")}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <div className="min-h-5">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email<span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input
                    placeholder="john.doe@example.com"
                    {...field}
                    className={styleError("email")}
                  />
                </FormControl>
                <FormDescription>
                  Please enter a valid email address.
                </FormDescription>
                <div className="min-h-5">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password<span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input
                    placeholder="Password"
                    type="password"
                    {...field}
                    className={styleError("password")}
                  />
                </FormControl>
                <FormDescription>
                  Please enter a strong password.
                </FormDescription>
                <div className="min-h-5">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password<span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    {...field}
                    className={styleError("confirmPassword")}
                  />
                </FormControl>
                <FormDescription>Please confirm your password.</FormDescription>
                <div className="min-h-5">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full self-center">
          Create Account
        </Button>
      </form>
    </Form>
  );
}
