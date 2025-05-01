import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import {
  StarIcon,
  HeartIcon,
  CurrencyDollarIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

const CourseList = () => {
  // Data dummy wishlist yang benar
  const wishlistItems = [...Array(6)].map((_, i) => ({
    id: i + 1,
    title: `Advanced Web Development ${i + 1}`,
    instructor: ["Sarah Wilson", "Michael Chen", "Emma Davis"][i % 3],
    price: [49.99, 89.99, 0, 129.99][i % 4],
    rating: (4.5 + i * 0.1).toFixed(1),
    students: Math.floor(1500 + i * 234),
    isLiked: i % 2 === 0,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />

      <main className="pt-28 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-white">My Wishlist</h1>
            <div className="group w-96 h-14 rounded-lg flex relative">
              <input
                type="search"
                placeholder="Search Wishlist..."
                className="w-full h-full border-2 p-5 rounded-lg bg-white/90 border-purple-900/30 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-12 placeholder:text-gray-900/70 transition-all duration-300"
              />
              <HeartIcon className="h-6 w-6 text-purple-500/50 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 group-focus-within:text-purple-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {wishlistItems.map((course) => (
              <div
                key={course.id}
                className="bg-gray-800/40 rounded-xl p-6 shadow-lg border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-purple-500/20">
                        <BookmarkIcon className="h-6 w-6 text-purple-400" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {course.title}
                        </h3>
                        <p className="text-sm text-purple-400 font-medium">
                          {course.instructor}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-400">
                      <div className="flex items-center">
                        <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>{course.rating}</span>
                        <span className="ml-2">
                          ({course.students}+ students)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-48 ml-6 flex flex-col items-end">
                    <div className="text-right">
                      {course.price > 0 ? (
                        <div className="text-2xl font-bold text-purple-400">
                          ${course.price}
                          <span className="text-sm text-gray-400 ml-1">
                            /course
                          </span>
                        </div>
                      ) : (
                        <div className="text-green-400 font-bold">FREE</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-gray-700/50 pt-4">
                  <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                    <CurrencyDollarIcon className="h-5 w-5 mr-2" />
                    {course.price > 0 ? "Buy Now" : "Enroll Now"}
                  </button>
                  <div className="flex items-center gap-4">
                    <button className="text-gray-400 hover:text-red-400 transition-colors">
                      Remove
                    </button>
                    <button className="text-gray-400 hover:text-purple-400 transition-colors">
                      {course.isLiked ? (
                        <HeartIcon className="h-6 w-6 fill-current text-red-500" />
                      ) : (
                        <HeartIcon className="h-6 w-6" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CourseList;
