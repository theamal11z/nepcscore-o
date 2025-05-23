import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import Card from '../../../components/UI/Card';
import MatchCard from '../../../components/MatchCard';
import Button from '../../../components/UI/Button';
import { Match } from '../../../types';
import { useNavigate } from 'react-router-dom';

// Mock data
const liveMatches: Match[] = [
  {
    id: '1',
    teamA: { id: '1', name: 'Kathmandu XI', logo: '', players: [], matches: [] },
    teamB: { id: '2', name: 'Pokhara Rhinos', logo: '', players: [], matches: [] },
    date: new Date(),
    venue: 'Tribhuvan University Ground',
    overs: 20,
    status: 'live',
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
    status: 'live',
    scoreA: { runs: 220, wickets: 8, overs: 40.3 },
    scoreB: { runs: 0, wickets: 0, overs: 0 },
    ballByBall: [],
    organizer: '2'
  },
  {
    id: '3',
    teamA: { id: '5', name: 'Lalitpur Patriots', logo: '', players: [], matches: [] },
    teamB: { id: '6', name: 'Bhairahawa Gladiators', logo: '', players: [], matches: [] },
    date: new Date(),
    venue: 'Kirtipur Cricket Ground',
    overs: 20,
    status: 'live',
    scoreA: { runs: 85, wickets: 2, overs: 9.3 },
    scoreB: { runs: 0, wickets: 0, overs: 0 },
    ballByBall: [],
    organizer: '2'
  }
];

const LiveMatchesPage: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 't20' | 'odi'>('all');

  const filteredMatches = liveMatches.filter(match => {
    if (filter === 'all') return true;
    if (filter === 't20') return match.overs === 20;
    if (filter === 'odi') return match.overs === 50;
    return true;
  });

  return (
    <div className="py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Live Matches</h1>
          <p className="text-gray-600">Watch and follow cricket matches happening right now</p>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant={filter === 'all' ? 'primary' : 'outline'} 
            size="sm"
            onClick={() => setFilter('all')}
          >
            All
          </Button>
          <Button 
            variant={filter === 't20' ? 'primary' : 'outline'} 
            size="sm"
            onClick={() => setFilter('t20')}
          >
            T20
          </Button>
          <Button 
            variant={filter === 'odi' ? 'primary' : 'outline'} 
            size="sm"
            onClick={() => setFilter('odi')}
          >
            ODI
          </Button>
        </div>
      </div>

      {filteredMatches.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredMatches.map((match) => (
            <MatchCard 
              key={match.id} 
              match={match} 
              onClick={() => navigate(`/fan/match/${match.id}`)}
            />
          ))}
        </div>
      ) : (
        <Card className="text-center py-12">
          <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-lg text-gray-600">No live matches at the moment</p>
          <p className="text-gray-500 mt-2">Check back later or view the upcoming schedule</p>
        </Card>
      )}

      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">About Live Match Tracking</h2>
        <p className="text-gray-600 mb-4">
          Our live match tracking provides ball-by-ball updates, real-time scoring, and comprehensive 
          match statistics. Interact with matches through reactions, polls, and predictions.
        </p>
        <p className="text-gray-600">
          Note: Match data is refreshed every 30 seconds. For the most current updates, you can manually 
          refresh the page.
        </p>
      </div>
    </div>
  );
};

export default LiveMatchesPage;
