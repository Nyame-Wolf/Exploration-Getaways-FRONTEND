import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/navigation';
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';
import DetailsPage from './pages/DetailsPage';
import PackagesPage from './pages/PackagesPage';
import PromotionsPage from './pages/PromotionsPage';
import ReservationsPage from './pages/ReservationsPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<PackagesPage />} />
          <Route path="/package/details" element={<DetailsPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/promotions" element={<PromotionsPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
