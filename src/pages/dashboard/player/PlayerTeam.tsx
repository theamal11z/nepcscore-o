import React from 'react';
import { Users, Send, Check, X } from 'lucide-react';
import Card from '../../../components/UI/Card';
import Button from '../../../components/UI/Button';
import { useAuth } from '../../../context/AuthContext';

// Mock team data
const teamData = {
  currentTeam: {
    name: 'Kathmandu Kings',
    logo: 'https://example.com/logo.png',
    members: 15,
    coach: 'John Doe',
    founded: '2020'
  },
  availableTeams: [
    { id: '1', name: 'Pokhara Rhinos', logo: 'https://example.com/rhinos.png', members: 12 },
    { id: '2', name: 'Chitwan Tigers', logo: 'https://example.com/tigers.png', members: 14 },
    { id: '3', name: 'Lalitpur Patriots', logo: 'https://example.com/patriots.png', members: 13 }
  ],
  pendingRequests: [
    { id: '1', team: 'Biratnagar Kings', status: 'Pending' },
    { id: '2', team: 'Bhairahawa Gladiators', status: 'Pending' }
  ]
};

const PlayerTeam: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">My Team</h1>
        <p className="text-gray-600">View your current team and manage team affiliations.</p>
      </div>

      <Card className="mb-8">
        <h2 className="text-xl font-bold mb-4">Current Team</h2>
        <div className="flex items-center">
          <img src={teamData.currentTeam.logo} alt={teamData.currentTeam.name} className="h-16 w-16 mr-4" />
          <div>
            <h3 className="font-bold">{teamData.currentTeam.name}</h3>
            <p className="text-gray-600">Members: {teamData.currentTeam.members}</p>
            <p className="text-gray-600">Coach: {teamData.currentTeam.coach}</p>
            <p className="text-gray-600">Founded: {teamData.currentTeam.founded}</p>
          </div>
        </div>
      </Card>

      <Card className="mb-8">
        <h2 className="text-xl font-bold mb-4">Available Teams</h2>
        <div className="space-y-4">
          {teamData.availableTeams.map((team) => (
            <div key={team.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={team.logo} alt={team.name} className="h-10 w-10 mr-3" />
                <div>
                  <h3 className="font-medium">{team.name}</h3>
                  <p className="text-sm text-gray-600">Members: {team.members}</p>
                </div>
              </div>
              <Button variant="outline">Send Request</Button>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-bold mb-4">Pending Requests</h2>
        <div className="space-y-4">
          {teamData.pendingRequests.map((request) => (
            <div key={request.id} className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{request.team}</h3>
                <p className="text-sm text-gray-600">Status: {request.status}</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" className="text-green-500"><Check /></Button>
                <Button variant="outline" className="text-red-500"><X /></Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default PlayerTeam; 