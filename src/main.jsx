import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import Navbar from "./common/Navbar.jsx";
import SocialBar from "./common/Social.jsx";
import Footer from "./common/footer.jsx";
import Home from "./componants/Home.jsx";
import Roster from "./componants/Roster.jsx";
import Community from "./componants/Community.jsx";
import News from "./componants/News.jsx";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SocialBar />
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/roster' element={<Roster />} />
      <Route path='/community' element={<Community/>} />
      <Route path='/news' element={<News />} />
      
    </Routes>

    <Footer />
  </BrowserRouter>
);
