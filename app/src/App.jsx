import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecentActivity from './ui/RecentActivity';
import { Container } from 'react-bootstrap';
import TeamMembers from './ui/TeamMembers';
import Home from './ui/Home';
import NavigationBar from './component/Navbar';
import Footer from './ui/Footer';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <>
        <NavigationBar />
        <Container className={'p-0 m-0'} fluid>
          <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route path="/recent" element={<RecentActivity />} />
            <Route path="/team" element={<TeamMembers />} />
          </Routes>
        </Container>
        <Footer />
      </>
  );
}

export default App;