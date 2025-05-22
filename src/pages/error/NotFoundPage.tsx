import React from 'react';
import { Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
      <div className="text-center">
        <Trophy className="h-16 w-16 text-[#DC143C] mx-auto mb-6" />
        
        <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
        
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Looks like you've wandered off the cricket pitch! 
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link to="/">
          <Button size="lg">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;