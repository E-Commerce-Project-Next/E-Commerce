import React from "react";
import Link from "next/link";
import { GoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import Divider from "@/features/commons/components/Divider";
import LoginForm from "../components/LoginForm";

export default function SignupSection() {
  return (
    <section className="flex w-10/12 h-fit border-2 border-gray rounded-xl">
      <div className="flex flex-col mx-auto justify-between p-5 px-10 gap-5 min-w-1/2">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Login</h1>
          <p className="text-black/70 font-semibold text-sm">
            Do not have an account, {" "}
            <span>
              <Link href="/signup" className="underline">
                create a new one.
              </Link>
            </span>
          </p>
        </div>
        <LoginForm />
        <Divider text="or continue with" />
        <div className="mx-auto w-full">
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
      <div className="relative w-1/2">
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
