import React from 'react';
import Card from './UI/Card';
import Badge from './UI/Badge';
import { Clock, MapPin } from 'lucide-react';
import { Match } from '../types';

interface MatchCardProps {
  match: Match;
  onClick?: () => void;
}

const MatchCard: React.FC<MatchCardProps> = ({ match, onClick }) => {
  const getStatusBadge = () => {
    switch (match.status) {
      case 'live':
        return <Badge variant="danger">LIVE</Badge>;
      case 'upcoming':
        return <Badge variant="primary">Upcoming</Badge>;
      case 'completed':
        return <Badge variant="success">Completed</Badge>;
      default:
        return null;
    }
  };
  
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  
  return (
    <Card 
      withHover
      className="cursor-pointer border-l-4 border-l-[#DC143C]"
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            {getStatusBadge()}
            <span className="text-sm text-gray-600">{match.overs} Overs</span>
          </div>
          <h3 className="font-bold text-lg mb-3">
            {match.teamA.name} vs {match.teamB.name}
          </h3>
        </div>
      </div>
      
      <div className="flex flex-col space-y-2 mb-3">
        <div className="flex items-center text-gray-600">
          <Clock size={16} className="mr-2" />
          <span className="text-sm">{formatDate(match.date)} • {formatTime(match.date)}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin size={16} className="mr-2" />
          <span className="text-sm">{match.venue}</span>
        </div>
      </div>
      
      {match.status === 'live' && (
        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div className="w-5/12">
              <p className="text-sm font-medium">{match.teamA.name}</p>
              {match.scoreA && (
                <p className="text-lg font-bold">{match.scoreA.runs}/{match.scoreA.wickets}
                  <span className="text-sm font-normal ml-1">({match.scoreA.overs})</span>
                </p>
              )}
            </div>
            <div className="w-2/12 text-center">
              <span className="text-sm font-bold text-gray-400">VS</span>
            </div>
            <div className="w-5/12 text-right">
              <p className="text-sm font-medium">{match.teamB.name}</p>
              {match.scoreB && (
                <p className="text-lg font-bold">{match.scoreB.runs}/{match.scoreB.wickets}
                  <span className="text-sm font-normal ml-1">({match.scoreB.overs})</span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
      
      {match.status === 'completed' && match.result && (
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-sm font-medium text-[#DC143C]">{match.result}</p>
        </div>
      )}
    </Card>
  );
};

export default MatchCard;