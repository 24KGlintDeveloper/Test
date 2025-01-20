'use client';

import BreadPage from './pages/BreadPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function RecipeDetail() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BreadPage />} />
        <Route path="/blog" element={<BreadPage />} />
        <Route path="/shop" element={<BreadPage />} />
        <Route path="/receips" element={<BreadPage />} />
        <Route path="/learn" element={<BreadPage />} />
        <Route path="/about" element={<BreadPage />} />
        <Route path="*" element={<BreadPage />} />
      </Routes>
  </BrowserRouter>
  );
}
