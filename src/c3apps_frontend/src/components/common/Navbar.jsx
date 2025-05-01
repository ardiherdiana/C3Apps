import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  UserCircleIcon,
  ChevronDownIcon,
  HeartIcon,
  AcademicCapIcon,
  BookOpenIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const location = useLocation();
  const { user } = useAuth(); // Menggunakan AuthContext untuk mendapatkan user
  const isLoggedIn = !!user; // Cek status login berdasarkan user dari AuthContext

  // Cek apakah wallet sudah terhubung saat komponen dimuat
  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.ic?.plug) {
        const connected = await window.ic.plug.isConnected();
        setIsWalletConnected(connected);

        if (connected) {
          const principal = await window.ic.plug.agent.getPrincipal();
          setWalletAddress(principal.toString());
        }
      }
    };

    checkWalletConnection();
  }, []);

  // Track scroll position for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isUserMenuOpen && !event.target.closest(".user-menu-container")) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isUserMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fungsi untuk menghubungkan ke Plug wallet
  const handleConnectWallet = async () => {
    if (!window.ic?.plug) {
      window.open("https://plugwallet.ooo/", "_blank");
      return;
    }

    try {
      // Whitelist untuk dapp
      const whitelist = []; // Tambahkan canister ID dari aplikasi Anda
      const host = "https://mainnet.dfinity.network"; // Atau gunakan host yang sesuai

      // Minta izin untuk terhubung ke wallet
      const requestConnect = await window.ic.plug.requestConnect({
        whitelist,
        host,
      });

      if (requestConnect) {
        const principal = await window.ic.plug.agent.getPrincipal();
        setWalletAddress(principal.toString());
        setIsWalletConnected(true);
        console.log("Connected to wallet:", principal.toString());
      }
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  // Fungsi untuk memutuskan koneksi wallet
  const handleDisconnectWallet = async () => {
    if (window.ic?.plug) {
      try {
        await window.ic.plug.disconnect();
        setWalletAddress("");
        setIsWalletConnected(false);
        console.log("Wallet disconnected");
      } catch (error) {
        console.error("Error disconnecting wallet:", error);
      }
    }
  };

  // Tampilkan alamat wallet dalam format yang dipersingkat
  const shortenAddress = (address) => {
    if (!address) return "";
    return `${address.substring(0, 6)}...${address.substring(
      address.length - 4
    )}`;
  };

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Shared link styling
  const getLinkStyle = (path) => {
    return `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive(path)
        ? "text-white bg-gray-800/60"
        : "text-gray-300 hover:text-white hover:bg-gray-800/40"
    }`;
  };

  return (
    <nav
      className={`${
        scrolled
          ? "bg-gray-900/95 shadow-lg backdrop-blur-md"
          : "bg-gray-900/80 backdrop-blur-sm"
      } fixed w-full z-50 border-b border-gray-800/50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center group">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-500 transition-all duration-300">
              C3Academy
            </span>
          </Link>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 md:space-x-4">
            <Link to="/courses" className={getLinkStyle("/courses")}>
              <BookOpenIcon className="h-5 w-5 mr-1" />
              <span>Browse Courses</span>
            </Link>
            <Link to="/courselist" className={getLinkStyle("/courselist")}>
              <HeartIcon className="h-5 w-5 mr-1" />
              <span>Course List</span>
            </Link>
            <Link to="/mylearning" className={getLinkStyle("/MyLearning")}>
              <AcademicCapIcon className="h-5 w-5 mr-1" />
              My Learning
            </Link>

            {/* User Menu Dropdown */}
            <div className="relative user-menu-container">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-800/40"
                aria-label="User menu"
              >
                <UserCircleIcon className="h-5 w-5" />
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isUserMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-xl shadow-xl py-2 ring-1 ring-black ring-opacity-5 border border-gray-700/50 backdrop-blur-md">
                  <Link
                    to="/profile"
                    className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-700/70 hover:text-white transition-all duration-150 flex items-center space-x-2"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <UserCircleIcon className="h-5 w-5" />
                    <span>Your Profile</span>
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-700/70 hover:text-white transition-all duration-150 flex items-center space-x-2"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Settings</span>
                  </Link>
                  <div className="border-t border-gray-700 my-1"></div>
                  <Link
                    to="/login"
                    className="block px-4 py-3 text-sm text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all duration-150 flex items-center space-x-2"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    <span>Sign out</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Conditional rendering for Get Started / Connect Wallet button */}
            {isLoggedIn ? (
              isWalletConnected ? (
                <div className="flex items-center space-x-2">
                  <div className="px-5 py-2 rounded-lg bg-gray-800/60 text-sm font-medium text-green-400 border border-green-500/30">
                    {shortenAddress(walletAddress)}
                  </div>
                  <button
                    onClick={handleDisconnectWallet}
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Disconnect
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleConnectWallet}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Connect Wallet
                </button>
              )
            ) : (
              <Link
                to="/register"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-gray-900/95 backdrop-blur-md border-t border-gray-800/30`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          <Link to="/courses" className={`${getLinkStyle("/courses")} w-full`}>
            <BookOpenIcon className="h-5 w-5 mr-2" />
            <span>Browse Courses</span>
          </Link>
          <Link to="/mylearning" className={getLinkStyle("/MyLearning")}>
            <AcademicCapIcon className="h-5 w-5 mr-1" />
            My Learning
          </Link>
          <Link
            to="/courselist"
            className={`${getLinkStyle("/courselist")} w-full`}
          >
            <HeartIcon className="h-5 w-5 mr-2" />
            <span>Course List</span>
          </Link>
          <Link
            to="/admin/dashboard"
            className={`${getLinkStyle("/admin/dashboard")} w-full`}
          >
            <span>Admin</span>
          </Link>

          <div className="pt-2 border-t border-gray-800/50">
            <Link
              to="/profile"
              className={`${getLinkStyle("/profile")} w-full`}
            >
              <UserCircleIcon className="h-5 w-5 mr-2" />
              <span>Your Profile</span>
            </Link>
            <Link
              to="/settings"
              className={`${getLinkStyle("/settings")} w-full mt-2`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Settings</span>
            </Link>
            <Link
              to="/login"
              className="flex items-center w-full px-3 py-2 mt-2 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-lg transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span>Sign out</span>
            </Link>
          </div>

          {/* Conditional rendering for mobile Get Started / Connect Wallet button */}
          <div className="pt-2">
            {isLoggedIn ? (
              isWalletConnected ? (
                <div className="flex flex-col space-y-2">
                  <div className="px-3 py-2 rounded-lg bg-gray-800/60 text-sm font-medium text-green-400 border border-green-500/30 text-center">
                    {shortenAddress(walletAddress)}
                  </div>
                  <button
                    onClick={handleDisconnectWallet}
                    className="block w-full text-center bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Disconnect Wallet
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleConnectWallet}
                  className="block w-full text-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Connect Wallet
                </button>
              )
            ) : (
              <Link
                to="/register"
                className="block w-full text-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
