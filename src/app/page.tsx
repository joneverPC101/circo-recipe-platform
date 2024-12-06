"use client";

import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Link from "next/link";

export default function Home() {
  const router = useRouter(); // Initialize the router instance

  // Placeholder for Google Sign-In functionality
  const handleGoogleSignIn = () => {
    console.log("Google Sign-In clicked");
    // Implement Firebase Google Sign-In logic here
  };

  // Navigate to the login page
  const handleLoginClick = () => {
    router.push("/auth/login");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100 text-gray-800 px-4">
      <header className="flex flex-col items-center mb-8 text-center">
        <img
          src="/images/logo.png"
          alt="Platform Logo"
          className="h-24 w-24 sm:h-32 sm:w-32 object-contain mb-4"
        />
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-2">
          Circo Recipe Share
        </h1>
        <p className="text-sm sm:text-lg text-gray-600 max-w-lg">
          Explore, create, and share your favorite recipes with the world.
        </p>
      </header>

      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-red-500 hover:bg-red-600 text-white text-base sm:text-lg font-semibold py-3 rounded-lg transition-all duration-200"
        >
          Sign in with Google
        </button>

        <div className="flex items-center text-gray-400">
          <div className="border-t w-full border-gray-300"></div>
          <span className="mx-4 text-sm sm:text-base">or</span>
          <div className="border-t w-full border-gray-300"></div>
        </div>

        <div className="flex flex-col space-y-4">
          {/* Login Button */}
          <button
            onClick={handleLoginClick}
            className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white text-base sm:text-lg font-semibold py-3 rounded-lg transition-all duration-200"
          >
            Login
          </button>

          {/* Sign Up Button */}
          <Link
            href="/auth/register"
            className="block w-full text-center bg-green-500 hover:bg-green-600 text-white text-base sm:text-lg font-semibold py-3 rounded-lg transition-all duration-200"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <footer className="mt-8 sm:mt-12 text-xs sm:text-sm text-gray-500 text-center">
        Made with ❤️ by Circo Team
      </footer>
    </main>
  );
}
