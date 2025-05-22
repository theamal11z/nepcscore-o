import React, { useState, useEffect } from 'react';
import { Search, Users } from 'lucide-react';
import Card from '../../../components/UI/Card';
import PlayerCard from '../../../components/PlayerCard';
import Button from '../../../components/UI/Button';
import { Player } from '../../../types';

// Mock player data
const allPlayers: Player[] = [
  {
    id: '1',
    name: 'Paras Khadka',
    role: 'All-rounder',
    teamId: '1',
    stats: {
      matches: 42,
      runs: 1624,
      wickets: 38,
      highestScore: 106,
      bestBowling: '5/26',
      centuries: 2,
      fifties: 8
    },
    profileImage: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '2',
    name: 'Sandeep Lamichhane',
    role: 'Bowler',
    teamId: '3',
    stats: {
      matches: 36,
      runs: 204,
      wickets: 76,
      highestScore: 32,
      bestBowling: '6/16',
      centuries: 0,
      fifties: 0
    },
    profileImage: 'https://images.pexels.com/photos/8885042/pexels-photo-8885042.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '3',
    name: 'Rohit Paudel',
    role: 'Batsman',
    teamId: '2',
    stats: {
      matches: 28,
      runs: 982,
      wickets: 4,
      highestScore: 86,
      bestBowling: '2/24',
      centuries: 0,
      fifties: 6
    },
    profileImage: 'https://images.pexels.com/photos/7607440/pexels-photo-7607440.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '4',
    name: 'Kushal Bhurtel',
    role: 'Batsman',
    teamId: '1',
    stats: {
      matches: 22,
      runs: 742,
      wickets: 0,
      highestScore: 94,
      bestBowling: '-',
      centuries: 0,
      fifties: 5
    },
    profileImage: 'https://images.pexels.com/photos/6667960/pexels-photo-6667960.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '5',
    name: 'Sompal Kami',
    role: 'All-rounder',
    teamId: '4',
    stats: {
      matches: 32,
      runs: 486,
      wickets: 48,
      highestScore: 52,
      bestBowling: '4/28',
      centuries: 0,
      fifties: 1
    },
    profileImage: 'https://images.pexels.com/photos/7991671/pexels-photo-7991671.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '6',
    name: 'Dipendra Singh Airee',
    role: 'All-rounder',
    teamId: '2',
    stats: {
      matches: 30,
      runs: 864,
      wickets: 22,
      highestScore: 78,
      bestBowling: '3/14',
      centuries: 0,
      fifties: 4
    },
    profileImage: 'https://images.pexels.com/photos/4166788/pexels-photo-4166788.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

const PlayersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [players, setPlayers] = useState<Player[]>(allPlayers);

  useEffect(() => {
    let filteredPlayers = [...allPlayers];
    
    // Apply search filter
    if (searchTerm) {
      filteredPlayers = filteredPlayers.filter(player => 
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply role filter
    if (roleFilter !== 'all') {
      filteredPlayers = filteredPlayers.filter(player => 
        player.role.toLowerCase() === roleFilter.toLowerCase()
      );
    }
    
    setPlayers(filteredPlayers);
  }, [searchTerm, roleFilter]);

  return (
    <div className="py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Cricket Players</h1>
        <p className="text-gray-600">Explore profiles and statistics of players from across Nepal</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative w-full md:w-1/2">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search players..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-[#DC143C]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex space-x-2">
          <Button 
            variant={roleFilter === 'all' ? 'primary' : 'outline'} 
            onClick={() => setRoleFilter('all')}
          >
            All
          </Button>
          <Button 
            variant={roleFilter === 'batsman' ? 'primary' : 'outline'} 
            onClick={() => setRoleFilter('batsman')}
          >
            Batsman
          </Button>
          <Button 
            variant={roleFilter === 'bowler' ? 'primary' : 'outline'} 
            onClick={() => setRoleFilter('bowler')}
          >
            Bowler
          </Button>
          <Button 
            variant={roleFilter === 'all-rounder' ? 'primary' : 'outline'} 
            onClick={() => setRoleFilter('all-rounder')}
          >
            All-rounder
          </Button>
        </div>
      </div>
      
      {players.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player) => (
            <PlayerCard 
              key={player.id} 
              player={player} 
              onClick={() => console.log('Navigate to player details', player.id)}
            />
          ))}
        </div>
      ) : (
        <Card className="text-center py-12">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-lg text-gray-600">No players found</p>
          <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
        </Card>
      )}
      
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">Player Statistics</h2>
        <p className="text-gray-600 mb-4">
          Player profiles include comprehensive statistics from their career, including matches played, 
          runs scored, wickets taken, and notable achievements.
        </p>
        <p className="text-gray-600">
          For more detailed analytics and comparison tools, check out our advanced statistics section.
        </p>
      </div>
    </div>
  );
};

export default PlayersPage;
