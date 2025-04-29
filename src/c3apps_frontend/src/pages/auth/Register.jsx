import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import Alert from "../../components/common/Alert";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate form
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const result = await register(formData.email, formData.password);

      if (result.success) {
        // Redirect to login page on successful registration
        navigate("/login", {
          state: { message: "Registration successful. Please log in." },
        });
      } else {
        setError(result.message || "Failed to register");
      }
    } catch (err) {
      setError("Failed to register. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-lg shadow-xl border border-blue-400/50 animate-pulse-slow relative glow-container">
        {/* Glow effect overlay */}
        <div className="absolute inset-0 rounded-lg glow-effect"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Create an Account
          </h2>

          {error && <Alert message={error} type="error" />}

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                className="appearance-none relative block w-full px-3 py-3 border border-blue-300/30 placeholder-gray-400 text-white rounded-md bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Create a password"
                className="appearance-none relative block w-full px-3 py-3 border border-blue-300/30 placeholder-gray-400 text-white rounded-md bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                placeholder="Confirm your password"
                className="appearance-none relative block w-full px-3 py-3 border border-blue-300/30 placeholder-gray-400 text-white rounded-md bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-lg hover:shadow-blue-500/50"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>

          <p className="mt-6 text-center text-white">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-blue-300 hover:text-blue-200 transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
      
      {/* CSS for the glowing effect */}
      <style jsx>{`
        .glow-container {
          box-shadow: 0 0 15px 2px rgba(59, 130, 246, 0.5);
        }
        
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 15px 2px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 25px 5px rgba(139, 92, 246, 0.7);
          }
        }
        
        .glow-effect {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #3b82f6);
          z-index: -1;
          filter: blur(15px);
          opacity: 0.5;
          border-radius: inherit;
        }
      `}</style>
    </div>
  );
};

export default Register;