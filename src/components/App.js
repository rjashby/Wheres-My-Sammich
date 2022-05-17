import React, { Component } from 'react';
import { auth, handleUserProfile } from '../firebase/firebase';
import Navbar from "./Navbar"
import Home from "./Home"
import Signin from "./SignIn";
import NewReviewForm from "./NewReviewForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {

  authListener = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snap => {
          setCurrentUser({
            id : snap.id,
            ...snap.data()
          })
        })
      }
      setCurrentUser(userAuth);
    }); 
  }

  componentWillUnmount() {
    this.authListener();
  }

render() {
    const { currentUser } = this.props; 

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
}




// import React from "react"
// import Navbar from "./Navbar"
// import Home from "./Home"
// import Signin from "./SignIn";
// import NewReviewForm from "./NewReviewForm";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// export default function App() {
//   return (
//       <div>
//         <Router>
//           <Navbar />
//           <Routes>
//             <Route path="/signin" element={<Signin />} />
//             <Route exact path="/" element={<Home />} />
//             <Route exact path="/review" element={<NewReviewForm />} />
//           </Routes>
//         </Router>
//       </div>
//   )
// }

