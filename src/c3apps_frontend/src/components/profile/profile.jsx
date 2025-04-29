import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import {
  UserIcon,
  ClockIcon,
  StarIcon,
  CheckCircleIcon,
  PlusIcon,
  WalletIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "../../contexts/AuthContext";

const Profile = () => {
  const { user: authUser } = useAuth();

  // Demonstration data - in a real app, you would use data from authUser
  const user = {
    name: authUser?.name || "John Doe",
    email: authUser?.email || "john.doe@example.com",
    memberSince: authUser?.memberSince || "January 2024",
    coursesEnrolled: 3,
    averageRating: 4.8,
    completedCourses: 1,
    courses: [
      {
        id: 1,
        title: "Web3 Development Fundamentals",
        shortTitle: "Web3",
        instructor: "John Smith",
        level: "Beginner",
        levelColor: "green",
        progress: 80,
        progressColor: "green",
        rating: 4.9,
        lastAccessed: "2 days ago",
      },
      {
        id: 2,
        title: "Smart Contract Development",
        shortTitle: "Smart",
        instructor: "Emma Wilson",
        level: "Intermediate",
        levelColor: "yellow",
        progress: 45,
        progressColor: "yellow",
        rating: 4.8,
        lastAccessed: "1 week ago",
      },
      {
        id: 3,
        title: "DeFi Protocol Engineering",
        shortTitle: "DeFi",
        instructor: "Michael Chen",
        level: "Advanced",
        levelColor: "red",
        progress: 20,
        progressColor: "red",
        rating: 4.7,
        lastAccessed: "3 days ago",
      },
    ],
  };

  const getLevelBadgeClass = (color) => {
    switch (color) {
      case "green":
        return "bg-green-500/20 text-green-400";
      case "yellow":
        return "bg-yellow-500/20 text-yellow-400";
      case "red":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-blue-500/20 text-blue-400";
    }
  };

  const getProgressBarClass = (color) => {
    switch (color) {
      case "green":
        return "bg-green-500";
      case "yellow":
        return "bg-yellow-500";
      case "red":
        return "bg-red-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-16">
      {/* Navbar Component */}
      <Navbar />

      {/* Profile Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative top-20">
        <div className="bg-gray-800/70 rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex items-center">
              <div className="h-24 w-24 rounded-full bg-gray-700 flex items-center justify-center text-gray-400">
                <UserIcon className="h-12 w-12" />
              </div>
              <div className="ml-6">
                <h1 className="text-3xl font-bold text-white">{user.name}</h1>
                <p className="text-gray-400">{user.email}</p>
                <p className="text-gray-500 text-sm mt-1">
                  Member since {user.memberSince}
                </p>
              </div>
            </div>
            <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-4">
              <button className="flex items-center cursor-pointer justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all">
                <WalletIcon className="h-5 w-5 mr-2" />
                Connect Wallet
              </button>
              <button className="flex items-center justify-center px-4 cursor-pointer py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all">
                <PlusIcon className="h-5 w-5 mr-2" />
                Become an Instructor
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/70 rounded-xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                <AcademicCapIcon className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-gray-400 text-sm">Courses Enrolled</p>
                <p className="text-3xl font-bold text-white">
                  {user.coursesEnrolled}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/70 rounded-xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-yellow-500/20 text-yellow-400">
                <StarIcon className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-gray-400 text-sm">Average Rating</p>
                <p className="text-3xl font-bold text-white">
                  {user.averageRating}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/70 rounded-xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-green-500/20 text-green-400">
                <CheckCircleIcon className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-gray-400 text-sm">Completed Courses</p>
                <p className="text-3xl font-bold text-white">
                  {user.completedCourses}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* My Courses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">My Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {user.courses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-800/50 rounded-xl overflow-hidden shadow-lg"
            >
              {/* Course Preview Image (Dark placeholder) */}
              <div className="bg-gray-900 h-48 flex items-center justify-center">
                <span className="text-5xl font-bold text-white">
                  {course.shortTitle}
                </span>
              </div>

              <div className="p-6">
                {/* Level Badge */}
                <div className="flex justify-between items-center mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelBadgeClass(
                      course.levelColor
                    )}`}
                  >
                    {course.level}
                  </span>
                  <span className="text-yellow-400 font-medium">
                    {course.rating}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-lg font-bold text-white mb-1">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  {course.instructor}
                </p>

                {/* Progress Bar */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">
                    {course.progress}% complete
                  </span>
                  <div className="flex items-center text-sm text-gray-400">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>Last: {course.lastAccessed}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
                  <div
                    className={`h-2 rounded-full ${getProgressBarClass(
                      course.progressColor
                    )}`}
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>

                {/* Continue Button */}
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all">
                  Continue Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Profile;