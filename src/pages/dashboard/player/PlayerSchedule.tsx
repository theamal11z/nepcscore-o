import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import Card from '../../../components/UI/Card';
import Badge from '../../../components/UI/Badge';
import { useAuth } from '../../../context/AuthContext';

// Mock schedule data
const scheduleData = {
  upcomingMatches: [
    { id: '1', opponent: 'Biratnagar Kings', date: new Date(Date.now() + 172800000), venue: 'Tribhuvan University Ground', time: '10:00 AM' },
    { id: '2', opponent: 'Bhairahawa Gladiators', date: new Date(Date.now() + 604800000), venue: 'Kirtipur Cricket Ground', time: '2:00 PM' },
    { id: '3', opponent: 'Lalitpur Patriots', date: new Date(Date.now() + 1209600000), venue: 'Pokhara Stadium', time: '11:00 AM' }
  ],
  pastMatches: [
    { id: '4', opponent: 'Pokhara Rhinos', date: new Date(Date.now() - 172800000), venue: 'Tribhuvan University Ground', result: 'Won by 5 wickets' },
    { id: '5', opponent: 'Chitwan Tigers', date: new Date(Date.now() - 604800000), venue: 'Kirtipur Cricket Ground', result: 'Lost by 3 runs' },
    { id: '6', opponent: 'Lalitpur Patriots', date: new Date(Date.now() - 1209600000), venue: 'Pokhara Stadium', result: 'Won by 8 wickets' }
  ]
};

const PlayerSchedule: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Match Schedule</h1>
        <p className="text-gray-600">View your upcoming and past matches.</p>
      </div>

      <Card className="mb-8">
        <h2 className="text-xl font-bold mb-4">Upcoming Matches</h2>
        {scheduleData.upcomingMatches.length > 0 ? (
          <div className="space-y-4">
            {scheduleData.upcomingMatches.map((match) => (
              <div key={match.id} className="border border-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">vs {match.opponent}</h3>
                    <p className="text-sm text-gray-600 mt-1">{match.venue}</p>
                  </div>
                  <div className="text-right">
                    <Badge>{new Date(match.date).toLocaleDateString()}</Badge>
                    <p className="text-xs text-gray-500 mt-1">{match.time}</p>
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

      <Card>
        <h2 className="text-xl font-bold mb-4">Past Matches</h2>
        {scheduleData.pastMatches.length > 0 ? (
          <div className="space-y-4">
            {scheduleData.pastMatches.map((match) => (
              <div key={match.id} className="border border-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">vs {match.opponent}</h3>
                    <p className="text-sm text-gray-600 mt-1">{match.venue}</p>
                  </div>
                  <div className="text-right">
                    <Badge>{new Date(match.date).toLocaleDateString()}</Badge>
                    <p className="text-xs text-gray-500 mt-1">{match.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6">
            <Clock className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-600">No past matches found.</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default PlayerSchedule; 