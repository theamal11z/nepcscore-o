import React from 'react';
import { Trophy, Users, Calendar, Plus, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../../../components/UI/Card';
import Button from '../../../components/UI/Button';
import MatchCard from '../../../components/MatchCard';
import StatCard from '../../../components/StatCard';
import { useAuth } from '../../../context/AuthContext';

// Mock data
const myMatches = [
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
    id: '3',
    teamA: { id: '5', name: 'Lalitpur Patriots', logo: '', players: [], matches: [] },
    teamB: { id: '6', name: 'Bhairahawa Gladiators', logo: '', players: [], matches: [] },
    date: new Date(Date.now() + 86400000), // tomorrow
    venue: 'Kirtipur Cricket Ground',
    overs: 20,
    status: 'upcoming' as const,
    ballByBall: [],
    organizer: '2'
  },
  {
    id: '4',
    teamA: { id: '7', name: 'Birgunj Titans', logo: '', players: [], matches: [] },
    teamB: { id: '8', name: 'Dhangadhi Blues', logo: '', players: [], matches: [] },
    date: new Date(Date.now() - 172800000), // 2 days ago
    venue: 'Fapla Cricket Ground',
    overs: 20,
    status: 'completed' as const,
    result: 'Birgunj Titans won by 45 runs',
    scoreA: { runs: 189, wickets: 7, overs: 20 },
    scoreB: { runs: 144, wickets: 10, overs: 18.3 },
    ballByBall: [],
    organizer: '2'
  }
];

const OrganizerDashboard: React.FC = () => {
  const { user } = useAuth();
  
  const activeMatches = myMatches.filter(match => match.status === 'live');
  const upcomingMatches = myMatches.filter(match => match.status === 'upcoming');
  const completedMatches = myMatches.filter(match => match.status === 'completed');
  
  return (
    <div className="py-8">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">Welcome, {user?.name}!</h1>
          <p className="text-gray-600">Manage your cricket matches and teams.</p>
        </div>
        <Link to="/organizer/create-match">
          <Button className="flex items-center">
            <Plus className="mr-2 h-5 w-5" />
            Create Match
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Active Matches"
          value={activeMatches.length}
          icon={<Trophy className="h-6 w-6" />}
          change={{ value: 20, trend: 'up' }}
        />
        
        <StatCard
          title="Teams Managed"
          value="8"
          icon={<Users className="h-6 w-6" />}
          change={{ value: 2, trend: 'up' }}
        />
        
        <StatCard
          title="Completed Matches"
          value={completedMatches.length}
          icon={<BarChart3 className="h-6 w-6" />}
          change={{ value: 15, trend: 'up' }}
        />
      </div>
      
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Active Matches</h2>
          <Link to="/organizer/matches" className="text-[#DC143C] text-sm font-medium flex items-center">
            View all <span className="ml-1">→</span>
          </Link>
        </div>
        
        {activeMatches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeMatches.map((match) => (
              <div key={match.id}>
                <MatchCard match={match} onClick={() => console.log('View match', match.id)} />
                <div className="mt-3 flex justify-end">
                  <Button size="sm">Update Score</Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Card className="text-center py-8">
            <Trophy className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No active matches at the moment.</p>
            <div className="mt-4">
              <Link to="/organizer/create-match">
                <Button>
                  Create New Match
                </Button>
              </Link>
            </div>
          </Card>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Upcoming Matches</h2>
            <Link to="/organizer/schedule" className="text-[#DC143C] text-sm font-medium flex items-center">
              View all <span className="ml-1">→</span>
            </Link>
          </div>
          
          {upcomingMatches.length > 0 ? (
            <div className="space-y-4">
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
              <div className="mt-4">
                <Link to="/organizer/create-match">
                  <Button size="sm">
                    Schedule Match
                  </Button>
                </Link>
              </div>
            </Card>
          )}
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Recent Results</h2>
            <Link to="/organizer/matches?status=completed" className="text-[#DC143C] text-sm font-medium flex items-center">
              View all <span className="ml-1">→</span>
            </Link>
          </div>
          
          {completedMatches.length > 0 ? (
            <div className="space-y-4">
              {completedMatches.map((match) => (
                <MatchCard 
                  key={match.id} 
                  match={match} 
                  onClick={() => console.log('View match', match.id)}
                />
              ))}
            </div>
          ) : (
            <Card className="text-center py-6">
              <BarChart3 className="h-10 w-10 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600">No completed matches yet.</p>
            </Card>
          )}
        </div>
      </div>
      
      <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-100">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/organizer/create-match">
            <Card withHover className="text-center py-5">
              <Trophy className="h-8 w-8 text-[#DC143C] mx-auto mb-2" />
              <p className="font-medium">Create Match</p>
            </Card>
          </Link>
          
          <Link to="/organizer/teams">
            <Card withHover className="text-center py-5">
              <Users className="h-8 w-8 text-[#DC143C] mx-auto mb-2" />
              <p className="font-medium">Manage Teams</p>
            </Card>
          </Link>
          
          <Link to="/organizer/players">
            <Card withHover className="text-center py-5">
              <User className="h-8 w-8 text-[#DC143C] mx-auto mb-2" />
              <p className="font-medium">Add Players</p>
            </Card>
          </Link>
          
          <Link to="/organizer/reports">
            <Card withHover className="text-center py-5">
              <BarChart3 className="h-8 w-8 text-[#DC143C] mx-auto mb-2" />
              <p className="font-medium">View Reports</p>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Import User icon
const User = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
};

export default OrganizerDashboard;