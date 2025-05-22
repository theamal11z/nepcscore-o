import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Smartphone, Users, Clock, BarChart3, ChevronRight } from 'lucide-react';
import Button from '../../components/UI/Button';

const LandingPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#0B0B0B] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Grassroots Cricket Transformed in Nepal
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Track scores, discover players, and connect with the cricket community. 
              All in one platform, designed for Nepal's cricket ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg">
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline">
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Features for Everyone</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              nepCscore provides specialized tools for every cricket stakeholder - from fans to organizers, players to administrators.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#DC143C] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-[#DC143C]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fan Experience</h3>
              <p className="text-gray-600">
                Follow matches in real-time, react to events, and engage with cricket communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#DC143C] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-[#DC143C]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Organizer Tools</h3>
              <p className="text-gray-600">
                Create matches, manage teams, and update live scores with ease.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#DC143C] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#DC143C]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Player Profiles</h3>
              <p className="text-gray-600">
                Track your career stats, highlight performances, and grow your cricket journey.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#DC143C] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-[#DC143C]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Admin Dashboard</h3>
              <p className="text-gray-600">
                Manage users, approve matches, and analyze platform performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Live Scores Preview */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Real-Time Cricket Action</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Never miss a moment with our live scoring system, designed specifically for grassroots cricket in Nepal.
            </p>
          </div>
          
          <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-[#0B0B0B] text-white p-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold">Kathmandu XI vs Pokhara Rhinos</h3>
                <Badge variant="danger" className="animate-pulse">LIVE</Badge>
              </div>
              <p className="text-sm text-gray-300">20 Overs Match • Tribhuvan University Ground</p>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between mb-8">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Kathmandu XI</p>
                  <p className="text-3xl font-bold">156/6</p>
                  <p className="text-sm text-gray-600">(18.2 Overs)</p>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-400">VS</span>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Pokhara Rhinos</p>
                  <p className="text-3xl font-bold">123/4</p>
                  <p className="text-sm text-gray-600">(15.0 Overs)</p>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm font-bold text-[#DC143C]">
                  Pokhara Rhinos need 34 runs from 30 balls
                </p>
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-bold">Recent Balls</p>
                    <p className="text-xs text-gray-600">Current Over: 15.0</p>
                  </div>
                  <div className="flex space-x-2">
                    <span className="w-8 h-8 rounded-full bg-green-100 text-green-800 flex items-center justify-center text-sm font-medium">1</span>
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-sm font-medium">4</span>
                    <span className="w-8 h-8 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center text-sm font-medium">0</span>
                    <span className="w-8 h-8 rounded-full bg-red-100 text-red-800 flex items-center justify-center text-sm font-medium">W</span>
                    <span className="w-8 h-8 rounded-full bg-green-100 text-green-800 flex items-center justify-center text-sm font-medium">2</span>
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-sm font-medium">6</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 text-center">
              <Link to="/login">
                <Button>
                  View Full Scorecard
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-[#0B0B0B] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Nepal's Cricket Revolution?</h2>
            <p className="text-lg mb-8 text-gray-300">
              Whether you're a fan, player, organizer, or administrator, nepCscore has tools designed for you.
            </p>
            <Link to="/signup">
              <Button size="lg">
                Sign Up Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Badge component just for the landing page
const Badge: React.FC<{variant: string, className?: string}> = ({variant, className, children}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'danger':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getVariantClasses()} ${className || ''}`}>
      {children}
    </span>
  );
};

export default LandingPage;