import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import Card from '../../../components/UI/Card';
import MatchCard from '../../../components/MatchCard';
import Button from '../../../components/UI/Button';
import { Match } from '../../../types';

// Mock data
const upcomingMatches: Match[] = [
  {
    id: '3',
    teamA: { id: '5', name: 'Lalitpur Patriots', logo: '', players: [], matches: [] },
    teamB: { id: '6', name: 'Bhairahawa Gladiators', logo: '', players: [], matches: [] },
    date: new Date(Date.now() + 86400000), // tomorrow
    venue: 'Kirtipur Cricket Ground',
    overs: 20,
    status: 'upcoming',
    ballByBall: [],
    organizer: '2'
  },
  {
    id: '4',
    teamA: { id: '1', name: 'Kathmandu XI', logo: '', players: [], matches: [] },
    teamB: { id: '3', name: 'Chitwan Tigers', logo: '', players: [], matches: [] },
    date: new Date(Date.now() + 172800000), // day after tomorrow
    venue: 'Tribhuvan University Ground',
    overs: 50,
    status: 'upcoming',
    ballByBall: [],
    organizer: '2'
  },
  {
    id: '5',
    teamA: { id: '2', name: 'Pokhara Rhinos', logo: '', players: [], matches: [] },
    teamB: { id: '4', name: 'Biratnagar Kings', logo: '', players: [], matches: [] },
    date: new Date(Date.now() + 259200000), // 3 days from now
    venue: 'Pokhara Stadium',
    overs: 20,
    status: 'upcoming',
    ballByBall: [],
    organizer: '2'
  },
  {
    id: '6',
    teamA: { id: '6', name: 'Bhairahawa Gladiators', logo: '', players: [], matches: [] },
    teamB: { id: '1', name: 'Kathmandu XI', logo: '', players: [], matches: [] },
    date: new Date(Date.now() + 345600000), // 4 days from now
    venue: 'Mulpani Cricket Ground',
    overs: 20,
    status: 'upcoming',
    ballByBall: [],
    organizer: '2'
  },
  {
    id: '7',
    teamA: { id: '5', name: 'Lalitpur Patriots', logo: '', players: [], matches: [] },
    teamB: { id: '2', name: 'Pokhara Rhinos', logo: '', players: [], matches: [] },
    date: new Date(Date.now() + 432000000), // 5 days from now
    venue: 'Kirtipur Cricket Ground',
    overs: 50,
    status: 'upcoming',
    ballByBall: [],
    organizer: '2'
  }
];

type TimeFilter = 'this-week' | 'this-month' | 'all';
type FormatFilter = 'all' | 't20' | 'odi';

const SchedulePage: React.FC = () => {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('this-week');
  const [formatFilter, setFormatFilter] = useState<FormatFilter>('all');
  
  const now = new Date();
  const oneWeekLater = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const oneMonthLater = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
  
  const filteredMatches = upcomingMatches.filter(match => {
    const matchDate = new Date(match.date);
    
    // Time filter
    if (timeFilter === 'this-week' && matchDate > oneWeekLater) return false;
    if (timeFilter === 'this-month' && matchDate > oneMonthLater) return false;
    
    // Format filter
    if (formatFilter === 't20' && match.overs !== 20) return false;
    if (formatFilter === 'odi' && match.overs !== 50) return false;
    
    return true;
  });
  
  // Group matches by date
  const matchesByDate: { [key: string]: Match[] } = {};
  
  filteredMatches.forEach(match => {
    const dateStr = new Date(match.date).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
    
    if (!matchesByDate[dateStr]) {
      matchesByDate[dateStr] = [];
    }
    
    matchesByDate[dateStr].push(match);
  });
  
  return (
    <div className="py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Match Schedule</h1>
          <p className="text-gray-600">Upcoming cricket matches in Nepal</p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-3 mb-8">
        <div className="flex space-x-2 mr-4">
          <Button 
            variant={timeFilter === 'this-week' ? 'primary' : 'outline'} 
            size="sm"
            onClick={() => setTimeFilter('this-week')}
          >
            This Week
          </Button>
          <Button 
            variant={timeFilter === 'this-month' ? 'primary' : 'outline'} 
            size="sm"
            onClick={() => setTimeFilter('this-month')}
          >
            This Month
          </Button>
          <Button 
            variant={timeFilter === 'all' ? 'primary' : 'outline'} 
            size="sm"
            onClick={() => setTimeFilter('all')}
          >
            All Upcoming
          </Button>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            variant={formatFilter === 'all' ? 'primary' : 'outline'} 
            size="sm"
            onClick={() => setFormatFilter('all')}
          >
            All Formats
          </Button>
          <Button 
            variant={formatFilter === 't20' ? 'primary' : 'outline'} 
            size="sm"
            onClick={() => setFormatFilter('t20')}
          >
            T20
          </Button>
          <Button 
            variant={formatFilter === 'odi' ? 'primary' : 'outline'} 
            size="sm"
            onClick={() => setFormatFilter('odi')}
          >
            ODI
          </Button>
        </div>
      </div>
      
      {Object.keys(matchesByDate).length > 0 ? (
        Object.entries(matchesByDate).map(([dateStr, matches]) => (
          <div key={dateStr} className="mb-8">
            <h2 className="text-lg font-medium mb-4 border-b pb-2">{dateStr}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {matches.map(match => (
                <MatchCard 
                  key={match.id} 
                  match={match} 
                  onClick={() => console.log('Navigate to match details', match.id)}
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <Card className="text-center py-12">
          <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-lg text-gray-600">No matches scheduled</p>
          <p className="text-gray-500 mt-2">Try adjusting your filters to see more matches</p>
        </Card>
      )}
      
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">Set Match Reminders</h2>
        <p className="text-gray-600 mb-4">
          Never miss a match! Set reminders for upcoming games and get notified before they start.
        </p>
        <p className="text-gray-600">
          You can customize notification settings to receive alerts for specific teams or match types.
        </p>
        <Button className="mt-4" variant="outline">Manage Notifications</Button>
      </div>
    </div>
  );
};

export default SchedulePage;
