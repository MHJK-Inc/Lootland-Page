import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.css';
import RecentActivity from './ui/RecentActivity';
import TeamMembers from './ui/TeamMembers';
import Navbar from './component/Navbar'
import React from 'react';

function App() {
  let Page
  switch (Window.location.pathname) {
    case "/recent":
      Page = RecentActivity
      break
    case "/team":
      Page = TeamMembers
      break
  }
  return (
    <div className="App">
      <Navbar/>
      <Page/>
    </div>
  );
}

export default App;
