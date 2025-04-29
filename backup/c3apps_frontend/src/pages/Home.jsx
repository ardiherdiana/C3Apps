import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">C3Academy</h1>
          <div>
            {user ? (
              <div className="flex items-center space-x-4">
                <span>Welcome, {user.email}</span>
                {user.role === 'admin' && (
                  <Link to="/admin/dashboard">
                    <Button variant="secondary">Admin Dashboard</Button>
                  </Link>
                )}
                <Button onClick={logout} variant="secondary">Logout</Button>
              </div>
            ) : (
              <div className="space-x-4">
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary">Register</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Welcome to C3Academy</h2>
                <p className="text-gray-600">Your learning journey starts here</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;