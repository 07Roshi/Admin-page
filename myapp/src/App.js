import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './Pages/AdminPage';
import UserDetail from './Pages/UserDetail';
import user1 from './images/user1.jpg';
import user2 from './images/user2.jpg';
import user3 from './images/user3.jpg';
import pro from './images/pro.jpg';
import ser from './images/ser.jpg';
import test from './images/test.jpg';

const users = [
  {
    id: 1,
    name: 'User 1',
    role: 'Web Developer',
    image: user1,
    projects: [
      { id: 1, title: 'Project 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', p: pro },
      { id: 2, title: 'Project 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', p: pro },
      { id: 3, title: 'Project 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', p: pro },
      { id: 4, title: 'Project 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', p: pro },
    ],
    services: [
      { id: 1, title: 'Service 1', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', s: ser},
      { id: 2, title: 'Service 2', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.', s: ser },
      { id: 3, title: 'Service 1', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', s: ser },
      { id: 4, title: 'Service 2', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.', s: ser },
    ],
    testimonials: [
      { id: 1, name: 'John Doe', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', t: test },
      { id: 2, name: 'Jane Smith', comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', t: test },
      { id: 3, name: 'John Doe', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', t: test },
      { id: 4, name: 'Jane Smith', comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', t: test },
    ],
  },

  {
    id: 2,
    name: 'User 2',
    role: 'UI/UX Designer',
    image: user2,
    projects: [
      { id: 1, title: 'Project 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', p: pro },
      { id: 2, title: 'Project 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', p: pro },
      { id: 3, title: 'Project 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', p: pro },
      { id: 4, title: 'Project 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', p: pro },
    ],
    services: [
      { id: 1, title: 'Service 1', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', s: ser},
      { id: 2, title: 'Service 2', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.', s: ser },
      { id: 3, title: 'Service 1', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', s: ser },
      { id: 4, title: 'Service 2', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.', s: ser },
    ],
    testimonials: [
      { id: 1, name: 'John Doe', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', t: test },
      { id: 2, name: 'Jane Smith', comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', t: test },
      { id: 3, name: 'John Doe', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', t: test },
      { id: 4, name: 'Jane Smith', comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', t: test },
    ],
  },

  {
    id: 3,
    name: 'User 3',
    role: 'Tester',
    image: user3,
    projects: [
      { id: 1, title: 'Project 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', p: pro },
      { id: 2, title: 'Project 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', p: pro },
      { id: 3, title: 'Project 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', p: pro },
      { id: 4, title: 'Project 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', p: pro },
    ],
    services: [
      { id: 1, title: 'Service 1', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', s: ser},
      { id: 2, title: 'Service 2', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.', s: ser },
      { id: 3, title: 'Service 1', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', s: ser },
      { id: 4, title: 'Service 2', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.', s: ser },
    ],
    testimonials: [
      { id: 1, name: 'John Doe', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', t: test },
      { id: 2, name: 'Jane Smith', comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', t: test },
      { id: 3, name: 'John Doe', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', t: test },
      { id: 4, name: 'Jane Smith', comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', t: test },
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
