import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0B0B] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Trophy className="h-6 w-6 text-[#DC143C]" />
              <span className="ml-2 text-xl font-bold">nepCscore</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering grassroots cricket in Nepal through technology and community engagement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#DC143C]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#DC143C]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.16 10.16 0 01-3.127 1.195 4.91 4.91 0 00-8.385 4.482 13.93 13.93 0 01-10.12-5.137 4.926 4.926 0 001.522 6.574 4.903 4.903 0 01-2.23-.618v.063a4.92 4.92 0 003.94 4.821 4.9 4.9 0 01-2.22.085 4.92 4.92 0 004.6 3.42 9.87 9.87 0 01-6.115 2.107c-.39 0-.78-.023-1.17-.067a13.9 13.9 0 007.55 2.213c9.06 0 14.01-7.5 14.01-14.01s-.013-.776-.038-1.15a10.04 10.04 0 002.455-2.55z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#DC143C]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#DC143C]">Home</Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-[#DC143C]">Features</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#DC143C]">About Us</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-[#DC143C]">Login</Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-400 hover:text-[#DC143C]">Sign Up</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#DC143C] mr-2 mt-1" />
                <span className="text-gray-400">Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#DC143C] mr-2" />
                <span className="text-gray-400">info@nepcscore.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#DC143C] mr-2" />
                <span className="text-gray-400">+977 1234567890</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} nepCscore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;