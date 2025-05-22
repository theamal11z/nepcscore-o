import React from 'react';
import { Trophy, BarChart3, Calendar, Users, Target, Award, TrendingUp, Star } from 'lucide-react';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import { Link } from 'react-router-dom';

const PlayerFeatures: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Player Features</h1>
          <p className="text-gray-600">
            Track your cricket career, analyze your performance, and showcase your achievements with our 
            comprehensive player tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="flex flex-col h-full">
            <div className="flex items-start mb-6">
              <div className="bg-[#DC143C] bg-opacity-10 p-3 rounded-lg">
                <BarChart3 className="h-6 w-6 text-[#DC143C]" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2">Performance Analytics</h3>
                <p className="text-gray-600">
                  Track and analyze your cricket performance with detailed statistics and insights. 
                  Understand your strengths and areas for improvement.
                </p>
              </div>
            </div>
            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                Comprehensive statistics tracking
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                Performance trend analysis
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                Match-by-match breakdown
              </li>
            </ul>
            <Link to="/signup">
              <Button variant="outline" fullWidth>Track Your Stats</Button>
            </Link>
          </Card>

          <Card className="flex flex-col h-full">
            <div className="flex items-start mb-6">
              <div className="bg-[#DC143C] bg-opacity-10 p-3 rounded-lg">
                <Trophy className="h-6 w-6 text-[#DC143C]" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2">Career Highlights</h3>
                <p className="text-gray-600">
                  Showcase your best performances and cricket achievements. Build your cricket profile 
                  and track your career progression.
                </p>
              </div>
            </div>
            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                Achievement tracking
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                Performance milestones
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                Career timeline
              </li>
            </ul>
            <Link to="/signup">
              <Button variant="outline" fullWidth>Build Your Profile</Button>
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
              Keep track of your upcoming matches, practice sessions, and team events.
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>• Personal calendar</li>
              <li>• Team schedule integration</li>
              <li>• Availability management</li>
            </ul>
          </Card>

          <Card>
            <div className="flex items-center mb-4">
              <Target className="h-6 w-6 text-[#DC143C] mr-3" />
              <h3 className="text-lg font-bold">Performance Goals</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Set and track personal performance goals to improve your game.
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>• Goal setting tools</li>
              <li>• Progress tracking</li>
              <li>• Performance benchmarks</li>
            </ul>
          </Card>

          <Card>
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-[#DC143C] mr-3" />
              <h3 className="text-lg font-bold">Team Integration</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Connect with your team and stay updated with team activities.
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>• Team communication</li>
              <li>• Role management</li>
              <li>• Team statistics</li>
            </ul>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Advanced Player Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Award className="h-6 w-6 text-[#DC143C] mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Performance Certificates</h3>
                  <p className="text-gray-600">
                    Generate digital certificates for your cricket achievements.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <TrendingUp className="h-6 w-6 text-[#DC143C] mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Advanced Analytics</h3>
                  <p className="text-gray-600">
                    Deep dive into your performance with advanced statistical analysis.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Video className="h-6 w-6 text-[#DC143C] mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Performance Videos</h3>
                  <p className="text-gray-600">
                    Upload and share your match highlights and best moments.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Star className="h-6 w-6 text-[#DC143C] mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Talent Showcase</h3>
                  <p className="text-gray-600">
                    Get noticed by teams and scouts with your performance profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Take Your Game to the Next Level?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg">
                Join as Player
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

export default PlayerFeatures;