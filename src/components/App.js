import React from "react"
import Navbar from "./Navbar"
import Home from "./Home"
import Signin from "./SignIn";
import NewReviewForm from "./NewReviewForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/review" element={<NewReviewForm />} />
          </Routes>
        </Router>
      </div>
  )
}