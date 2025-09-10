import React from 'react';
import { Routes, Route} from 'react-router-dom';

// import หน้า Home
import HomeIndex from '../components/pages/home/Index.jsx'; // 👈 ต้องมีไฟล์ resources/js/pages/HomeIndex.jsx
import About from '../components/pages/about/about.jsx'; // 👈 ต้องมีไฟล์ resources/js/pages/About.js  x


function Index() {
  return (
    <Routes>
        <Route path='/' element={<HomeIndex />} />
        <Route path='/about' element={<About />} />
    </Routes>
  );
}

export default Index;

