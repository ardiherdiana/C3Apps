import React from "react";
import { Link } from "react-router-dom";

const AuthCard = ({
  title,
  children,
  footerText,
  footerLink,
  footerLinkText,
}) => {
  return (
    <div className="min-h-screen bg- flex items-center  justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-red-500 p-8 rounded-lg shadow-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          {title}
        </h2>
        {children}
        {footerText && (
          <p className="mt-4 text-center text-sm text-gray-600">
            {footerText}{" "}
            <Link
              to={footerLink}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {footerLinkText}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthCard;
