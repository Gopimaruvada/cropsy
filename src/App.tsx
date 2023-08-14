import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import DashboardMain from './components/dashboard/dashboardmain';
import { Provider } from 'react-redux';
import store from './store';

const Home: React.FC = () => <div>Map Page</div>;
const About: React.FC = () => <div>Dashboard Page</div>;
const Services: React.FC = () => <div>Table Page</div>;

const App: React.FC = () => {
  return (
    <Provider store={store}>
   <Router>
      <div className="App">
        <Navbar />
        <DashboardMain/>
        <Routes>
          <Route path="/map" element={<Home />} />
          <Route path="/dashbaord" element={<About />} />
          <Route path="/" element={<Services />} />
        </Routes>
      </div>
    </Router>
    </Provider>
 
  );
};

export default App;
