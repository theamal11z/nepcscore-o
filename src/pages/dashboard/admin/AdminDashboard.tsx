import React from 'react';
import { Users, Trophy, Calendar, BarChart3, AlertCircle, CheckCircle, User, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../../../components/UI/Card';
import Button from '../../../components/UI/Button';
import StatCard from '../../../components/StatCard';
import { useAuth } from '../../../context/AuthContext';
import Badge from '../../../components/UI/Badge';

// Mock data
const pendingApprovals = [
  {
    id: '1',
    type: 'match',
    title: 'Kathmandu XI vs Pokhara Rhinos',
    organizer: 'Match Organizer',
    date: new Date(),
  },
  {
    id: '2',
    type: 'user',
    title: 'Ram Sharma',
    role: 'player',
    date: new Date(),
  },
  {
    id: '3',
    type: 'user',
    title: 'Sita Thapa',
    role: 'organizer',
    date: new Date(),
  }
];

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Welcome, {user?.name}!</h1>
        <p className="text-gray-600">Monitor and manage the nepCscore platform.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Users"
          value="278"
          icon={<Users className="h-6 w-6" />}
          change={{ value: 12, trend: 'up' }}
        />
        
        <StatCard
          title="Active Matches"
          value="14"
          icon={<Trophy className="h-6 w-6" />}
          change={{ value: 5, trend: 'up' }}
        />
        
        <StatCard
          title="Matches This Month"
          value="42"
          icon={<Calendar className="h-6 w-6" />}
          change={{ value: 20, trend: 'up' }}
        />
        
        <StatCard
          title="Pending Approvals"
          value={pendingApprovals.length}
          icon={<AlertCircle className="h-6 w-6" />}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <Card>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">User Statistics</h2>
              <Link to="/admin/users" className="text-[#DC143C] text-sm font-medium">
                View All Users
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Smartphone className="h-5 w-5 text-[#DC143C] mr-2" />
                  <span className="font-medium">Fans</span>
                </div>
                <p className="text-2xl font-bold">156</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <User className="h-5 w-5 text-[#DC143C] mr-2" />
                  <span className="font-medium">Players</span>
                </div>
                <p className="text-2xl font-bold">84</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Briefcase className="h-5 w-5 text-[#DC143C] mr-2" />
                  <span className="font-medium">Organizers</span>
                </div>
                <p className="text-2xl font-bold">32</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 text-[#DC143C] mr-2" />
                  <span className="font-medium">Admins</span>
                </div>
                <p className="text-2xl font-bold">6</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">New User Registrations</h3>
              <div className="bg-gray-50 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500">User registration chart will appear here</p>
              </div>
            </div>
          </Card>
        </div>
        
        <div>
          <Card>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Pending Approvals</h2>
              <Link to="/admin/approvals" className="text-[#DC143C] text-sm font-medium">
                View All
              </Link>
            </div>
            
            {pendingApprovals.length > 0 ? (
              <div className="space-y-4">
                {pendingApprovals.map((item) => (
                  <div key={item.id} className="border border-gray-100 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="flex items-center">
                          <Badge variant="primary" className="mr-2">
                            {item.type === 'match' ? 'Match' : 'User'}
                          </Badge>
                          <p className="font-medium">{item.title}</p>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          {item.type === 'match' 
                            ? `Organized by: ${item.organizer}`
                            : `Role: ${item.role}`
                          }
                        </p>
                      </div>
                      <p className="text-xs text-gray-500">
                        {new Date(item.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" className="flex-1">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
                <p className="text-gray-600">No pending approvals!</p>
              </div>
            )}
          </Card>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Match Statistics</h2>
            <Link to="/admin/matches" className="text-[#DC143C] text-sm font-medium">
              View Details
            </Link>
          </div>
          
          <div className="bg-gray-50 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-500">Match statistics chart will appear here</p>
          </div>
        </Card>
        
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Platform Activity</h2>
            <Link to="/admin/reports" className="text-[#DC143C] text-sm font-medium">
              View Reports
            </Link>
          </div>
          
          <div className="bg-gray-50 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-500">Activity chart will appear here</p>
          </div>
        </Card>
      </div>
      
      <div className="mt-8 bg-white rounded-lg p-6 border border-gray-100">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/admin/users">
            <Button fullWidth variant="outline" className="flex justify-center items-center py-6">
              <Users className="h-5 w-5 mr-2" />
              Manage Users
            </Button>
          </Link>
          
          <Link to="/admin/matches">
            <Button fullWidth variant="outline" className="flex justify-center items-center py-6">
              <Trophy className="h-5 w-5 mr-2" />
              View Matches
            </Button>
          </Link>
          
          <Link to="/admin/reports">
            <Button fullWidth variant="outline" className="flex justify-center items-center py-6">
              <BarChart3 className="h-5 w-5 mr-2" />
              Generate Reports
            </Button>
          </Link>
          
          <Link to="/admin/settings">
            <Button fullWidth variant="outline" className="flex justify-center items-center py-6">
              <Settings className="h-5 w-5 mr-2" />
              Platform Settings
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Import needed icons
const Smartphone = (props: any) => {
  return (
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
};

const Settings = (props: any) => {
  return (
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};

export default AdminDashboard;