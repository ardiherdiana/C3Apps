import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import {
  AcademicCapIcon,
  BookOpenIcon,
  ClockIcon,
  CheckCircleIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const MyLearning = () => {
  // Dummy data kursus yang sedang dipelajari
  const learningCourses = [...Array(5)].map((_, i) => ({
    id: i + 1,
    title: `Web Development Bootcamp - Batch ${i + 1}`,
    instructor: ["Sarah Wilson", "Michael Chen", "Emma Davis"][i % 3],
    progress: Math.min(100, (i + 1) * 18),
    duration: `${Math.floor((i + 2) * 1.2)}h ${i * 10 + 20}m`,
    lastAccessed: `${i + 2} days ago`,
    lessonsCompleted: (i + 1) * 4,
    totalLessons: 24,
    thumbnail: `https://picsum.photos/200/150?random=${i}`,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />

      <main className="pt-28 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                My Learning
              </h1>
              <p className="text-gray-400">
                {learningCourses.length} courses in progress
              </p>
            </div>

            <div className="flex gap-4">
              <div className="group w-64 h-12 rounded-lg flex relative">
                <input
                  type="search"
                  placeholder="Search courses..."
                  className="w-full h-full border-2 p-3 rounded-lg bg-white/90 border-blue-900/30 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12 placeholder:text-gray-900/70 transition-all duration-300"
                />
                <BookOpenIcon className="h-5 w-5 text-blue-500/50 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 group-focus-within:text-blue-400" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {learningCourses.map((course) => (
              <div
                key={course.id}
                className="bg-gray-800/40 rounded-xl p-6 shadow-lg border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-32 h-24 rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {course.title}
                    </h3>
                    <p className="text-sm text-blue-400 font-medium mb-2">
                      {course.instructor}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1 text-purple-400" />
                        <span>{course.duration}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center">
                        <CheckCircleIcon className="h-4 w-4 mr-1 text-green-400" />
                        <span>
                          {course.lessonsCompleted}/{course.totalLessons}{" "}
                          lessons
                        </span>
                      </div>
                    </div>

                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div
                        className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-blue-400">
                        {course.progress}% Complete
                      </span>
                      <span className="text-gray-400">
                        Last accessed {course.lastAccessed}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700/50 flex justify-between">
                  <Link
                    to={`/course/${course.id}`}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Continue Learning
                  </Link>

                  <button className="text-gray-400 hover:text-red-400 transition-colors">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {learningCourses.length === 0 && (
            <div className="text-center py-20">
              <AcademicCapIcon className="h-20 w-20 text-gray-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-400 mb-2">
                No Active Courses
              </h2>
              <p className="text-gray-500 mb-6">
                Start learning by enrolling in one of our courses!
              </p>
              <Link
                to="/courses"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Browse Courses
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyLearning;
