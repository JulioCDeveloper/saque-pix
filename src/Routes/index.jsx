import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/Home';
import SaquePage from '../Pages/Saque';

function RoutesPages() {
    return (
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/saque-seu-pix" element={<SaquePage />} />
        </Routes>
    )
}

export default RoutesPages;