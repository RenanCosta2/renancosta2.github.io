// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Resume } from './components/Resume';
import { Portfolio } from './components/Portfolio';
import { AboutMe } from './components/AboutMe';
import { Profile } from './components/Profile';
import './App.css';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Router>
      <Header />
      <main className='container'>
      <div className="profile-container">
        <Profile />
      </div>
      <div className="route-content">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<ProjectDetail  />} />
        </Routes>
      </div>
      </main>
    </Router>
  );
}

export default App;