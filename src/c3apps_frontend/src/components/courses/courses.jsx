import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { StarIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const BrowseCourses = () => {
  // Daftar nama instruktur acak
  const instructors = [
    "Alex Johnson",
    "Sarah Wilson",
    "Michael Chen",
    "Emma Davis",
    "James Brown",
    "Linda Miller",
    "Robert Taylor",
    "Sophia Anderson",
  ];

  const courses = [...Array(12)].map((_, i) => ({
    id: i + 1,
    title: `Web Development Fundamentals ${i + 1}`,
    instructor: instructors[i % instructors.length], // Nama acak
    level: i % 3 === 0 ? "Beginner" : i % 3 === 1 ? "Intermediate" : "Advanced",
    rating: (4.8 + i * 0.05).toFixed(1),
    price: (0.015 + i * 0.005).toFixed(3),
    duration: `${Math.floor((i + 2) * 1.5)}h ${i * 5 + 15}m`,
    isTrending: i % 4 === 0, // Flag untuk trending course
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />

      <main className="pt-28 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="group w-[800px] h-14 rounded-lg mb-8 flex mx-auto relative ">
          <input
            type="search"
            placeholder="Search Courses..."
            className="w-full h-full border-2 p-5 rounded-lg bg-white/90  border-blue-900/30 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12 placeholder:text-gray-900/70 transition-all duration-300"
          />
          <MagnifyingGlassIcon className="h-6 w-6 text-blue-900/50 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 group-focus-within:text-blue-900/80" />
        </div>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">All Courses</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-gray-800/40 rounded-xl p-4 shadow-lg border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 flex flex-col h-full min-h-[400px]"
              >
                <div className="relative aspect-video bg-gray-700 rounded-lg overflow-hidden mb-4 flex-grow">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30"></div>

                  {/* Trending Badge */}
                  {course.isTrending && (
                    <div className="absolute top-2 right-2 px-3 py-1 rounded-full bg-yellow-500/90 text-xs font-medium text-gray-900">
                      Trending Course
                    </div>
                  )}

                  <div className="absolute bottom-2 left-2 px-2 py-1 rounded-md bg-black/40 text-xs text-white">
                    {course.duration}
                  </div>
                </div>

                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-blue-400 mb-3 font-medium">
                    {course.instructor}
                  </p>

                  <div className="flex items-center justify-between text-sm mb-4 mt-auto">
                    <div className="flex items-center">
                      <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-yellow-400">{course.rating}</span>
                      <span className="text-gray-500 mx-2">|</span>
                      <span
                        className={`text-sm ${
                          course.level === "Beginner"
                            ? "text-green-400"
                            : course.level === "Intermediate"
                            ? "text-yellow-400"
                            : "text-red-400"
                        }`}
                      >
                        {course.level}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <img
                        src="../../../public/assets/img/icp.png"
                        className="h-4 w-4 mr-1"
                        alt="ICP"
                      />
                      <span className="text-green-400">{course.price} ICP</span>
                    </div>
                  </div>

                  <button className="w-full py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg text-white text-sm font-medium transition-colors">
                    Enroll with Crypto
                  </button>
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

export default BrowseCourses;
