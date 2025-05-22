import React from 'react';
import { Shield, Users, BarChart3, Settings, Bell, Database, Lock, FileText } from 'lucide-react';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import { Link } from 'react-router-dom';

const AdminFeatures: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Admin Features</h1>
          <p className="text-gray-600">
            Powerful administrative tools to manage and monitor the entire cricket platform. Ensure smooth 
            operations and maintain platform integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="flex flex-col h-full">
            <div className="flex items-start mb-6">
              <div className="bg-[#DC143C] bg-opacity-10 p-3 rounded-lg">
                <Users className="h-6 w-6 text-[#DC143C]" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2">User Management</h3>
                <p className="text-gray-600">
                  Comprehensive tools to manage users, roles, and permissions across the platform. 
                  Ensure proper access control and user authentication.
                </p>
              </div>
            </div>
            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                User approval system
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                Role assignment
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                Permission management
              </li>
            </ul>
            <Link to="/signup">
              <Button variant="outline" fullWidth>Manage Users</Button>
            </Link>
          </Card>

          <Card className="flex flex-col h-full">
            <div className="flex items-start mb-6">
              <div className="bg-[#DC143C] bg-opacity-10 p-3 rounded-lg">
                <Shield className="h-6 w-6 text-[#DC143C]" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2">Platform Moderation</h3>
                <p className="text-gray-600">
                  Tools to monitor and moderate platform activity, ensure compliance, and maintain 
                  quality standards.
                </p>
              </div>
            </div>
            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                Content moderation
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                Activity monitoring
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full mr-3"></div>
                Quality control
              </li>
            </ul>
            <Link to="/signup">
              <Button variant="outline" fullWidth>Access Moderation</Button>
            </Link>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <div className="flex items-center mb-4">
              <BarChart3 className="h-6 w-6 text-[#DC143C] mr-3" />
              <h3 className="text-lg font-bold">Analytics Dashboard</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Comprehensive analytics and reporting tools for platform performance.
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>• Usage statistics</li>
              <li>• User engagement metrics</li>
              <li>• Performance reports</li>
            </ul>
          </Card>

          <Card>
            <div className="flex items-center mb-4">
              <Settings className="h-6 w-6 text-[#DC143C] mr-3" />
              <h3 className="text-lg font-bold">System Configuration</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Manage platform settings and configure system parameters.
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>• Feature toggles</li>
              <li>• System parameters</li>
              <li>• Integration settings</li>
            </ul>
          </Card>

          <Card>
            <div className="flex items-center mb-4">
              <Bell className="h-6 w-6 text-[#DC143C] mr-3" />
              <h3 className="text-lg font-bold">Notifications</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Manage and send platform-wide notifications and announcements.
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>• System announcements</li>
              <li>• User notifications</li>
              <li>• Email communications</li>
            </ul>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Advanced Administrative Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Database className="h-6 w-6 text-[#DC143C] mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Data Management</h3>
                  <p className="text-gray-600">
                    Tools for managing and maintaining platform data integrity.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Lock className="h-6 w-6 text-[#DC143C] mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Security Controls</h3>
                  <p className="text-gray-600">
                    Advanced security features and access control management.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FileText className="h-6 w-6 text-[#DC143C] mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Audit Logs</h3>
                  <p className="text-gray-600">
                    Detailed activity logs and audit trail for all platform actions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Settings className="h-6 w-6 text-[#DC143C] mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">API Management</h3>
                  <p className="text-gray-600">
                    Manage and monitor platform API usage and integrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Manage the Platform?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg">
                Access Admin Panel
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

export default AdminFeatures;