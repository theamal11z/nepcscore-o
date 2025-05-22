import React from 'react';
import Card from './UI/Card';
import Avatar from './UI/Avatar';
import { Player } from '../types';

interface PlayerCardProps {
  player: Player;
  onClick?: () => void;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player, onClick }) => {
  return (
    <Card 
      withHover
      className="cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <Avatar 
          src={player.profileImage} 
          alt={player.name} 
          size="lg" 
        />
        
        <div>
          <h3 className="font-bold text-lg">{player.name}</h3>
          <p className="text-sm text-gray-600">{player.role}</p>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-100">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-xs text-gray-500">Matches</p>
            <p className="font-bold">{player.stats.matches}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Runs</p>
            <p className="font-bold">{player.stats.runs}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Wickets</p>
            <p className="font-bold">{player.stats.wickets}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PlayerCard;