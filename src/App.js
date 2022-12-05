import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";  
import Footer from "./components/Footer";
import {
  BrowserRouter as Router, 
  Route,
  Routes, 
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import OfferWorkers from "./pages/offerWorkers";
import OfferJobs from "./pages/offerJobs";
import SearchJobs from "./pages/searchJobs";
import SearchWorkers from "./pages/searchWorkers";
import Account from "./pages/Account";

function App() {
  return <div className="h-screen bg-slate-700 relative">
      <Router>
          <Navbar /> 
          <Routes>
            <Route path="/" element={<><Homepage /></>}/>
            <Route path="/offer-workers" element={<><OfferWorkers /></>}/>
            <Route path="/offer-jobs" element={<><OfferJobs /></>}/>
            <Route path="/search-jobs" element={<><SearchJobs /></>}/>
            <Route path="/search-workers" element={<><SearchWorkers /></>}/>
            <Route path="/account" element={<><Account /></>}/>
          </Routes>   
      </Router>
      <Footer />
  </div>;
}

export default App;
