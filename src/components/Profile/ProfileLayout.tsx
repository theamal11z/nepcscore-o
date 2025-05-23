import React from 'react';
import { User } from '../../types';

interface ProfileLayoutProps {
  user: User;
  activeTab: string;
  onTabChange: (tab: string) => void;
  children: React.ReactNode;
  tabs: { id: string; label: string }[];
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({
  user,
  activeTab,
  onTabChange,
  children,
  tabs
}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center mb-8 p-6 bg-white rounded-lg shadow-sm border">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6">
          <img 
            src={'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'} 
            alt={user.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="text-center md:text-left flex-1">
          <h1 className="text-2xl font-bold mb-1">{user.name}</h1>
          <p className="text-gray-600 mb-2">{user.email}</p>
          <div className="flex flex-wrap justify-center md:justify-start items-center">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#DC143C] bg-opacity-10 text-[#DC143C] mr-2">
              {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
            </span>
            <span className="text-sm text-gray-500">
              Member since {new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
            </span>
          </div>
        </div>
        
        <div className="mt-4 md:mt-0">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
            Edit Profile
          </button>
        </div>
      </div>
      
      {/* Profile Tabs */}
      <div className="mb-6 border-b">
        <div className="flex overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === tab.id 
                  ? 'text-[#DC143C] border-b-2 border-[#DC143C]' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div>
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;
