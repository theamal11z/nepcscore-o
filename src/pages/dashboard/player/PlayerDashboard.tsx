import React from 'react';
import { Trophy, BarChart3, Calendar, TrendingUp, Award, ArrowUp, ArrowDown } from 'lucide-react';
import Card from '../../../components/UI/Card';
import Button from '../../../components/UI/Button';
import Avatar from '../../../components/UI/Avatar';
import Badge from '../../../components/UI/Badge';
import { useAuth } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';

// Mock player data
const playerData = {
  id: '1',
  name: 'Paras Khadka',
  role: 'All-rounder',
  teamId: '1',
  teamName: 'Kathmandu Kings',
  stats: {
    matches: 42,
    runs: 1624,
    wickets: 38,
    highestScore: 106,
    bestBowling: '5/26',
    centuries: 2,
    fifties: 8,
    average: 38.6,
    strikeRate: 142.3,
    economy: 7.2
  },
  profileImage: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=300',
  recentForm: [
    { match: 'vs Pokhara Rhinos', performance: '65 runs, 2 wickets', date: '2023-06-10' },
    { match: 'vs Chitwan Tigers', performance: '32 runs, 0 wickets', date: '2023-06-05' },
    { match: 'vs Lalitpur Patriots', performance: '87 runs, 1 wicket', date: '2023-05-28' }
  ],
  upcomingMatches: [
    { id: '1', opponent: 'Biratnagar Kings', date: new Date(Date.now() + 172800000), venue: 'Tribhuvan University Ground' },
    { id: '2', opponent: 'Bhairahawa Gladiators', date: new Date(Date.now() + 604800000), venue: 'Kirtipur Cricket Ground' }
  ]
};

const PlayerDashboard: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Welcome, {user?.name}!</h1>
        <p className="text-gray-600">Track your cricket performance and upcoming matches.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-1">
          <Card className="flex flex-col items-center text-center p-8">
            <Avatar 
              src={playerData.profileImage} 
              alt={playerData.name} 
              size="xl" 
              className="mb-4"
            />
            <h2 className="text-xl font-bold">{playerData.name}</h2>
            <p className="text-gray-600 mb-1">{playerData.role}</p>
            <div className="flex items-center">
              <Trophy className="h-4 w-4 text-[#DC143C] mr-1" />
              <p className="text-sm">{playerData.teamName}</p>
            </div>
            
            <div className="mt-6 w-full">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Matches</span>
                <span className="font-medium">{playerData.stats.matches}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Runs</span>
                <span className="font-medium">{playerData.stats.runs}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Wickets</span>
                <span className="font-medium">{playerData.stats.wickets}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Highest Score</span>
                <span className="font-medium">{playerData.stats.highestScore}</span>
              </div>
            </div>
            
            <div className="mt-6 w-full">
              <Link to="/player/stats">
                <Button fullWidth>
                  View Full Statistics
                </Button>
              </Link>
            </div>
          </Card>
        </div>
        
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Performance Overview</h2>
              <Badge variant="primary">Current Season</Badge>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-600">Batting Avg</span>
                  <ArrowUp className="h-4 w-4 text-green-500" />
                </div>
                <p className="text-2xl font-bold mt-2">{playerData.stats.average}</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-600">Strike Rate</span>
                  <ArrowUp className="h-4 w-4 text-green-500" />
                </div>
                <p className="text-2xl font-bold mt-2">{playerData.stats.strikeRate}</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-600">Economy</span>
                  <ArrowDown className="h-4 w-4 text-green-500" />
                </div>
                <p className="text-2xl font-bold mt-2">{playerData.stats.economy}</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-600">Wickets</span>
                  <ArrowUp className="h-4 w-4 text-green-500" />
                </div>
                <p className="text-2xl font-bold mt-2">{playerData.stats.wickets}</p>
              </div>
            </div>
            
            <h3 className="font-bold mb-3">Performance Trend</h3>
            <div className="bg-gray-50 rounded-lg h-48 flex items-center justify-center">
              <TrendingUp className="h-12 w-12 text-gray-300" />
            </div>
          </Card>
          
          <Card>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Upcoming Matches</h2>
              <Link to="/player/schedule" className="text-[#DC143C] text-sm font-medium">
                View Full Schedule
              </Link>
            </div>
            
            {playerData.upcomingMatches.length > 0 ? (
              <div className="space-y-4">
                {playerData.upcomingMatches.map((match, index) => (
                  <div key={index} className="border border-gray-100 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">vs {match.opponent}</h3>
                        <p className="text-sm text-gray-600 mt-1">{match.venue}</p>
                      </div>
                      <div className="text-right">
                        <Badge>{new Date(match.date).toLocaleDateString()}</Badge>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(match.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-600">No upcoming matches scheduled.</p>
              </div>
            )}
          </Card>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Recent Performances</h2>
            <Link to="/player/history" className="text-[#DC143C] text-sm font-medium">
              View History
            </Link>
          </div>
          
          {playerData.recentForm.length > 0 ? (
            <div className="divide-y">
              {playerData.recentForm.map((game, index) => (
                <div key={index} className="py-3">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{game.match}</h3>
                    <span className="text-sm text-gray-500">{game.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{game.performance}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6">
              <BarChart3 className="h-12 w-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-600">No recent performances to display.</p>
            </div>
          )}
        </Card>
        
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Career Highlights</h2>
            <Link to="/player/highlights" className="text-[#DC143C] text-sm font-medium">
              View All
            </Link>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-[#DC143C] bg-opacity-10 p-2 rounded-md mr-3">
                <Trophy className="h-5 w-5 text-[#DC143C]" />
              </div>
              <div>
                <h3 className="font-medium">Century vs Pokhara Rhinos</h3>
                <p className="text-sm text-gray-600">106 runs off 64 balls</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#DC143C] bg-opacity-10 p-2 rounded-md mr-3">
                <Award className="h-5 w-5 text-[#DC143C]" />
              </div>
              <div>
                <h3 className="font-medium">Best Bowling Performance</h3>
                <p className="text-sm text-gray-600">5/26 vs Biratnagar Kings</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#DC143C] bg-opacity-10 p-2 rounded-md mr-3">
                <Star className="h-5 w-5 text-[#DC143C]" />
              </div>
              <div>
                <h3 className="font-medium">Player of the Tournament</h3>
                <p className="text-sm text-gray-600">Everest Premier League 2022</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

// Additional icon
const Star = (props: any) => {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

export default PlayerDashboard;