import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PlanYourVisit from './pages/PlanYourVisit';
import About from './pages/About';
import ChurchLife from './pages/ChurchLife';
import FamilyCareInCancer from './pages/FamilyCareInCancer';
import Sermons from './pages/Sermons';
import Privacy from './pages/Privacy';
import SayTheirName from './pages/SayTheirName';
import SonshineClub from './pages/SonshineClub';
import Salt from './pages/Salt';
import SupportMinistries from './pages/SupportMinistries';
import BoysBrigade from './pages/BoysBrigade';
import GirlsBrigade from './pages/GirlsBrigade';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="plan-your-visit" element={<PlanYourVisit />} />
          <Route path="about" element={<About />} />
          <Route path="church-life" element={<ChurchLife />} />
          <Route path="support-ministries" element={<SupportMinistries />} />
          <Route path="family-care-in-cancer" element={<FamilyCareInCancer />} />
          <Route path="sermons" element={<Sermons />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="say-their-name" element={<SayTheirName />} />
          <Route path="sonshine-club" element={<SonshineClub />} />
          <Route path="salt" element={<Salt />} />
          <Route path="boys-brigade" element={<BoysBrigade />} />
          <Route path="girls-brigade" element={<GirlsBrigade />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
