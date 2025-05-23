import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Star, MessageCircle, Trophy } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import ProfileLayout from '../../components/Profile/ProfileLayout';
import Card from '../../components/UI/Card';
import PlayerCard from '../../components/PlayerCard';
import MatchCard from '../../components/MatchCard';

// Mock data
const favoriteTeams = [
  { id: '1', name: 'Kathmandu XI', logo: '' },
  { id: '3', name: 'Chitwan Tigers', logo: '' },
];

const favoritePlayers = [
  {
    id: '1',
    name: 'Paras Khadka',
    role: 'All-rounder',
    teamId: '1',
    stats: {
      matches: 42,
      runs: 1624,
      wickets: 38,
      highestScore: 106,
      bestBowling: '5/26',
      centuries: 2,
      fifties: 8
    },
    profileImage: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '2',
    name: 'Sandeep Lamichhane',
    role: 'Bowler',
    teamId: '3',
    stats: {
      matches: 36,
      runs: 204,
      wickets: 76,
      highestScore: 32,
      bestBowling: '6/16',
      centuries: 0,
      fifties: 0
    },
    profileImage: 'https://images.pexels.com/photos/8885042/pexels-photo-8885042.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

const recentActivity = [
  { 
    type: 'reaction', 
    matchId: '1', 
    matchName: 'Kathmandu XI vs Pokhara Rhinos', 
    action: 'liked',
    timestamp: new Date(Date.now() - 3600000) 
  },
  { 
    type: 'poll', 
    matchId: '1', 
    matchName: 'Kathmandu XI vs Pokhara Rhinos', 
    action: 'voted for Kathmandu XI to win',
    timestamp: new Date(Date.now() - 7200000) 
  },
  { 
    type: 'match', 
    matchId: '2', 
    matchName: 'Chitwan Tigers vs Biratnagar Kings', 
    action: 'watched',
    timestamp: new Date(Date.now() - 86400000) 
  }
];

const upcomingMatches = [
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
    teamA: { id: '1', name: 'Kathmandu XI', logo: '', players: [], matches: [] },
    teamB: { id: '3', name: 'Chitwan Tigers', logo: '', players: [], matches: [] },
    date: new Date(Date.now() + 172800000), // day after tomorrow
    venue: 'Tribhuvan University Ground',
    overs: 50,
    status: 'upcoming' as const,
    ballByBall: [],
    organizer: '2'
  }
];

const notificationPreferences = [
  { id: 'match_start', label: 'Match Start Notifications', enabled: true },
  { id: 'live_updates', label: 'Live Match Updates', enabled: true },
  { id: 'favorite_team', label: 'Favorite Team Updates', enabled: true },
  { id: 'favorite_player', label: 'Favorite Player Updates', enabled: true },
  { id: 'poll_results', label: 'Poll Results', enabled: false },
  { id: 'app_updates', label: 'App Updates & News', enabled: true }
];

const FanProfilePage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) {
    return <div>Loading...</div>;
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'favorites', label: 'Favorites' },
    { id: 'activity', label: 'Activity' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'settings', label: 'Settings' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold mb-4">Your Cricket Dashboard</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Upcoming Matches</h3>
                <div className="space-y-4">
                  {upcomingMatches.map(match => (
                    <MatchCard 
                      key={match.id} 
                      match={match} 
                      onClick={() => navigate(`/fan/match/${match.id}`)}
                    />
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Recent Activity</h3>
                <Card>
                  <div className="divide-y">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="py-3 first:pt-0 last:pb-0">
                        <div className="flex items-start">
                          <div className="mr-3">
                            {activity.type === 'reaction' && (
                              <div className="w-8 h-8 rounded-full bg-[#DC143C] bg-opacity-10 flex items-center justify-center">
                                <Heart className="h-4 w-4 text-[#DC143C]" />
                              </div>
                            )}
                            {activity.type === 'poll' && (
                              <div className="w-8 h-8 rounded-full bg-[#DC143C] bg-opacity-10 flex items-center justify-center">
                                <MessageCircle className="h-4 w-4 text-[#DC143C]" />
                              </div>
                            )}
                            {activity.type === 'match' && (
                              <div className="w-8 h-8 rounded-full bg-[#DC143C] bg-opacity-10 flex items-center justify-center">
                                <Trophy className="h-4 w-4 text-[#DC143C]" />
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="text-sm">
                              You {activity.action} <span className="font-medium">{activity.matchName}</span>
                            </p>
                            <p className="text-xs text-gray-500">
                              {activity.timestamp.toLocaleDateString('en-US', { 
                                day: 'numeric', 
                                month: 'short',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Your Favorite Players</h3>
              <div className="space-y-4 mb-6">
                {favoritePlayers.map(player => (
                  <PlayerCard 
                    key={player.id} 
                    player={player} 
                    onClick={() => navigate(`/fan/players/${player.id}`)}
                  />
                ))}
              </div>
              
              <h3 className="text-lg font-medium mb-3">Your Favorite Teams</h3>
              <Card>
                <div className="divide-y">
                  {favoriteTeams.map(team => (
                    <div key={team.id} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                          {team.logo ? (
                            <img src={team.logo} alt={team.name} className="w-full h-full object-cover rounded-full" />
                          ) : (
                            <span className="text-sm font-medium">{team.name.charAt(0)}</span>
                          )}
                        </div>
                        <span className="font-medium">{team.name}</span>
                      </div>
                      <button className="text-gray-400 hover:text-[#DC143C]">
                        <Star className="h-5 w-5 fill-current" />
                      </button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        );
        
      case 'favorites':
        return (
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Favorite Teams</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {favoriteTeams.map(team => (
                  <Card key={team.id} withHover className="cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                          {team.logo ? (
                            <img src={team.logo} alt={team.name} className="w-full h-full object-cover rounded-full" />
                          ) : (
                            <span className="text-lg font-medium">{team.name.charAt(0)}</span>
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium">{team.name}</h3>
                          <p className="text-sm text-gray-500">Following</p>
                        </div>
                      </div>
                      <button className="text-[#DC143C]">
                        <Star className="h-5 w-5 fill-current" />
                      </button>
                    </div>
                  </Card>
                ))}
                
                <Card className="border-dashed cursor-pointer flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl text-gray-400">+</span>
                    </div>
                    <p className="font-medium text-gray-600">Add Team</p>
                  </div>
                </Card>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-4">Favorite Players</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {favoritePlayers.map(player => (
                  <PlayerCard 
                    key={player.id} 
                    player={player} 
                    onClick={() => navigate(`/fan/players/${player.id}`)}
                  />
                ))}
                
                <Card className="border-dashed cursor-pointer flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl text-gray-400">+</span>
                    </div>
                    <p className="font-medium text-gray-600">Add Player</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        );
        
      case 'activity':
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Your Activity</h2>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Recent Activity</h3>
                <div className="flex space-x-2">
                  <select className="text-sm border rounded-md px-2 py-1">
                    <option>All Types</option>
                    <option>Reactions</option>
                    <option>Polls</option>
                    <option>Matches</option>
                  </select>
                  <select className="text-sm border rounded-md px-2 py-1">
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                    <option>All Time</option>
                  </select>
                </div>
              </div>
              
              <Card>
                <div className="divide-y">
                  {[...recentActivity, ...recentActivity].map((activity, index) => (
                    <div key={index} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex items-start">
                        <div className="mr-3">
                          {activity.type === 'reaction' && (
                            <div className="w-10 h-10 rounded-full bg-[#DC143C] bg-opacity-10 flex items-center justify-center">
                              <Heart className="h-5 w-5 text-[#DC143C]" />
                            </div>
                          )}
                          {activity.type === 'poll' && (
                            <div className="w-10 h-10 rounded-full bg-[#DC143C] bg-opacity-10 flex items-center justify-center">
                              <MessageCircle className="h-5 w-5 text-[#DC143C]" />
                            </div>
                          )}
                          {activity.type === 'match' && (
                            <div className="w-10 h-10 rounded-full bg-[#DC143C] bg-opacity-10 flex items-center justify-center">
                              <Trophy className="h-5 w-5 text-[#DC143C]" />
                            </div>
                          )}
                        </div>
                        <div>
                          <p>
                            You {activity.action} <span className="font-medium">{activity.matchName}</span>
                          </p>
                          <p className="text-sm text-gray-500">
                            {activity.timestamp.toLocaleDateString('en-US', { 
                              weekday: 'long',
                              day: 'numeric', 
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-500 mb-2">You've reached the end of your recent activity.</p>
              <button className="text-[#DC143C] font-medium">Load More</button>
            </div>
          </div>
        );
        
      case 'notifications':
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Notification Preferences</h2>
            <p className="text-gray-600 mb-6">Manage what notifications you receive from NepCscore.</p>
            
            <Card>
              <div className="divide-y">
                {notificationPreferences.map(pref => (
                  <div key={pref.id} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{pref.label}</h3>
                      <p className="text-sm text-gray-500">
                        {pref.id === 'match_start' && 'Get notified when matches you follow are about to start.'}
                        {pref.id === 'live_updates' && 'Receive updates on key moments during live matches.'}
                        {pref.id === 'favorite_team' && 'Stay updated with news about your favorite teams.'}
                        {pref.id === 'favorite_player' && 'Get updates about your favorite players.'}
                        {pref.id === 'poll_results' && 'Be notified when polls you participated in close.'}
                        {pref.id === 'app_updates' && 'Receive updates about new features and cricket news.'}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={pref.enabled}
                        readOnly
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#DC143C]"></div>
                    </label>
                  </div>
                ))}
              </div>
            </Card>
            
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Email Notifications</h2>
              <Card>
                <div className="flex items-center justify-between py-4">
                  <div>
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-gray-500">Receive notifications via email</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={true}
                      readOnly
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#DC143C]"></div>
                  </label>
                </div>
              </Card>
            </div>
          </div>
        );
        
      case 'settings':
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Account Settings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <h3 className="font-medium mb-4">Personal Information</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-[#DC143C]" 
                      defaultValue={user.name}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-[#DC143C]" 
                      defaultValue={user.email}
                    />
                  </div>
                  <button className="px-4 py-2 bg-[#DC143C] text-white rounded-md hover:bg-[#B01030] transition-colors">
                    Save Changes
                  </button>
                </form>
              </Card>
              
              <Card>
                <h3 className="font-medium mb-4">Change Password</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                    <input 
                      type="password" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-[#DC143C]" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                    <input 
                      type="password" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-[#DC143C]" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                    <input 
                      type="password" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-[#DC143C]" 
                    />
                  </div>
                  <button className="px-4 py-2 bg-[#DC143C] text-white rounded-md hover:bg-[#B01030] transition-colors">
                    Update Password
                  </button>
                </form>
              </Card>
            </div>
            
            <Card>
              <h3 className="font-medium mb-4">Profile Picture</h3>
              <div className="flex items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
                  <img 
                    src={'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'} 
                    alt={user.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <button className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors text-sm mr-2">
                    Upload New
                  </button>
                  <button className="px-3 py-1.5 text-gray-600 rounded-md hover:bg-gray-100 transition-colors text-sm">
                    Remove
                  </button>
                </div>
              </div>
            </Card>
            
            <div className="mt-8">
              <Card className="bg-red-50 border-red-100">
                <h3 className="font-medium text-red-800 mb-2">Danger Zone</h3>
                <p className="text-red-600 text-sm mb-4">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <button className="px-4 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-100 transition-colors">
                  Delete Account
                </button>
              </Card>
            </div>
          </div>
        );
        
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <ProfileLayout
      user={user}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      tabs={tabs}
    >
      {renderTabContent()}
    </ProfileLayout>
  );
};

export default FanProfilePage;
