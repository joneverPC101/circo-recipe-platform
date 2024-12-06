"use client"; // Mark the file as a Client Component

import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Head from "next/head";
import Link from "next/link";
import { auth } from "@/lib/firebase";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100 px-4">
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
            Welcome Back
          </h1>
          <p className="text-center text-sm text-gray-600 mb-6">
            Login to access your account and explore recipes.
          </p>
          {error && <p className="text-red-500 text-sm mb-4">{error.message}</p>}

          {/* Login Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-sm focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-sm focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="border-t w-full border-gray-300"></div>
            <span className="mx-4 text-sm text-gray-500">or</span>
            <div className="border-t w-full border-gray-300"></div>
          </div>

          {/* Google Sign-In Button */}
          <button
            onClick={() => signInWithGoogle()}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Sign in with Google
          </button>
          {loading && <p className="text-center mt-4 text-gray-600">Loading...</p>}
          {user && (
            <p className="text-center text-green-500 text-sm mt-4">
              Welcome {user.user.displayName}!
            </p>
          )}

          {/* Sign-Up Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link href="/auth/register" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
