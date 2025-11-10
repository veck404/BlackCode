import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

const Home = lazy(() => import('./pages/Home'));
const Sheet = lazy(() => import('./pages/Sheet'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Blog = lazy(() => import('./pages/Blog'));
const Login = lazy(() => import('./pages/Login'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
            <Navbar />
            <main>
              <Suspense
                fallback={
                  <div className="flex h-[60vh] items-center justify-center text-gray-500 dark:text-gray-400">
                    Loading...
                  </div>
                }
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/sheet" element={<Sheet />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
          <Toaster position="top-right" />
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
