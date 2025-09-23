// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Navbar_modern from "./components/Navbar/Navbar_modern";
// import BookingForm from "./components/BookingForm";
// import Login from "./components/Login";
// import Home from "./components/Home";
// import "./App.css";
// import CarWash from "./components/CarWash";
// import HomeArticle from "./components/HomeArticle";

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar_modern bgColor={"bg-[rgba(0,0,0,0.5)]"} position={"fixed z-20"} />
//       <main className="">
//         <Routes>
//           <Route
//             path="/"
//             element={<div><Home/> <HomeArticle/></div>

              
//             }
//           />
//           <Route
//             path="/carwash"
//             element={<CarWash></CarWash>}
//           />
//           <Route path="/bookings" element={<BookingForm />} />
//           <Route
//             path="/contact"
//             element={
//               <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
//                 Contact Us
//               </h1>
//             }
//           />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }

import { Routes, Route } from "react-router-dom";
import Navbar_modern from "./components/Navbar/Navbar_modern";
import Home from "./components/Home";
import Product from "./pages/public/Product"; // Make sure this path is correct
import AboutUs from "./components/AboutUs";
import FAQs from "./components/FAQs";
import "./App.css";
import HomeArticle from "./components/HomeArticle";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar_modern bgColor={"bg-[rgba(125,75,11,0.5)]"} position={"fixed z-20"} />
      <main className="">
        <Routes>
          <Route path="/" element={<div><Home /> <HomeArticle/></div>} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faqs" element={<FAQs />} />

        </Routes>
        <Footer/>
      </main>
    </div>
  );
}


// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Navbar_modern/>
//       <main className="pt-20 px-4">
//         <h1 className="text-2xl font-bold">Welcome to the Design Preview</h1>
//         <p className="mt-4">This is a test paragraph to push the layout down.</p>
//           <div className="h-96 bg-white mt-6 shadow-md rounded-md p-4">
//             Simulated content block
//           </div>
//       </main>
//     </div>
//   );
// }

export default App;