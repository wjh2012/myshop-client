import './App.css';
import React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/content/Home';
import MemberTable from './components/content/MemberTable';
import Box from '@mui/material/Box';

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Box sx={{ mx: 30 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<MemberTable />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
