import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import { useAuth } from '../../context/AuthContext';

interface DashboardLayoutProps {
  requiredRole?: 'fan' | 'organizer' | 'admin' | 'player';
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ requiredRole }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B0B0B]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#DC143C]"></div>
      </div>
    );
  }

  // If no user is logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If a specific role is required and user doesn't have it, redirect to their dashboard
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to={`/${user.role}/dashboard`} replace />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavBar />
      <main className="flex-grow pt-16 pb-8">
        <div className="container mx-auto px-4">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;