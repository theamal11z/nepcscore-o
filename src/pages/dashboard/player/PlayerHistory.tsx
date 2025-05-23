import React from 'react';
import { Trophy, Calendar, MapPin } from 'lucide-react';
import Card from '../../../components/UI/Card';
import Badge from '../../../components/UI/Badge';
import { useAuth } from '../../../context/AuthContext';

// Mock match history data
const matchHistory = [
  {
    id: '1',
    opponent: 'Pokhara Rhinos',
    date: new Date(Date.now() - 172800000),
    venue: 'Tribhuvan University Ground',
    result: 'Won by 5 wickets',
    performance: { runs: 65, wickets: 2, catches: 1 }
  },
  {
    id: '2',
    opponent: 'Chitwan Tigers',
    date: new Date(Date.now() - 604800000),
    venue: 'Kirtipur Cricket Ground',
    result: 'Lost by 3 runs',
    performance: { runs: 32, wickets: 0, catches: 0 }
  },
  {
    id: '3',
    opponent: 'Lalitpur Patriots',
    date: new Date(Date.now() - 1209600000),
    venue: 'Pokhara Stadium',
    result: 'Won by 8 wickets',
    performance: { runs: 87, wickets: 1, catches: 2 }
  }
];

const PlayerHistory: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Match History</h1>
        <p className="text-gray-600">Detailed history of your past matches and performances.</p>
      </div>

      <Card>
        <h2 className="text-xl font-bold mb-4">Past Matches</h2>
        {matchHistory.length > 0 ? (
          <div className="space-y-4">
            {matchHistory.map((match) => (
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
                <div className="mt-4">
                  <h4 className="font-bold">Performance</h4>
                  <div className="grid grid-cols-3 gap-4 mt-2">
                    <div>
                      <p className="text-sm text-gray-600">Runs</p>
                      <p className="font-medium">{match.performance.runs}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Wickets</p>
                      <p className="font-medium">{match.performance.wickets}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Catches</p>
                      <p className="font-medium">{match.performance.catches}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6">
            <Trophy className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-600">No match history found.</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default PlayerHistory; 