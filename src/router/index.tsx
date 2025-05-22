import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

// Layouts
import MainLayout from '../components/Layout/MainLayout';
import DashboardLayout from '../components/Layout/DashboardLayout';

// Public Pages
import LandingPage from '../pages/public/LandingPage';
import FeaturesPage from '../pages/public/FeaturesPage';
import AboutPage from '../pages/public/AboutPage';
import LoginPage from '../pages/auth/LoginPage';
import SignupPage from '../pages/auth/SignupPage';

// Feature Pages
import FanFeatures from '../pages/features/FanFeatures';
import OrganizerFeatures from '../pages/features/OrganizerFeatures';
import PlayerFeatures from '../pages/features/PlayerFeatures';
import AdminFeatures from '../pages/features/AdminFeatures';

// Dashboard Pages
import FanDashboard from '../pages/dashboard/fan/FanDashboard';
import LiveMatchesPage from '../pages/dashboard/fan/LiveMatchesPage';
import PlayersPage from '../pages/dashboard/fan/PlayersPage';
import SchedulePage from '../pages/dashboard/fan/SchedulePage';
import MatchDetailsPage from '../pages/dashboard/fan/MatchDetailsPage';
import OrganizerDashboard from '../pages/dashboard/organizer/OrganizerDashboard';
import AdminDashboard from '../pages/dashboard/admin/AdminDashboard';
import PlayerDashboard from '../pages/dashboard/player/PlayerDashboard';

// Error Pages
import NotFoundPage from '../pages/error/NotFoundPage';

import { AuthProvider } from '../context/AuthContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'features', element: <FeaturesPage /> },
      { path: 'features/fan', element: <FanFeatures /> },
      { path: 'features/organizer', element: <OrganizerFeatures /> },
      { path: 'features/player', element: <PlayerFeatures /> },
      { path: 'features/admin', element: <AdminFeatures /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
    ],
  },
  {
    path: '/fan',
    element: <DashboardLayout requiredRole="fan" />,
    children: [
      { index: true, element: <Navigate to="/fan/dashboard" replace /> },
      { path: 'dashboard', element: <FanDashboard /> },
      { path: 'live-matches', element: <LiveMatchesPage /> },
      { path: 'players', element: <PlayersPage /> },
      { path: 'schedule', element: <SchedulePage /> },
      { path: 'match/:matchId', element: <MatchDetailsPage /> },
    ],
  },
  {
    path: '/organizer',
    element: <DashboardLayout requiredRole="organizer" />,
    children: [
      { index: true, element: <Navigate to="/organizer/dashboard" replace /> },
      { path: 'dashboard', element: <OrganizerDashboard /> },
      // Add more organizer routes here
    ],
  },
  {
    path: '/admin',
    element: <DashboardLayout requiredRole="admin" />,
    children: [
      { index: true, element: <Navigate to="/admin/dashboard" replace /> },
      { path: 'dashboard', element: <AdminDashboard /> },
      // Add more admin routes here
    ],
  },
  {
    path: '/player',
    element: <DashboardLayout requiredRole="player" />,
    children: [
      { index: true, element: <Navigate to="/player/dashboard" replace /> },
      { path: 'dashboard', element: <PlayerDashboard /> },
      // Add more player routes here
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

const Router: React.FC = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default Router;