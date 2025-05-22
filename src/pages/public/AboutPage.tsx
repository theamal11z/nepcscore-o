import React from 'react';
import { Trophy, Heart, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button';

const AboutPage: React.FC = () => {
  return (
    <div>
      <section className="bg-[#0B0B0B] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About nepCscore</h1>
            <p className="text-lg text-gray-300">
              Our mission is to transform grassroots cricket in Nepal through technology, 
              community engagement, and accessible tools for players, fans, and organizers.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-700 mb-6">
                nepCscore was born from a passion for cricket and a desire to see the sport thrive at all levels in Nepal. 
                We believe that by providing accessible technology tools to grassroots cricket, we can help grow the game, 
                discover talent, and build stronger cricket communities.
              </p>
              <p className="text-gray-700">
                Our vision is to become the essential platform that connects every cricket stakeholder in Nepal - 
                from village tournaments to regional competitions, from young players to dedicated fans.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Core Values</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#DC143C] bg-opacity-10 p-3 rounded-md">
                      <Trophy className="h-6 w-6 text-[#DC143C]" />
                    </div>
                    <h3 className="font-bold text-lg ml-4">Cricket Excellence</h3>
                  </div>
                  <p className="text-gray-600">
                    We're passionate about promoting quality cricket at all levels and helping players develop their skills.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#DC143C] bg-opacity-10 p-3 rounded-md">
                      <Heart className="h-6 w-6 text-[#DC143C]" />
                    </div>
                    <h3 className="font-bold text-lg ml-4">Community First</h3>
                  </div>
                  <p className="text-gray-600">
                    We believe in building strong cricket communities that support and encourage each other.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#DC143C] bg-opacity-10 p-3 rounded-md">
                      <Globe className="h-6 w-6 text-[#DC143C]" />
                    </div>
                    <h3 className="font-bold text-lg ml-4">Accessibility</h3>
                  </div>
                  <p className="text-gray-600">
                    We're committed to making cricket management technology accessible to everyone, regardless of location.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#DC143C] bg-opacity-10 p-3 rounded-md">
                      <Users className="h-6 w-6 text-[#DC143C]" />
                    </div>
                    <h3 className="font-bold text-lg ml-4">Inclusivity</h3>
                  </div>
                  <p className="text-gray-600">
                    We welcome and support cricketers of all backgrounds, ages, and skill levels.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
              <p className="text-gray-700 mb-6">
                nepCscore is more than just a cricket platform—it's a movement to transform how cricket is played, 
                watched, and managed across Nepal. By connecting players, fans, and organizers, we're creating a 
                cricket ecosystem that:
              </p>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="bg-[#DC143C] bg-opacity-10 p-1 rounded-full mt-1 mr-3">
                    <div className="h-4 w-4 rounded-full bg-[#DC143C]"></div>
                  </div>
                  <p className="text-gray-700">
                    <strong>Increases visibility</strong> for talented players from remote areas
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#DC143C] bg-opacity-10 p-1 rounded-full mt-1 mr-3">
                    <div className="h-4 w-4 rounded-full bg-[#DC143C]"></div>
                  </div>
                  <p className="text-gray-700">
                    <strong>Improves organization</strong> of local tournaments and matches
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#DC143C] bg-opacity-10 p-1 rounded-full mt-1 mr-3">
                    <div className="h-4 w-4 rounded-full bg-[#DC143C]"></div>
                  </div>
                  <p className="text-gray-700">
                    <strong>Provides valuable data</strong> for player development and team strategy
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#DC143C] bg-opacity-10 p-1 rounded-full mt-1 mr-3">
                    <div className="h-4 w-4 rounded-full bg-[#DC143C]"></div>
                  </div>
                  <p className="text-gray-700">
                    <strong>Builds communities</strong> of cricket enthusiasts across the country
                  </p>
                </li>
              </ul>
              
              <p className="text-gray-700">
                Through technology, we're helping to professionalize grassroots cricket and create pathways 
                for the next generation of Nepali cricket stars.
              </p>
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Cricket Revolution</h2>
              <p className="text-gray-700 mb-8">
                Whether you're a player looking to track your stats, an organizer managing local tournaments, 
                or a fan following your local teams, nepCscore has a place for you.
              </p>
              <Link to="/signup">
                <Button size="lg">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;