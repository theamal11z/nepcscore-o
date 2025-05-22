import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trophy, Eye, EyeOff, User, Calendar, Users, Smartphone } from 'lucide-react';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import Select from '../../components/UI/Select';
import { useAuth } from '../../context/AuthContext';
import { User as UserType } from '../../types';

const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<UserType['role']>('fan');
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  
  const { signup, error, loading } = useAuth();
  const navigate = useNavigate();
  
  const validateForm = () => {
    const errors: {
      name?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};
    
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        await signup(email, password, name, role);
        navigate(`/${role}/dashboard`);
      } catch (error) {
        // Error handling is done in the AuthContext
      }
    }
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const roleOptions = [
    { value: 'fan', label: 'Fan' },
    { value: 'player', label: 'Player' },
    { value: 'organizer', label: 'Organizer' },
    { value: 'admin', label: 'Admin' },
  ];
  
  const getRoleIcon = (roleType: string) => {
    switch (roleType) {
      case 'fan':
        return <Smartphone size={20} className="text-[#DC143C]" />;
      case 'player':
        return <User size={20} className="text-[#DC143C]" />;
      case 'organizer':
        return <Calendar size={20} className="text-[#DC143C]" />;
      case 'admin':
        return <Users size={20} className="text-[#DC143C]" />;
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Trophy className="h-12 w-12 text-[#DC143C]" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-[#DC143C] hover:text-red-800">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              id="name"
              type="text"
              label="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={validationErrors.name}
              autoComplete="name"
              placeholder="Enter your full name"
              required
            />

            <Input
              id="email"
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={validationErrors.email}
              autoComplete="email"
              placeholder="Enter your email"
              required
            />

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={validationErrors.password}
                  autoComplete="new-password"
                  placeholder="Create a password"
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <Input
              id="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              label="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={validationErrors.confirmPassword}
              autoComplete="new-password"
              placeholder="Confirm your password"
              required
            />

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                I want to join as a
              </label>
              <div className="grid grid-cols-2 gap-3">
                {roleOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`flex items-center justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium ${
                      role === option.value
                        ? 'bg-[#DC143C] text-white border-[#DC143C]'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => setRole(option.value as UserType['role'])}
                  >
                    <span className="mr-2">{getRoleIcon(option.value)}</span>
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-[#DC143C] focus:ring-[#DC143C] border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I agree to the{' '}
                <Link to="/terms" className="font-medium text-[#DC143C] hover:text-red-800">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="font-medium text-[#DC143C] hover:text-red-800">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <Button type="submit" fullWidth disabled={loading}>
              {loading ? 'Creating account...' : 'Create account'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;