import React from 'react';
import { User, Lock, Bell, Shield } from 'lucide-react';
import Card from '../../../components/UI/Card';
import Button from '../../../components/UI/Button';
import { useAuth } from '../../../context/AuthContext';

const PlayerSettings: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Account Settings</h1>
        <p className="text-gray-600">Manage your account settings and preferences.</p>
      </div>

      <Card className="mb-8">
        <h2 className="text-xl font-bold mb-4">Profile Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <User className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-gray-600">Update Profile Information</span>
            <Button variant="outline" className="ml-auto">Edit</Button>
          </div>
          <div className="flex items-center">
            <Lock className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-gray-600">Change Password</span>
            <Button variant="outline" className="ml-auto">Change</Button>
          </div>
        </div>
      </Card>

      <Card className="mb-8">
        <h2 className="text-xl font-bold mb-4">Notification Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <Bell className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-gray-600">Match Reminders</span>
            <Button variant="outline" className="ml-auto">Enable</Button>
          </div>
          <div className="flex items-center">
            <Bell className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-gray-600">Team Announcements</span>
            <Button variant="outline" className="ml-auto">Enable</Button>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-bold mb-4">Privacy Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-gray-600">Profile Visibility</span>
            <Button variant="outline" className="ml-auto">Public</Button>
          </div>
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-gray-600">Data Sharing</span>
            <Button variant="outline" className="ml-auto">Manage</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PlayerSettings; 