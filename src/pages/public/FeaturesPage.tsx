import React from 'react';
import { Trophy, Users, Calendar, Clock, BarChart3, Shield, User } from 'lucide-react';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import { Link } from 'react-router-dom';

const FeaturesPage: React.FC = () => {
  return (
    <div>
      <section className="bg-[#0B0B0B] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Features</h1>
            <p className="text-lg text-gray-300">
              Discover how nepCscore transforms grassroots cricket in Nepal with tools for every stakeholder in the cricket ecosystem.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">Different Tools for Different Roles</h2>
            <p className="text-gray-600 text-center">
              Our platform is designed with specialized features for fans, organizers, players, and administrators.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Link to="/features/fan">
              <Card withHover className="h-full">
                <div className="flex items-start mb-6">
                  <div className="bg-[#DC143C] bg-opacity-10 p-3 rounded-lg">
                    <Trophy className="h-6 w-6 text-[#DC143C]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Fan Features</h3>
                    <p className="text-gray-600">
                      Follow matches in real-time, engage with the cricket community, and stay updated with 
                      your favorite teams and players.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                    Live match tracking
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                    Match reactions and polls
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                    Player and team profiles
                  </li>
                </ul>
                <Button variant="outline" fullWidth>
                  Explore Fan Features
                </Button>
              </Card>
            </Link>

            <Link to="/features/organizer">
              <Card withHover className="h-full">
                <div className="flex items-start mb-6">
                  <div className="bg-[#DC143C] bg-opacity-10 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-[#DC143C]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Organizer Tools</h3>
                    <p className="text-gray-600">
                      Powerful tools to manage cricket matches and tournaments. From match creation to 
                      live scoring.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                    Match management system
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                    Live scoring interface
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                    Team and player management
                  </li>
                </ul>
                <Button variant="outline" fullWidth>
                  Explore Organizer Tools
                </Button>
              </Card>
            </Link>

            <Link to="/features/player">
              <Card withHover className="h-full">
                <div className="flex items-start mb-6">
                  <div className="bg-[#DC143C] bg-opacity-10 p-3 rounded-lg">
                    <User className="h-6 w-6 text-[#DC143C]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Player Features</h3>
                    <p className="text-gray-600">
                      Track your cricket career, analyze performance, and showcase your achievements.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                    Performance analytics
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                    Career statistics
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                    Achievement tracking
                  </li>
                </ul>
                <Button variant="outline" fullWidth>
                  Explore Player Features
                </Button>
              </Card>
            </Link>

            <Link to="/features/admin">
              <Card withHover className="h-full">
                <div className="flex items-start mb-6">
                  <div className="bg-[#DC143C] bg-opacity-10 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-[#DC143C]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Admin Controls</h3>
                    <p className="text-gray-600">
                      Comprehensive tools to manage and monitor the platform. Ensure smooth operations 
                      and maintain quality.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                    User management
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                    Content moderation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                    Platform analytics
                  </li>
                </ul>
                <Button variant="outline" fullWidth>
                  Explore Admin Features
                </Button>
              </Card>
            </Link>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-gray-600 mb-6">
                Join nepCscore today and be part of Nepal's growing cricket community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <Button size="lg">
                    Sign Up Now
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;