import {  Container } from '@chakra-ui/react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Import Routes and Route
import Header from './components/component/Header';
import UserPage from './pages/UserPage';  // Ensure you have these components
import PostPage from './pages/PostPage';  // Ensure you have these components

function App() {
  return (
   
      <Container maxW={"620px"} maxH={"20px"}>
        <Header />
        <Routes>
          <Route path="/:username" element={<UserPage />} />
          <Route path="/:username/post/:pid" element={<PostPage />} />  {/* Fixed typo: 'usernsme' to 'username' */}
        </Routes>
      </Container>
   
  );
}

export default App;
