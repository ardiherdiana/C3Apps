import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { StarIcon } from "@heroicons/react/24/outline";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />

      <main className="pt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="relative flex rounded-2xl overflow-hidden bg-gradient-to-r from-blue-900/30 to-purple-700/30 border border-gray-700/50 backdrop-blur-sm shadow-xl mb-24">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative justify-center items-center md:items-start md:justify-end flex flex-col px-6 py-16 sm:px-12 sm:py-24 lg:py-32 lg:px-16">
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
                src="/assets/img/c3bot.png"
                alt="C3 Academy Bot"
                className="w-96 h-96"
              />
            </div>
          </div>

          {/* Web Programming Courses Section */}
          <section className="mb-24">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">
                Learn Web Programming
              </h2>
              <Link
                to="/courses"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                View All →
              </Link>
            </div>

            <div className="flex overflow-x-scroll pb-6 over space-x-6 snap-x snap-mandatory">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="min-w-[300px] sm:min-w-[350px] bg-gray-800/40 rounded-xl p-4 shadow-lg border border-gray-700/50 backdrop-blur-sm snap-start flex-shrink-0 hover:bg-gray-800/50 transition-all duration-300"
                >
                  <div className="relative aspect-video bg-gray-700 rounded-lg overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30"></div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    {`Web Development Fundamentals ${i + 1}`}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">
                    By Crypto Code Academy
                  </p>

                  <div className="flex items-center justify-between text-sm mb-4">
                    <div className="flex items-center">
                      <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-yellow-400">4.{8 + i}</span>
                      <span className="text-gray-500 mx-2">|</span>
                      <span className="text-gray-400">
                        {i % 3 === 0
                          ? "Beginner"
                          : i % 3 === 1
                          ? "Intermediate"
                          : "Advanced"}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <img
                        src="../../public/assets/img/icp.png"
                        className="h-4 w-4 mr-1"
                        alt="Ethereum"
                      />
                      <span className="text-green-400">0.0{i + 1}5 ICP</span>
                    </div>
                  </div>

                  <button className="w-full py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg text-white text-sm font-medium transition-colors flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Buy with Crypto
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose C3Academy Section */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Why Choose C3Academy?
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                Revolutionizing online education with blockchain technology and
                cryptocurrency integration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Crypto Payments */}
              <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Crypto-Powered Payments
                </h3>
                <p className="text-gray-300">
                  Purchase courses using Bitcoin, ICP, or our native C3 token.
                  Enjoy instant settlements and low transaction fees.
                </p>
              </div>

              {/* NFT Certificates */}
              <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  NFT Certifications
                </h3>
                <p className="text-gray-300">
                  Receive verifiable NFT certificates upon course completion,
                  stored permanently on the blockchain.
                </p>
              </div>

              {/* DAO Governance */}
              <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  DAO Governance
                </h3>
                <p className="text-gray-300">
                  Participate in platform decisions through our decentralized
                  autonomous organization (DAO).
                </p>
              </div>

              {/* Web3 Content */}
              <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-12 w-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Web3 Curriculum
                </h3>
                <p className="text-gray-300">
                  Cutting-edge courses on blockchain development, smart
                  contracts, and decentralized applications.
                </p>
              </div>

              {/* Global Access */}
              <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-12 w-12 rounded-full bg-pink-500/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Borderless Access
                </h3>
                <p className="text-gray-300">
                  Learn from anywhere in the world using cryptocurrency, without
                  traditional banking barriers.
                </p>
              </div>

              {/* Earnings */}
              <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-12 w-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Earn Crypto
                </h3>
                <p className="text-gray-300">
                  Create and sell courses to earn cryptocurrency, with
                  transparent revenue sharing via smart contracts.
                </p>
              </div>
            </div>
          </section>

          {/* Crypto Call to Action */}
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm text-center mb-24">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Learning with Crypto?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Connect your wallet and access a world of decentralized education.
              Supported networks: ICP, Polygon, Binance Smart Chain.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/courses">
                <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-600 hover:to-purple-700">
                  Explore Courses
                </button>
              </Link>
              <Link to="/wallet">
                <button className="px-6 py-3 rounded-lg bg-gray-800/70 hover:bg-gray-700/70 text-gray-100 border border-gray-600/50 font-medium transition-all duration-300">
                  Connect Wallet
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Home;
