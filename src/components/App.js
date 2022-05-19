import React from "react"
import Navbar from "./Navbar"
import Home from "./Home"
import Signin from "./SignIn";
// import Test from "./Test"
import Map from "./Map"
import NewReviewForm from "./NewReviewForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyGoogleMap from "./MyGoogleMap";

export default function App() {
  return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/review" element={<NewReviewForm />} />
            <Route exact path="/map" element={<Map />} />
          </Routes>
        </Router>
      </div>
  )
}