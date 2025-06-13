import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<h1 className="text-3xl font-bold text-gray-800">Welcome to Coffee & Carwash</h1>} />
          <Route path="/services" element={<h1 className="text-3xl font-bold text-gray-800">Our Services</h1>} />
          <Route path="/bookings" element={<BookingForm />} />
          <Route path="/contact" element={<h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
