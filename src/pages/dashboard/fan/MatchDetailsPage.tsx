import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Clock, 
  MapPin, 
  ArrowLeft,
  ThumbsUp,
  Smile
} from 'lucide-react';
import Badge from '../../../components/UI/Badge';
import { Match, Reaction } from '../../../types';
import { Link } from 'react-router-dom';
import OverByOverChart from '../../../components/OverByOverChart';

// Expanded mock ball-by-ball data for over-by-over analysis
const expandedBallByBall: any[] = [
  // Over 1
  { over: 1, ball: 1, batsman: 'Kushal Bhurtel', bowler: 'Karan KC', runs: 0, isWicket: false, commentary: 'Dot ball to start.', timestamp: new Date(Date.now() - 5400000) },
  { over: 1, ball: 2, batsman: 'Kushal Bhurtel', bowler: 'Karan KC', runs: 1, isWicket: false, commentary: 'Pushed to mid-off for a single.', timestamp: new Date(Date.now() - 5380000) },
  { over: 1, ball: 3, batsman: 'Aasif Sheikh', bowler: 'Karan KC', runs: 0, isWicket: false, commentary: 'Defended back to the bowler.', timestamp: new Date(Date.now() - 5360000) },
  { over: 1, ball: 4, batsman: 'Aasif Sheikh', bowler: 'Karan KC', runs: 4, isWicket: false, commentary: 'FOUR! Beautiful cover drive.', timestamp: new Date(Date.now() - 5340000) },
  { over: 1, ball: 5, batsman: 'Aasif Sheikh', bowler: 'Karan KC', runs: 0, isWicket: false, commentary: 'Played and missed.', timestamp: new Date(Date.now() - 5320000) },
  { over: 1, ball: 6, batsman: 'Aasif Sheikh', bowler: 'Karan KC', runs: 0, isWicket: false, commentary: 'Defended to end the over.', timestamp: new Date(Date.now() - 5300000) },
  
  // Over 2
  { over: 2, ball: 1, batsman: 'Kushal Bhurtel', bowler: 'Sompal Kami', runs: 1, isWicket: false, commentary: 'Pushed to long-on for a single.', timestamp: new Date(Date.now() - 5220000) },
  { over: 2, ball: 2, batsman: 'Aasif Sheikh', bowler: 'Sompal Kami', runs: 0, isWicket: true, wicketType: 'bowled', commentary: 'BOWLED! Beautiful yorker.', timestamp: new Date(Date.now() - 5200000) },
  { over: 2, ball: 3, batsman: 'Rohit Kumar', bowler: 'Sompal Kami', runs: 0, isWicket: false, commentary: 'New batsman defends his first ball.', timestamp: new Date(Date.now() - 5180000) },
  { over: 2, ball: 4, batsman: 'Rohit Kumar', bowler: 'Sompal Kami', runs: 2, isWicket: false, commentary: 'Pushed through the covers for two.', timestamp: new Date(Date.now() - 5160000) },
  { over: 2, ball: 5, batsman: 'Rohit Kumar', bowler: 'Sompal Kami', runs: 0, isWicket: false, commentary: 'Defended.', timestamp: new Date(Date.now() - 5140000) },
  { over: 2, ball: 6, batsman: 'Rohit Kumar', bowler: 'Sompal Kami', runs: 1, isWicket: false, commentary: 'Takes a single to retain strike.', timestamp: new Date(Date.now() - 5120000) },
  
  // Over 3
  { over: 3, ball: 1, batsman: 'Rohit Kumar', bowler: 'Karan KC', runs: 4, isWicket: false, commentary: 'FOUR! Beautifully timed through mid-wicket.', timestamp: new Date(Date.now() - 5040000) },
  { over: 3, ball: 2, batsman: 'Rohit Kumar', bowler: 'Karan KC', runs: 6, isWicket: false, commentary: 'SIX! Massive hit over long-on!', timestamp: new Date(Date.now() - 5020000) },
  { over: 3, ball: 3, batsman: 'Rohit Kumar', bowler: 'Karan KC', runs: 1, isWicket: false, commentary: 'Takes a single to give strike to Kushal.', timestamp: new Date(Date.now() - 5000000) },
  { over: 3, ball: 4, batsman: 'Kushal Bhurtel', bowler: 'Karan KC', runs: 2, isWicket: false, commentary: 'Flicked off the pads for a couple.', timestamp: new Date(Date.now() - 4980000) },
  { over: 3, ball: 5, batsman: 'Kushal Bhurtel', bowler: 'Karan KC', runs: 0, isWicket: false, commentary: 'Played and missed outside off.', timestamp: new Date(Date.now() - 4960000) },
  { over: 3, ball: 6, batsman: 'Kushal Bhurtel', bowler: 'Karan KC', runs: 1, isWicket: false, commentary: 'Takes a single to end the over.', timestamp: new Date(Date.now() - 4940000) },
  
  // Over 14
  { over: 14, ball: 1, batsman: 'Rohit Kumar', bowler: 'Sompal Kami', runs: 1, isWicket: false, commentary: 'Pushed to mid-on for a single.', timestamp: new Date(Date.now() - 180000) },
  { over: 14, ball: 2, batsman: 'Dipendra Singh Airee', bowler: 'Sompal Kami', runs: 0, isWicket: false, commentary: 'Defended back to the bowler.', timestamp: new Date(Date.now() - 170000) },
  { over: 14, ball: 3, batsman: 'Dipendra Singh Airee', bowler: 'Sompal Kami', runs: 2, isWicket: false, commentary: 'Worked away for a couple through mid-wicket.', timestamp: new Date(Date.now() - 160000) },
  { over: 14, ball: 4, batsman: 'Dipendra Singh Airee', bowler: 'Sompal Kami', runs: 0, isWicket: false, commentary: 'Good yorker, dug out for no runs.', timestamp: new Date(Date.now() - 150000) },
  { over: 14, ball: 5, batsman: 'Dipendra Singh Airee', bowler: 'Sompal Kami', runs: 1, isWicket: false, commentary: 'Pushed to point for a quick single.', timestamp: new Date(Date.now() - 140000) },
  { over: 14, ball: 6, batsman: 'Rohit Kumar', bowler: 'Sompal Kami', runs: 4, isWicket: false, commentary: 'FOUR! Beautifully driven through the covers for a boundary.', timestamp: new Date(Date.now() - 130000) },
  
  // Over 15
  { over: 15, ball: 1, batsman: 'Rohit Kumar', bowler: 'Karan KC', runs: 1, isWicket: false, commentary: 'Pushed to mid-on for a quick single.', timestamp: new Date(Date.now() - 90000) },
  { over: 15, ball: 2, batsman: 'Aasif Sheikh', bowler: 'Karan KC', runs: 0, isWicket: true, wicketType: 'bowled', commentary: 'BOWLED! Clean bowled with a yorker, middle stump knocked back.', timestamp: new Date(Date.now() - 60000) },
  { over: 15, ball: 3, batsman: 'Dipendra Singh Airee', bowler: 'Karan KC', runs: 2, isWicket: false, commentary: 'Flicked off the pads for a couple of runs.', timestamp: new Date(Date.now() - 30000) },
  { over: 15, ball: 4, batsman: 'Dipendra Singh Airee', bowler: 'Karan KC', runs: 0, isWicket: false, commentary: 'Defended back to the bowler.', timestamp: new Date(Date.now() - 15000) }
];

// Mock data for a single match
const matchData: Match = {
  id: '1',
  teamA: { 
    id: '1', 
    name: 'Kathmandu XI', 
    logo: '', 
    players: [
      {
        id: '11',
        name: 'Kushal Bhurtel',
        role: 'Batsman',
        teamId: '1',
        stats: {
          matches: 22,
          runs: 742,
          wickets: 0,
          highestScore: 94,
          bestBowling: '-',
          centuries: 0,
          fifties: 5
        }
      },
      {
        id: '12',
        name: 'Aasif Sheikh',
        role: 'Batsman',
        teamId: '1',
        stats: {
          matches: 18,
          runs: 512,
          wickets: 0,
          highestScore: 74,
          bestBowling: '-',
          centuries: 0,
          fifties: 3
        }
      }
    ], 
    matches: [] 
  },
  teamB: { 
    id: '2', 
    name: 'Pokhara Rhinos', 
    logo: '', 
    players: [
      {
        id: '21',
        name: 'Karan KC',
        role: 'Bowler',
        teamId: '2',
        stats: {
          matches: 25,
          runs: 186,
          wickets: 42,
          highestScore: 28,
          bestBowling: '4/26',
          centuries: 0,
          fifties: 0
        }
      },
      {
        id: '22',
        name: 'Aarif Sheikh',
        role: 'All-rounder',
        teamId: '2',
        stats: {
          matches: 28,
          runs: 624,
          wickets: 12,
          highestScore: 76,
          bestBowling: '2/24',
          centuries: 0,
          fifties: 4
        }
      }
    ], 
    matches: [] 
  },
  date: new Date(),
  venue: 'Tribhuvan University Ground',
  overs: 20,
  status: 'live',
  scoreA: { runs: 156, wickets: 6, overs: 18.2 },
  scoreB: { runs: 123, wickets: 4, overs: 15.0 },
  ballByBall: expandedBallByBall,
  organizer: '2'
};

// Mock reactions
const reactions: Reaction[] = [
  { userId: '1', matchId: '1', type: 'like', timestamp: new Date(Date.now() - 120000) },
  { userId: '2', matchId: '1', type: 'cheer', timestamp: new Date(Date.now() - 90000) },
  { userId: '3', matchId: '1', type: 'wow', timestamp: new Date(Date.now() - 60000) },
  { userId: '4', matchId: '1', type: 'like', timestamp: new Date(Date.now() - 30000) },
];

// Mock poll
const poll = {
  id: '1',
  matchId: '1',
  question: 'Who will win this match?',
  options: [
    { id: '1', text: 'Kathmandu XI', votes: 128 },
    { id: '2', text: 'Pokhara Rhinos', votes: 86 }
  ],
  startTime: new Date(Date.now() - 3600000),
  endTime: new Date(Date.now() + 3600000)
};

const MatchDetailsPage: React.FC = () => {
  // Get the match ID from the URL params
  const { matchId: id } = useParams<{ matchId: string }>();
  
  // In a real app, we would fetch match data using this ID
  // For now, we're using mock data
  useEffect(() => {
    // This prevents the 'id' variable from being marked as unused
    // In a real app, this would be where we fetch the match data
    console.log(`Viewing match details for match ID: ${id}`);
  }, [id]);
  const [activeTab, setActiveTab] = useState<'overview' | 'commentary' | 'scorecard' | 'stats' | 'analysis'>('overview');
  const [selectedPollOption, setSelectedPollOption] = useState<string | null>(null);
  
  // In a real app, you would fetch this data based on the matchId
  const match = matchData;
  
  const getReactionCounts = () => {
    const counts = {
      like: 0,
      cheer: 0,
      wow: 0,
      sad: 0
    };
    
    reactions.forEach(reaction => {
      counts[reaction.type] += 1;
    });
    
    return counts;
  };
  
  const reactionCounts = getReactionCounts();
  
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  
  const getTotalVotes = () => {
    return poll.options.reduce((total, option) => total + option.votes, 0);
  };
  
  const getVotePercentage = (votes: number) => {
    const total = getTotalVotes();
    return total > 0 ? Math.round((votes / total) * 100) : 0;
  };
  
  return (
    <div className="py-6">
      <div className="mb-6">
        <Link to="/fan/live-matches" className="inline-flex items-center text-gray-600 hover:text-[#DC143C] mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Matches
        </Link>
        
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="danger">LIVE</Badge>
                <span className="text-sm text-gray-600">{match.overs} Overs</span>
              </div>
              <h1 className="text-2xl font-bold mb-3">
                {match.teamA.name} vs {match.teamB.name}
              </h1>
              
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
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <div className="w-5/12">
                <p className="text-sm font-medium">{match.teamA.name}</p>
                {match.scoreA && (
                  <p className="text-2xl font-bold">{match.scoreA.runs}/{match.scoreA.wickets}
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
                  <p className="text-2xl font-bold">{match.scoreB.runs}/{match.scoreB.wickets}
                    <span className="text-sm font-normal ml-1">({match.scoreB.overs})</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden mb-6">
          <div className="flex border-b">
            <button
              className={`px-4 py-3 text-sm font-medium ${activeTab === 'overview' ? 'text-[#DC143C] border-b-2 border-[#DC143C]' : 'text-gray-600'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`px-4 py-3 text-sm font-medium ${activeTab === 'commentary' ? 'text-[#DC143C] border-b-2 border-[#DC143C]' : 'text-gray-600'}`}
              onClick={() => setActiveTab('commentary')}
            >
              Commentary
            </button>
            <button
              className={`px-4 py-3 text-sm font-medium ${activeTab === 'scorecard' ? 'text-[#DC143C] border-b-2 border-[#DC143C]' : 'text-gray-600'}`}
              onClick={() => setActiveTab('scorecard')}
            >
              Scorecard
            </button>
            <button
              className={`px-4 py-3 text-sm font-medium ${activeTab === 'stats' ? 'text-[#DC143C] border-b-2 border-[#DC143C]' : 'text-gray-600'}`}
              onClick={() => setActiveTab('stats')}
            >
              Statistics
            </button>
            <button
              className={`px-4 py-3 text-sm font-medium ${activeTab === 'analysis' ? 'text-[#DC143C] border-b-2 border-[#DC143C]' : 'text-gray-600'}`}
              onClick={() => setActiveTab('analysis')}
            >
              Over Analysis
            </button>
          </div>
          
          <div className="p-4">
            {activeTab === 'overview' && (
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3">Match Summary</h3>
                  <p className="text-gray-600">
                    {match.teamB.name} need {match.scoreA && match.scoreB ? match.scoreA.runs - match.scoreB.runs + 1 : 0} runs 
                    from {match.overs * 6 - (match.scoreB ? Math.floor(match.scoreB.overs) * 6 + (match.scoreB.overs % 1) * 10 : 0)} balls.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3">Latest Action</h3>
                  <div className="space-y-3">
                    {match.ballByBall.slice(-3).map((event, index) => (
                      <div key={index} className="flex items-start p-3 bg-gray-50 rounded-md">
                        <div className="mr-3 bg-[#DC143C] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                          {event.runs}
                        </div>
                        <div>
                          <p className="text-gray-900 font-medium">
                            Over {event.over}.{event.ball} - {event.bowler} to {event.batsman}
                          </p>
                          <p className="text-gray-600 text-sm">{event.commentary}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3">Fan Poll</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium mb-3">{poll.question}</p>
                    <div className="space-y-3 mb-4">
                      {poll.options.map(option => (
                        <div key={option.id} className="relative">
                          <div 
                            className="absolute top-0 left-0 h-full bg-[#DC143C] bg-opacity-10 rounded-md"
                            style={{ width: `${getVotePercentage(option.votes)}%` }}
                          ></div>
                          <button
                            className={`relative w-full p-3 text-left rounded-md border transition-colors
                              ${selectedPollOption === option.id 
                                ? 'border-[#DC143C] bg-[#DC143C] bg-opacity-5' 
                                : 'border-gray-200 hover:border-[#DC143C]'}`}
                            onClick={() => setSelectedPollOption(option.id)}
                          >
                            <div className="flex justify-between">
                              <span>{option.text}</span>
                              <span className="font-medium">{getVotePercentage(option.votes)}%</span>
                            </div>
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>Total votes: {getTotalVotes()}</span>
                      <span>Poll ends in {Math.floor((poll.endTime.getTime() - Date.now()) / 60000)} minutes</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-3">Fan Reactions</h3>
                  <div className="flex space-x-4 mb-4">
                    <button className="flex-1 flex flex-col items-center p-3 rounded-lg border border-gray-200 hover:border-[#DC143C] transition-colors">
                      <ThumbsUp className="h-6 w-6 text-[#DC143C] mb-1" />
                      <span className="text-sm font-medium">Like</span>
                      <span className="text-xs text-gray-500">{reactionCounts.like}</span>
                    </button>
                    <button className="flex-1 flex flex-col items-center p-3 rounded-lg border border-gray-200 hover:border-[#DC143C] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[#DC143C] mb-1">
                        <path d="M7 10v12"></path>
                        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                      </svg>
                      <span className="text-sm font-medium">Cheer</span>
                      <span className="text-xs text-gray-500">{reactionCounts.cheer}</span>
                    </button>
                    <button className="flex-1 flex flex-col items-center p-3 rounded-lg border border-gray-200 hover:border-[#DC143C] transition-colors">
                      <Smile className="h-6 w-6 text-[#DC143C] mb-1" />
                      <span className="text-sm font-medium">Wow</span>
                      <span className="text-xs text-gray-500">{reactionCounts.wow}</span>
                    </button>
                    <button className="flex-1 flex flex-col items-center p-3 rounded-lg border border-gray-200 hover:border-[#DC143C] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[#DC143C] mb-1">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 9.05v-.1"></path>
                        <path d="M16 9.05v-.1"></path>
                        <path d="M16 16c-.5-1.5-2-2.5-4-2.5s-3.5 1-4 2.5"></path>
                      </svg>
                      <span className="text-sm font-medium">Sad</span>
                      <span className="text-xs text-gray-500">{reactionCounts.sad}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'commentary' && (
              <div>
                <h3 className="text-lg font-bold mb-4">Ball-by-Ball Commentary</h3>
                <div className="space-y-4">
                  {[...match.ballByBall].reverse().map((event, index) => (
                    <div key={index} className="flex items-start border-b border-gray-100 pb-4">
                      <div className={`mr-3 ${event.isWicket ? 'bg-red-600' : event.runs > 3 ? 'bg-[#DC143C]' : 'bg-gray-200 text-gray-700'} text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm`}>
                        {event.isWicket ? 'W' : event.runs}
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium">
                          Over {event.over}.{event.ball} - {event.bowler} to {event.batsman}
                        </p>
                        <p className="text-gray-600">{event.commentary}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(event.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'scorecard' && (
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3">{match.teamA.name}</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-4 font-medium">Batsman</th>
                          <th className="text-center py-2 px-4 font-medium">Runs</th>
                          <th className="text-center py-2 px-4 font-medium">Balls</th>
                          <th className="text-center py-2 px-4 font-medium">4s</th>
                          <th className="text-center py-2 px-4 font-medium">6s</th>
                          <th className="text-center py-2 px-4 font-medium">SR</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-4">Kushal Bhurtel</td>
                          <td className="text-center py-2 px-4">38</td>
                          <td className="text-center py-2 px-4">32</td>
                          <td className="text-center py-2 px-4">4</td>
                          <td className="text-center py-2 px-4">1</td>
                          <td className="text-center py-2 px-4">118.75</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">Aasif Sheikh <span className="text-gray-500 text-xs">(bowled)</span></td>
                          <td className="text-center py-2 px-4">42</td>
                          <td className="text-center py-2 px-4">36</td>
                          <td className="text-center py-2 px-4">5</td>
                          <td className="text-center py-2 px-4">0</td>
                          <td className="text-center py-2 px-4">116.67</td>
                        </tr>
                        {/* More batsmen would be listed here */}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-3">Bowling</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-4 font-medium">Bowler</th>
                          <th className="text-center py-2 px-4 font-medium">Overs</th>
                          <th className="text-center py-2 px-4 font-medium">Maidens</th>
                          <th className="text-center py-2 px-4 font-medium">Runs</th>
                          <th className="text-center py-2 px-4 font-medium">Wickets</th>
                          <th className="text-center py-2 px-4 font-medium">Economy</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-4">Karan KC</td>
                          <td className="text-center py-2 px-4">4.0</td>
                          <td className="text-center py-2 px-4">0</td>
                          <td className="text-center py-2 px-4">32</td>
                          <td className="text-center py-2 px-4">2</td>
                          <td className="text-center py-2 px-4">8.00</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">Sompal Kami</td>
                          <td className="text-center py-2 px-4">3.2</td>
                          <td className="text-center py-2 px-4">0</td>
                          <td className="text-center py-2 px-4">28</td>
                          <td className="text-center py-2 px-4">1</td>
                          <td className="text-center py-2 px-4">8.40</td>
                        </tr>
                        {/* More bowlers would be listed here */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'analysis' && (
              <div>
                <h3 className="text-lg font-bold mb-4">Over-by-Over Analysis</h3>
                <p className="text-gray-600 mb-6">See how the match progressed over by over with detailed run and wicket analysis.</p>
                
                <div className="bg-white rounded-lg p-4 mb-6">
                  <h4 className="font-medium mb-4">Run Rate Progression</h4>
                  <OverByOverChart 
                    ballByBall={match.ballByBall} 
                    totalOvers={match.overs}
                  />
                  <p className="text-sm text-gray-500 mt-2">Hover over each over bar to see detailed statistics</p>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-4">Inning Progression</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 px-4 font-medium">Over</th>
                            <th className="text-center py-2 px-4 font-medium">Runs</th>
                            <th className="text-center py-2 px-4 font-medium">Wickets</th>
                            <th className="text-center py-2 px-4 font-medium">Run Rate</th>
                            <th className="text-center py-2 px-4 font-medium">Score</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.from({ length: Math.ceil(Math.max(...match.ballByBall.map(b => b.over))) }).map((_, i) => {
                            const overNum = i + 1;
                            const overBalls = match.ballByBall.filter(b => b.over <= overNum);
                            const overRuns = match.ballByBall.filter(b => b.over === overNum).reduce((sum, b) => sum + b.runs, 0);
                            const overWickets = match.ballByBall.filter(b => b.over === overNum && b.isWicket).length;
                            const totalRuns = overBalls.reduce((sum, b) => sum + b.runs, 0);
                            const totalWickets = overBalls.filter(b => b.isWicket).length;
                            
                            return (
                              <tr key={overNum} className="border-b hover:bg-gray-50">
                                <td className="py-2 px-4">{overNum}</td>
                                <td className="text-center py-2 px-4">{overRuns}</td>
                                <td className="text-center py-2 px-4">{overWickets}</td>
                                <td className="text-center py-2 px-4">{(totalRuns / overNum).toFixed(2)}</td>
                                <td className="text-center py-2 px-4 font-medium">{totalRuns}/{totalWickets}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'stats' && (
              <div>
                <h3 className="text-lg font-bold mb-4">Match Statistics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Run Rate</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">{match.teamA.name}</span>
                        <span className="text-sm font-medium">
                          {match.scoreA ? (match.scoreA.runs / match.scoreA.overs).toFixed(2) : '0.00'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">{match.teamB.name}</span>
                        <span className="text-sm font-medium">
                          {match.scoreB ? (match.scoreB.runs / match.scoreB.overs).toFixed(2) : '0.00'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Boundaries</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">{match.teamA.name}</span>
                        <span className="text-sm">
                          <span className="font-medium">12</span> fours, <span className="font-medium">4</span> sixes
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">{match.teamB.name}</span>
                        <span className="text-sm">
                          <span className="font-medium">8</span> fours, <span className="font-medium">2</span> sixes
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Partnerships</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm mb-2">
                        <span className="font-medium">Highest Partnership</span>: 
                        <span className="ml-1">62 runs - Kushal & Aasif (8.2 overs)</span>
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Current Partnership</span>: 
                        <span className="ml-1">24 runs - Rohit & Dipendra (3.1 overs)</span>
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">This Over</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex space-x-2 mb-2">
                        {[1, 0, 'W', 2, 0].map((ball, index) => (
                          <div 
                            key={index}
                            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium
                              ${ball === 'W' ? 'bg-red-600 text-white' : 
                                ball === 4 ? 'bg-[#DC143C] text-white' : 
                                ball === 6 ? 'bg-purple-600 text-white' : 
                                'bg-gray-200 text-gray-700'}`}
                          >
                            {ball}
                          </div>
                        ))}
                      </div>
                      <p className="text-sm">
                        <span className="font-medium">Over 15</span>: 
                        <span className="ml-1">3 runs, 1 wicket - Karan KC bowling</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchDetailsPage;
