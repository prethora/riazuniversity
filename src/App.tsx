import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

import HomePage from './pages/HomePage'
import PhilosophyPage from './pages/PhilosophyPage'
import StoneSoupPage from './pages/StoneSoupPage'
import BookPage from './pages/BookPage'
import MorningRitualPage from './pages/MorningRitualPage'
import WanderingTablePage from './pages/WanderingTablePage'
import HowILearnedEnglishPage from './pages/HowILearnedEnglishPage'

export default function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="philosophy" element={<PhilosophyPage />} />
        <Route path="stone-soup" element={<StoneSoupPage />} />
        <Route path="stone-soup/book" element={<BookPage />} />
        <Route path="morning-ritual" element={<MorningRitualPage />} />
        <Route path="wandering-table" element={<WanderingTablePage />} />
        <Route path="how-i-learned-english" element={<HowILearnedEnglishPage />} />

        <Route path="ko" element={<HomePage />} />
        <Route path="ko/philosophy" element={<PhilosophyPage />} />
        <Route path="ko/stone-soup" element={<StoneSoupPage />} />
        <Route path="ko/stone-soup/book" element={<BookPage />} />
        <Route path="ko/morning-ritual" element={<MorningRitualPage />} />
        <Route path="ko/wandering-table" element={<WanderingTablePage />} />
        <Route path="ko/how-i-learned-english" element={<HowILearnedEnglishPage />} />
      </Route>
    </Routes>
    </>
  )
}
