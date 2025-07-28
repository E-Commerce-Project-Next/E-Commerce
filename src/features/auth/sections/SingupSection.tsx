import React from "react";
import Link from "next/link";
import SignupForm from "../components/SignupForm";
import { GoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import Divider from "@/features/commons/components/Divider";

export default function SignupSection() {
  return (
    <section className="flex mx-auto w-10/12 h-[70vh] gap-5 border-2 border-gray rounded-xl">
      <div className="flex flex-col gap-8 mx-auto justify-center min-w-1/2">
        <h1  className="text-4xl font-bold">Signup</h1>
        <p>
          Already have an account?{" "}
          <span>
            <Link href="/login">Login</Link>
          </span>
        </p>
        <SignupForm />
        <Divider text="or continue with" />
        <div className="mx-auto min-w-1/3">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            useOneTap
          />
        </div>
      </div>
      <div className="relative w-1/3">
        <Image
          src="/grayImage.png"
          alt="Description of image"
          fill
          className="object-cover rounded-r-xl"
        />
      </div>
    </section>
  );
}
