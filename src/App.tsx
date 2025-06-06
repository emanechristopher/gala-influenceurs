import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramPage from './pages/ProgramPage';
import GuestsPage from './pages/GuestsPage';
import TicketsPage from './pages/TicketsPage';
import PartnersPage from './pages/PartnersPage';
import AccreditationForm from './pages/forms/AccreditationForm';
import ParticipationForm from './pages/forms/ParticipationForm';
import PartnershipForm from './pages/forms/PartnershipForm';
import ContactPage from './pages/ContactPage';
import ThankYouPage from './pages/ThankYouPage';
import ThankYouSponsor from './pages/ThankYouSponsor';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="a-propos" element={<AboutPage />} />
        <Route path="programme" element={<ProgramPage />} />
        <Route path="invites" element={<GuestsPage />} />
        <Route path="billeterie" element={<TicketsPage />} />
        <Route path="partenaires" element={<PartnersPage />} />
        <Route path="accreditation" element={<AccreditationForm />} />
        <Route path="participation" element={<ParticipationForm />} />
        <Route path="partenariat" element={<PartnershipForm />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="merci" element={<ThankYouPage />} />
        <Route path="merci-sponsor" element={<ThankYouSponsor />} />
      </Route>
    </Routes>
  );
}

export default App;