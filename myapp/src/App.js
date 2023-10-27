import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './AdminPage';
import UserDetail from './UserDetail';
import socialfeeds from './images/socialfeeds.jpg';

const users = [
  {
    id: 1,
    name: 'User 1',
    role: 'Web Developer',
    image: socialfeeds,
    projects: [
      { id: 1, title: 'Project 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: 2, title: 'Project 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { id: 3, title: 'Project 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: 4, title: 'Project 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    ],
    services: [
      { id: 1, title: 'Service 1', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
      { id: 2, title: 'Service 2', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' },
      { id: 3, title: 'Service 1', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
      { id: 4, title: 'Service 2', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' },
    ],
    testimonials: [
      { id: 1, name: 'John Doe', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: 2, name: 'Jane Smith', comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
      { id: 3, name: 'John Doe', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: 4, name: 'Jane Smith', comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    ],
  },
  {
    id: 2,
    name: 'User 2',
    role: 'UI/UX Designer',
    image: socialfeeds,
    projects: [
      { id: 1, title: 'Project 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: 2, title: 'Project 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { id: 3, title: 'Project 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: 4, title: 'Project 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      
    ],
    services: [
      { id: 1, title: 'Service 1', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
      { id: 2, title: 'Service 2', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' },
      { id: 3, title: 'Service 1', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
      { id: 4, title: 'Service 2', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' },
    ],
    testimonials: [
      { id: 1, name: 'John Doe', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: 2, name: 'Jane Smith', comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
      { id: 3, name: 'John Doe', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: 4, name: 'Jane Smith', comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    ],
  },

  {
    id: 3,
    name: 'User 3',
    role: 'Tester',
    image: socialfeeds,
    projects: [
      { id: 1, title: 'Project 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: 2, title: 'Project 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { id: 3, title: 'Project 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: 4, title: 'Project 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    ],
    services: [
      { id: 1, title: 'Service 1', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
      { id: 2, title: 'Service 2', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' },
      { id: 3, title: 'Service 1', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
      { id: 4, title: 'Service 2', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' },
    ],
    testimonials: [
      { id: 1, name: 'John Doe', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: 2, name: 'Jane Smith', comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
      { id: 3, name: 'John Doe', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: 4, name: 'Jane Smith', comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    ],
  },
];

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminPage users={users} />} />
        <Route path="/user-detail/:id" element={<UserDetail users={users} />} />
      </Routes>
    </Router>
  );
};

export default App;
