import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Profile from "./components/profile/profile";
import Courses from "./components/courses/courses";
import CourseList from "./components/courselist/CourseList";
import MyLearning from "./components/mylearning/MyLearning";
// Protected route component
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courselist" element={<CourseList />} />
          <Route path="/mylearning" element={<MyLearning />} />
          {/* Protected user routes */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/my-learning"
            element={
              <ProtectedRoute>
                <div>My Learning Page</div>
              </ProtectedRoute>
            }
          />

          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <div>Course List Page</div>
              </ProtectedRoute>
            }
          />

          {/* Admin routes */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <div>Admin Dashboard</div>
              </ProtectedRoute>
            }
          />

          {/* Instructor routes */}
          <Route
            path="/instructor/*"
            element={
              <ProtectedRoute allowedRoles={["instructor", "admin"]}>
                <div>Instructor Dashboard</div>
              </ProtectedRoute>
            }
          />

          {/* Settings route */}
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <div>Settings Page</div>
              </ProtectedRoute>
            }
          />

          {/* 404 route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
