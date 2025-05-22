import React from 'react';
import { Trophy, Users, Calendar, Clock, BarChart3 } from 'lucide-react';
import Card from '../../../components/UI/Card';
import Button from '../../../components/UI/Button';
import MatchCard from '../../../components/MatchCard';
import PlayerCard from '../../../components/PlayerCard';
import { useAuth } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';

// Mock data
const liveMatches = [
  {
    id: '1',
    teamA: { id: '1', name: 'Kathmandu XI', logo: '', players: [], matches: [] },
    teamB: { id: '2', name: 'Pokhara Rhinos', logo: '', players: [], matches: [] },
    date: new Date(),
    venue: 'Tribhuvan University Ground',
    overs: 20,
    status: 'live' as const,
    scoreA: { runs: 156, wickets: 6, overs: 18.2 },
    scoreB: { runs: 123, wickets: 4, overs: 15.0 },
    ballByBall: [],
    organizer: '2'
  },
  {
    id: '2',
    teamA: { id: '3', name: 'Chitwan Tigers', logo: '', players: [], matches: [] },
    teamB: { id: '4', name: 'Biratnagar Kings', logo: '', players: [], matches: [] },
    date: new Date(),
    venue: 'Mulpani Cricket Ground',
    overs: 50,
    status: 'live' as const,
    scoreA: { runs: 220, wickets: 8, overs: 40.3 },
    scoreB: { runs: 0, wickets: 0, overs: 0 },
    ballByBall: [],
    organizer: '2'
  }
];

const upcomingMatches = [
  {
    id: '3',
    teamA: { id: '5', name: 'Lalitpur Patriots', logo: '', players: [], matches: [] },
    teamB: { id: '6', name: 'Bhairahawa Gladiators', logo: '', players: [], matches: [] },
    date: new Date(Date.now() + 86400000), // tomorrow
    venue: 'Kirtipur Cricket Ground',
    overs: 20,
    status: 'upcoming' as const,
    ballByBall: [],
    organizer: '2'
  }
];

const topPlayers = [
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
  }
];

const FanDashboard: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Welcome, {user?.name}!</h1>
        <p className="text-gray-600">Stay updated with the latest cricket action in Nepal.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-[#DC143C] to-red-800 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg mb-1">Live Matches</h3>
              <p className="text-white text-opacity-80 text-sm">Happening now</p>
            </div>
            <div className="p-2 bg-white bg-opacity-20 rounded-md">
              <Trophy className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">{liveMatches.length}</span>
          </div>
          <div className="mt-4">
            <Link to="/fan/live-matches">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:bg-opacity-10">
                Watch Now
              </Button>
            </Link>
          </div>
        </Card>
        
        <Card>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg mb-1">Players</h3>
              <p className="text-gray-500 text-sm">Top cricketers</p>
            </div>
            <div className="p-2 bg-[#DC143C] bg-opacity-10 rounded-md text-[#DC143C]">
              <Users className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">124</span>
          </div>
          <div className="mt-4">
            <Link to="/fan/players">
              <Button variant="outline">
                View Players
              </Button>
            </Link>
          </div>
        </Card>
        
        <Card>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg mb-1">Upcoming</h3>
              <p className="text-gray-500 text-sm">Scheduled matches</p>
            </div>
            <div className="p-2 bg-[#DC143C] bg-opacity-10 rounded-md text-[#DC143C]">
              <Calendar className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">{upcomingMatches.length}</span>
          </div>
          <div className="mt-4">
            <Link to="/fan/schedule">
              <Button variant="outline">
                View Schedule
              </Button>
            </Link>
          </div>
        </Card>
      </div>
      
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Live Matches</h2>
          <Link to="/fan/live-matches" className="text-[#DC143C] text-sm font-medium flex items-center">
            View all <span className="ml-1">→</span>
          </Link>
        </div>
        
        {liveMatches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {liveMatches.map((match) => (
              <MatchCard 
                key={match.id} 
                match={match} 
                onClick={() => console.log('View match', match.id)}
              />
            ))}
          </div>
        ) : (
          <Card className="text-center py-8">
            <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No live matches at the moment.</p>
            <p className="text-gray-500 text-sm mt-2">Check back later or view the upcoming schedule.</p>
          </Card>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Upcoming Matches</h2>
            <Link to="/fan/schedule" className="text-[#DC143C] text-sm font-medium flex items-center">
              View all <span className="ml-1">→</span>
            </Link>
          </div>
          
          {upcomingMatches.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {upcomingMatches.map((match) => (
                <MatchCard 
                  key={match.id} 
                  match={match} 
                  onClick={() => console.log('View match', match.id)}
                />
              ))}
            </div>
          ) : (
            <Card className="text-center py-6">
              <Calendar className="h-10 w-10 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600">No upcoming matches scheduled.</p>
            </Card>
          )}
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Top Players</h2>
            <Link to="/fan/players" className="text-[#DC143C] text-sm font-medium flex items-center">
              View all <span className="ml-1">→</span>
            </Link>
          </div>
          
          <div className="space-y-4">
            {topPlayers.map((player) => (
              <PlayerCard 
                key={player.id} 
                player={player} 
                onClick={() => console.log('View player', player.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FanDashboard;