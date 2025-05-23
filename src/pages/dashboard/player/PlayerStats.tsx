import React from 'react';
import { BarChart3, TrendingUp, Award, ArrowUp, ArrowDown } from 'lucide-react';
import Card from '../../../components/UI/Card';
import Badge from '../../../components/UI/Badge';
import { useAuth } from '../../../context/AuthContext';

// Mock player stats data
const playerStats = {
  batting: {
    matches: 42,
    innings: 38,
    runs: 1624,
    highestScore: 106,
    average: 38.6,
    strikeRate: 142.3,
    centuries: 2,
    fifties: 8,
    fours: 156,
    sixes: 42
  },
  bowling: {
    matches: 42,
    innings: 40,
    wickets: 38,
    bestBowling: '5/26',
    average: 24.5,
    economy: 7.2,
    strikeRate: 18.3,
    fourWickets: 3,
    fiveWickets: 1
  },
  performanceTrend: [
    { date: '2023-01', runs: 120, wickets: 5 },
    { date: '2023-02', runs: 85, wickets: 3 },
    { date: '2023-03', runs: 150, wickets: 7 },
    { date: '2023-04', runs: 95, wickets: 4 },
    { date: '2023-05', runs: 130, wickets: 6 }
  ],
  achievements: [
    { title: 'Player of the Match', count: 5 },
    { title: 'Century', count: 2 },
    { title: 'Five Wickets', count: 1 }
  ]
};

const PlayerStats: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Player Statistics</h1>
        <p className="text-gray-600">Detailed performance metrics for {user?.name}.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <h2 className="text-xl font-bold mb-4">Batting Statistics</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Matches</span>
              <span className="font-medium">{playerStats.batting.matches}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Innings</span>
              <span className="font-medium">{playerStats.batting.innings}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Runs</span>
              <span className="font-medium">{playerStats.batting.runs}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Highest Score</span>
              <span className="font-medium">{playerStats.batting.highestScore}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Average</span>
              <span className="font-medium">{playerStats.batting.average}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Strike Rate</span>
              <span className="font-medium">{playerStats.batting.strikeRate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Centuries</span>
              <span className="font-medium">{playerStats.batting.centuries}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Fifties</span>
              <span className="font-medium">{playerStats.batting.fifties}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Fours</span>
              <span className="font-medium">{playerStats.batting.fours}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Sixes</span>
              <span className="font-medium">{playerStats.batting.sixes}</span>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-bold mb-4">Bowling Statistics</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Matches</span>
              <span className="font-medium">{playerStats.bowling.matches}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Innings</span>
              <span className="font-medium">{playerStats.bowling.innings}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Wickets</span>
              <span className="font-medium">{playerStats.bowling.wickets}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Best Bowling</span>
              <span className="font-medium">{playerStats.bowling.bestBowling}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Average</span>
              <span className="font-medium">{playerStats.bowling.average}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Economy</span>
              <span className="font-medium">{playerStats.bowling.economy}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Strike Rate</span>
              <span className="font-medium">{playerStats.bowling.strikeRate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Four Wickets</span>
              <span className="font-medium">{playerStats.bowling.fourWickets}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Five Wickets</span>
              <span className="font-medium">{playerStats.bowling.fiveWickets}</span>
            </div>
          </div>
        </Card>
      </div>

      <Card className="mb-8">
        <h2 className="text-xl font-bold mb-4">Performance Trend</h2>
        <div className="bg-gray-50 rounded-lg h-48 flex items-center justify-center">
          <TrendingUp className="h-12 w-12 text-gray-300" />
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-bold mb-4">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {playerStats.achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
              <Award className="h-6 w-6 text-[#DC143C] mx-auto mb-2" />
              <h3 className="font-bold">{achievement.title}</h3>
              <p className="text-2xl font-bold mt-2">{achievement.count}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default PlayerStats; 