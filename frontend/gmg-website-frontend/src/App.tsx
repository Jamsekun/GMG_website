import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 className="p-4">Home Page</h1>} />
        <Route path="/services" element={<h1 className="p-4">Services Page</h1>} />
        <Route path="/bookings" element={<BookingForm />} />
        <Route path="/contact" element={<h1 className="p-4">Contact Page</h1>} />
      </Routes>
    </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="bg-blue-500 text-white p-4">Hello, Tailwind!</div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more yo wadup
      </p>
    </>
  )
}

export default App
