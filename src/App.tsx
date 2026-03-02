import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegistrationGeneral } from '@/pages/RegistrationGeneral';
import { RegistrationSpecialGuest } from '@/pages/RegistrationSpecialGuest';
import { ThankYouGeneral } from '@/pages/ThankYouGeneral';
import { ThankYouSpecialGuest } from '@/pages/ThankYouSpecialGuest';
import './App.css';
import {BecaCapitalOne} from "@/pages/BecaCapitalOne.tsx";
import {ThankYouCapitalOne} from "@/pages/ThankYouCapitalOne.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Registration General - Solicitud de acceso */}
        <Route path="/" element={<RegistrationGeneral />} />
        <Route path="/gracias" element={<ThankYouGeneral />} />

        {/* Registration Special Guest - Confirmación inmediata */}
        <Route path="/special-guest" element={<RegistrationSpecialGuest />} />
        <Route path="/special-guest/gracias" element={<ThankYouSpecialGuest />} />

        <Route path="/beca-capital-one" element={<BecaCapitalOne />}/>
        <Route path="/beca-capital-one/gracias" element={<ThankYouCapitalOne />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
