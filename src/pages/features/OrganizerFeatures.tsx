import React from 'react';
import { Trophy, Users, Calendar, BarChart3, Clock, Settings, Shield, Database } from 'lucide-react';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import { Link } from 'react-router-dom';

const OrganizerFeatures: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Organizer Features</h1>
          <p className="text-gray-600">
            Powerful tools to manage cricket matches and tournaments efficiently. From match creation to 
            live scoring, we've got everything you need to run successful cricket events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="flex flex-col h-full">
            <div className="flex items-start mb-6">
              <div className="bg-[#DC143C] bg-opacity-10 p-3 rounded-lg">
                <Trophy className="h-6 w-6 text-[#DC143C]" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2">Match Management</h3>
                <p className="text-gray-600">
                  Create and manage cricket matches with our comprehensive match management system. Set up 
                  everything from team lineups to match rules.
                </p>
              </div>
            </div>
            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                Easy match creation wizard
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                Team and player management
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                Customizable match settings
              </li>
            </ul>
            <Link to="/signup">
              <Button variant="outline" fullWidth>Start Organizing</Button>
            </Link>
          </Card>

          <Card className="flex flex-col h-full">
            <div className="flex items-start mb-6">
              <div className="bg-[#DC143C] bg-opacity-10 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-[#DC143C]" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2">Live Scoring System</h3>
                <p className="text-gray-600">
                  Update match scores in real-time with our intuitive scoring interface. Keep fans engaged 
                  with instant updates.
                </p>
              </div>
            </div>
            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                Ball-by-ball scoring
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                Automatic statistics calculation
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                Mobile-friendly interface
              </li>
            </ul>
            <Link to="/signup">
              <Button variant="outline" fullWidth>Try Live Scoring</Button>
            </Link>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-[#DC143C] mr-3" />
              <h3 className="text-lg font-bold">Team Management</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Manage teams, players, and squad selections efficiently with our team management tools.
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>• Player registration system</li>
              <li>• Team roster management</li>
              <li>• Player statistics tracking</li>
            </ul>
          </Card>

          <Card>
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-[#DC143C] mr-3" />
              <h3 className="text-lg font-bold">Tournament Planning</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Plan and schedule tournaments with our comprehensive tournament management system.
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>• Tournament creation wizard</li>
              <li>• Fixture generation</li>
              <li>• Schedule management</li>
            </ul>
          </Card>

          <Card>
            <div className="flex items-center mb-4">
              <BarChart3 className="h-6 w-6 text-[#DC143C] mr-3" />
              <h3 className="text-lg font-bold">Analytics & Reports</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Access detailed analytics and generate comprehensive reports for matches and tournaments.
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>• Match statistics</li>
              <li>• Performance analytics</li>
              <li>• Custom report generation</li>
            </ul>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Advanced Organizer Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Settings className="h-6 w-6 text-[#DC143C] mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Custom Match Settings</h3>
                  <p className="text-gray-600">
                    Customize match rules, scoring systems, and more to fit your tournament needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-[#DC143C] mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Access Control</h3>
                  <p className="text-gray-600">
                    Manage scoring permissions and delegate responsibilities to team members.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Database className="h-6 w-6 text-[#DC143C] mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Data Export</h3>
                  <p className="text-gray-600">
                    Export match and tournament data in various formats for analysis.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Globe className="h-6 w-6 text-[#DC143C] mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Live Streaming Integration</h3>
                  <p className="text-gray-600">
                    Connect with streaming platforms to broadcast matches live.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Organize Your Cricket Event?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg">
                Get Started Now
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
const Globe = (props: any) => (
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
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" x2="22" y1="12" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

export default OrganizerFeatures;