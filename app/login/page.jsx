"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Login = () => {
  const [err, setErr] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
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
          <h1 className="text-4xl font-bold text-center">Login</h1>
          {err && <h3 className=" my-4 p-2 rounded bg-rose-600">{err} </h3>}
          <form onSubmit={handleSubmit} className="space-y-4">
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
                value="Login"
                className="bg-blue-500 text-white px-4 py-2 rounded text-xl"
              />
              <p className="text-blue-600 underline cursor-pointer">
                Forgot Password?
              </p>
            </div>
            <p className="">
              Not a member ?{" "}
              <Link href={"/register"} className="text-blue-600 underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
