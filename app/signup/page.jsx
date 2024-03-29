"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
const SignUp = () => {
  const [err, setErr] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn("credentials", { email, password, redirect: true });
  };
  return (
    <div className="mt-14 mb-20 bg-gray-100  mx-auto max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-0">
        <Image
          width={500}
          height={500}
          src="/images/delivery.jpg"
          className="h-3/4 w-full object-cover md:h-full block "
          alt=""
        />
        <div className="self-center p-4 text-slate-700">
          <h1 className="text-4xl font-bold text-center">Sign Up</h1>
          {err && <h3 className=" my-4 p-2 rounded bg-rose-600">{err} </h3>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-xl">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3  outline-blue-900 focus:outline duration-150 delay-100 ease-linear rounded mt-2"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xl">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3  outline-blue-900 focus:outline duration-150 delay-100 ease-linear rounded mt-2"
                placeholder="example@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-xl">
                Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3  outline-blue-900 focus:outline duration-150 delay-100 ease-linear rounded mt-2"
                placeholder="xxxxxxxx"
              />
            </div>
            <div className="flex justify-between items-center">
              <input
                type="submit"
                value="Sign Up"
                className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded text-xl"
              />
              <p className="">
                Already have an account ?{" "}
                <Link href={"/login"} className="text-blue-600 underline">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
