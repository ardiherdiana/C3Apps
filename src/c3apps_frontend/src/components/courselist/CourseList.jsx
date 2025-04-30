import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import {
  StarIcon,
  BookmarkIcon,
  ClockIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const CourseList = () => {
  // Dummy data dengan status progress
  const courses = [...Array(6)].map((_, i) => ({
    id: i + 1,
    title: `Advanced Web Development ${i + 1}`,
    instructor: ["Sarah Wilson", "Michael Chen", "Emma Davis"][i % 3],
    progress: Math.min(100, (i + 1) * 15),
    status: ["completed", "ongoing", "not-started"][i % 3],
    duration: `${Math.floor((i + 2) * 1.5)}h ${i * 5 + 15}m`,
    rating: (4.5 + i * 0.1).toFixed(1),
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />

      <main className="pt-28 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-white">My Course List</h1>
            <div className="group w-96 h-14 rounded-lg flex relative">
              <input
                type="search"
                placeholder="Search Your Courses..."
                className="w-full h-full border-2 p-5 rounded-lg bg-white/90  border-blue-900/30 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12 placeholder:text-gray-900/70 transition-all duration-300"
              />
              <BookmarkIcon className="h-6 w-6 text-purple-500/50 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 group-focus-within:text-purple-400" />
            </div>
          </div>

          <div className="space-y-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-gray-800/40 rounded-xl p-6 shadow-lg border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-3 rounded-lg ${
                          course.status === "completed"
                            ? "bg-green-500/20"
                            : course.status === "ongoing"
                            ? "bg-blue-500/20"
                            : "bg-gray-500/20"
                        }`}
                      >
                        {course.status === "completed" ? (
                          <CheckCircleIcon className="h-6 w-6 text-green-400" />
                        ) : course.status === "ongoing" ? (
                          <ClockIcon className="h-6 w-6 text-blue-400" />
                        ) : (
                          <BookmarkIcon className="h-6 w-6 text-gray-400" />
                        )}
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
                      </div>
                      <span>•</span>
                      <span>{course.duration}</span>
                      <span>•</span>
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          course.status === "completed"
                            ? "bg-green-500/20 text-green-400"
                            : course.status === "ongoing"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-gray-500/20 text-gray-400"
                        }`}
                      >
                        {course.status.replace("-", " ")}
                      </span>
                    </div>
                  </div>

                  <div className="w-64 ml-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Progress</span>
                      <span className="text-sm text-purple-400">
                        {course.progress}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          course.status === "completed"
                            ? "bg-green-500"
                            : course.status === "ongoing"
                            ? "bg-blue-500"
                            : "bg-gray-500"
                        }`}
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-gray-700/50 pt-4">
                  <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                    <BookmarkIcon className="h-5 w-5 mr-2" />
                    Continue Learning
                  </button>
                  <button className="text-gray-400 hover:text-red-400 transition-colors">
                    Remove from List
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

export default CourseList;
