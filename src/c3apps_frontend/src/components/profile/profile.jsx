import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import {
  UserIcon,
  StarIcon,
  CheckCircleIcon,
  PlusIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "../../contexts/AuthContext";

const Profile = () => {
  const { user: authUser } = useAuth();

  // Demonstration data
  const user = {
    name: authUser?.name || "John Doe",
    email: authUser?.email || "john.doe@example.com",
    memberSince: authUser?.memberSince || "January 2024",
    coursesEnrolled: 3,
    averageRating: 4.8,
    completedCourses: 1,
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-16">
      {/* Navbar Component */}
      <Navbar />

      {/* Profile Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative top-20">
        <div className="bg-gray-800/70 rounded-xl p-4 sm:p-8 shadow-lg">
          {/* Mobile Profile Header */}
          <div className="md:hidden">
            <div className="flex items-start">
              <div className="h-16 w-16 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 flex-shrink-0">
                <UserIcon className="h-8 w-8" />
              </div>
              <div className="ml-4 flex-grow">
                <h1 className="text-xl font-bold text-white">{user.name}</h1>
                <p className="text-gray-400 text-sm">{user.email}</p>
                <p className="text-gray-500 text-xs mt-1">
                  Member since {user.memberSince}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all">
                <PlusIcon className="h-5 w-5 mr-2" />
                Become an Instructor
              </button>
            </div>
          </div>

          {/* Desktop Profile Header */}
          <div className="hidden md:flex md:flex-row md:items-center md:justify-between">
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
            <div>
              <button className="flex items-center justify-center px-4 cursor-pointer py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all">
                <PlusIcon className="h-5 w-5 mr-2" />
                Become an Instructor
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-gray-800/70 rounded-xl p-4 sm:p-6 shadow-lg">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 rounded-lg bg-blue-500/20 text-blue-400">
                <AcademicCapIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-gray-400 text-xs sm:text-sm">Courses Enrolled</p>
                <p className="text-xl sm:text-3xl font-bold text-white">
                  {user.coursesEnrolled}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/70 rounded-xl p-4 sm:p-6 shadow-lg">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 rounded-lg bg-yellow-500/20 text-yellow-400">
                <StarIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-gray-400 text-xs sm:text-sm">Average Rating</p>
                <p className="text-xl sm:text-3xl font-bold text-white">
                  {user.averageRating}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/70 rounded-xl p-4 sm:p-6 shadow-lg">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 rounded-lg bg-green-500/20 text-green-400">
                <CheckCircleIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-gray-400 text-xs sm:text-sm">Completed Courses</p>
                <p className="text-xl sm:text-3xl font-bold text-white">
                  {user.completedCourses}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Profile;