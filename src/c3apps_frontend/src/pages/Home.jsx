import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Button from "../components/common/Button";

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />

      <header className="pt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative flex rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-gray-700/50 backdrop-blur-sm shadow-xl">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative justify-center items-center md:items-start md:justify-end flex flex-col px-6 py-16  sm:px-12 sm:py-24 lg:py-32 lg:px-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                <span className="block text-blue-100">Welcome to</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mt-2">
                  C3Academy
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-xl text-center md:text-start text-gray-300">
                Accelerate your learning journey with our comprehensive courses
                designed by industry experts.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/courses">
                  <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-600 hover:to-purple-700 transform hover:-translate-y-0.5">
                    Browse Courses
                  </button>
                </Link>
                <Link to="/register">
                  <button className="px-8 py-3 rounded-lg bg-gray-800/70 hover:bg-gray-700/70 text-gray-100 border border-gray-600/50 font-medium transition-all duration-300 transform hover:-translate-y-0.5">
                    Join Community
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:flex hidden items-center justify-center mx-auto">
              <img
                src="../../../public/assets/img/c3bot.png"
                alt=""
                className="w-96 h-96"
              />
            </div>
          </div>

          {user && (
            <div className="mt-8 px-4 py-6 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400">Logged in as</span>
                  <span className="text-lg font-medium text-white">
                    {user.email}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {user.role === "admin" && (
                    <Link to="/admin/dashboard">
                      <button className="px-4 py-2 rounded-lg bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 border border-purple-500/30 transition-all duration-200">
                        Admin Dashboard
                      </button>
                    </Link>
                  )}
                  <button
                    onClick={logout}
                    className="px-4 py-2 rounded-lg bg-red-500/10 text-red-300 hover:bg-red-500/20 border border-red-500/30 transition-all duration-200"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-800/50 transform hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">
                Expert-Led Courses
              </h2>
              <p className="text-gray-300">
                Learn from industry professionals with real-world experience in
                cutting-edge technologies.
              </p>
            </div>

            <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-800/50 transform hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">
                Interactive Learning
              </h2>
              <p className="text-gray-300">
                Engage with hands-on projects, quizzes, and coding challenges
                designed to reinforce knowledge.
              </p>
            </div>

            <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-800/50 transform hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">
                Community Support
              </h2>
              <p className="text-gray-300">
                Join a thriving community of learners and mentors who are ready
                to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
};

export default Home;
