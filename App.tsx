import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import EmployeesPage from './pages/EmployeesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';
import { Freelancer, Review } from './types';
import { INITIAL_FREELANCERS, SITE_CONFIG } from './constants';
import { dbService, supabase } from './services/supabase';

const App: React.FC = () => {
  const [freelancers, setFreelancers] = useState<Freelancer[]>(INITIAL_FREELANCERS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await dbService.getFreelancers();
      if (data.length > 0) {
        setFreelancers(data);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const addFreelancer = async (newFreelancer: Omit<Freelancer, 'id' | 'rating' | 'completedProjects' | 'reviews'>) => {
    const added = await dbService.addFreelancer(newFreelancer);
    if (added) {
      setFreelancers(prev => [added, ...prev]);
    }
  };

  const addReview = async (freelancerId: string, reviewData: Omit<Review, 'id' | 'date'>) => {
    const addedReview = await dbService.addReview(freelancerId, reviewData);
    if (addedReview) {
      const data = await dbService.getFreelancers();
      setFreelancers(data);
    }
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {loading ? (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
               <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4"></div>
               <p className="text-slate-500 font-medium">Connecting to Hub Backend...</p>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<Home freelancers={freelancers.slice(0, 3)} />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/employees" element={<EmployeesPage freelancers={freelancers} onAddReview={addReview} />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/register" element={<RegisterPage onRegister={addFreelancer} />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          )}
        </main>
        <footer className="bg-slate-900 text-slate-300 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">{SITE_CONFIG.shortName}</div>
                  <span className="text-xl font-bold text-white">{SITE_CONFIG.name}</span>
                </div>
                <p className="text-slate-400 max-w-sm">{SITE_CONFIG.description}</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#/services" className="hover:text-indigo-400">Services</a></li>
                  <li><a href="#/employees" className="hover:text-indigo-400">Our Talent</a></li>
                  <li><a href="#/admin" className="hover:text-indigo-400">Admin Login</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><i className="fa-solid fa-envelope text-indigo-400"></i> {SITE_CONFIG.email}</li>
                  <li className="flex items-center gap-2"><i className="fa-solid fa-phone text-indigo-400"></i> {SITE_CONFIG.phone}</li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;