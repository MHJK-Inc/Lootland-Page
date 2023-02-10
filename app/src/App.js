import './App.css';
import 'semantic-ui-css/semantic.css';
import RecentActivity from './ui/RecentActivity';
import TeamMembers from './ui/TeamMembers';
import Home from './ui/Home';
import Navbar from './component/Navbar'
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route path={"/home"} element={<Home />} />
            <Route path="/recent" element={<RecentActivity />} />
            <Route path="/team" element={<TeamMembers />} />
          </Routes>
        </div>
      </>
  );
}

export default App;