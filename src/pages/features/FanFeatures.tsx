import React from 'react';
import { Trophy, Clock, Calendar, Users, Bell, Heart, MessageCircle, BarChart3 } from 'lucide-react';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import { Link } from 'react-router-dom';

const FanFeatures: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Fan Features</h1>
          <p className="text-gray-600">
            Experience cricket like never before with our comprehensive fan features. Stay connected to every match, 
            every player, and every moment of Nepal's cricket scene.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="flex flex-col h-full">
            <div className="flex items-start mb-6">
              <div className="bg-[#DC143C] bg-opacity-10 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-[#DC143C]" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2">Live Match Tracking</h3>
                <p className="text-gray-600">
                  Follow ball-by-ball updates, live scores, and match commentary in real-time. Never miss a single 
                  moment of the action.
                </p>
              </div>
            </div>
            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                Ball-by-ball commentary
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                Live scoring updates
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                Match statistics in real-time
              </li>
            </ul>
            <Link to="/signup">
              <Button variant="outline" fullWidth>Try Live Tracking</Button>
            </Link>
          </Card>

          <Card className="flex flex-col h-full">
            <div className="flex items-start mb-6">
              <div className="bg-[#DC143C] bg-opacity-10 p-3 rounded-lg">
                <Heart className="h-6 w-6 text-[#DC143C]" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2">Interactive Features</h3>
                <p className="text-gray-600">
                  Engage with matches through reactions, polls, and predictions. Make your voice heard and 
                  connect with other fans.
                </p>
              </div>
            </div>
            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                React to match events
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                Participate in match polls
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                Make match predictions
              </li>
            </ul>
            <Link to="/signup">
              <Button variant="outline" fullWidth>Join the Community</Button>
            </Link>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-[#DC143C] mr-3" />
              <h3 className="text-lg font-bold">Match Schedule</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Browse upcoming matches, set reminders, and plan your cricket viewing schedule.
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>• View complete match calendar</li>
              <li>• Set match reminders</li>
              <li>• Filter by teams and venues</li>
            </ul>
          </Card>

          <Card>
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-[#DC143C] mr-3" />
              <h3 className="text-lg font-bold">Team & Player Profiles</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Follow your favorite teams and players. Access detailed statistics and performance history.
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>• Detailed player statistics</li>
              <li>• Team performance analytics</li>
              <li>• Player comparison tools</li>
            </ul>
          </Card>

          <Card>
            <div className="flex items-center mb-4">
              <Bell className="h-6 w-6 text-[#DC143C] mr-3" />
              <h3 className="text-lg font-bold">Notifications</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Stay updated with customizable notifications for matches, teams, and players.
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>• Match start alerts</li>
              <li>• Score milestones</li>
              <li>• Team announcements</li>
            </ul>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Premium Fan Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <MessageCircle className="h-6 w-6 text-[#DC143C] mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Live Chat</h3>
                  <p className="text-gray-600">
                    Join match discussions with other fans in real-time chat rooms.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <BarChart3 className="h-6 w-6 text-[#DC143C] mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Advanced Statistics</h3>
                  <p className="text-gray-600">
                    Access detailed analytics and performance insights.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Trophy className="h-6 w-6 text-[#DC143C] mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Fantasy Cricket</h3>
                  <p className="text-gray-600">
                    Create your dream team and compete with other fans.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Video className="h-6 w-6 text-[#DC143C] mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Highlight Clips</h3>
                  <p className="text-gray-600">
                    Watch key moments and match highlights on-demand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Enhance Your Cricket Experience?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/features">
              <Button size="lg" variant="outline">
                Explore More Features
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Additional icon component
const Video = (props: any) => (
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
    <path d="m22 8-6 4 6 4V8Z"/>
    <rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
  </svg>
);

export default FanFeatures;