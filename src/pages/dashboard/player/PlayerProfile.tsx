import React from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';
import Card from '../../../components/UI/Card';
import Avatar from '../../../components/UI/Avatar';
import { useAuth } from '../../../context/AuthContext';

// Mock player profile data
const playerProfile = {
  name: 'Paras Khadka',
  role: 'All-rounder',
  team: 'Kathmandu Kings',
  email: 'paras.khadka@example.com',
  phone: '+977 1234567890',
  location: 'Kathmandu, Nepal',
  bio: 'Experienced all-rounder with a passion for cricket. Leading the team with dedication and skill.',
  profileImage: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=300'
};

const PlayerProfile: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Player Profile</h1>
        <p className="text-gray-600">View and manage your personal information.</p>
      </div>

      <Card className="flex flex-col items-center text-center p-8">
        <Avatar 
          src={playerProfile.profileImage} 
          alt={playerProfile.name} 
          size="xl" 
          className="mb-4"
        />
        <h2 className="text-xl font-bold">{playerProfile.name}</h2>
        <p className="text-gray-600 mb-1">{playerProfile.role}</p>
        <p className="text-gray-600 mb-4">{playerProfile.team}</p>
        
        <div className="mt-6 w-full">
          <div className="flex items-center mb-2">
            <Mail className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-gray-600">{playerProfile.email}</span>
          </div>
          <div className="flex items-center mb-2">
            <Phone className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-gray-600">{playerProfile.phone}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-gray-600">{playerProfile.location}</span>
          </div>
        </div>
        
        <div className="mt-6 w-full">
          <h3 className="font-bold mb-2">Bio</h3>
          <p className="text-gray-600">{playerProfile.bio}</p>
        </div>
      </Card>
    </div>
  );
};

export default PlayerProfile; 