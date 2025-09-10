import React from 'react';
import { Routes, Route} from 'react-router-dom';

// import หน้า Home
import HomeIndex from '../components/pages/home/Index.jsx'; // 👈 ต้องมีไฟล์ resources/js/pages/HomeIndex.jsx


function Index() {
  return (
    <Routes>
        <Route path='/' element={<HomeIndex />} />
    </Routes>
  );
}

export default Index;

