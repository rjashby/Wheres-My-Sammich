import React from "react";
import firebase from "firebase/compat/app";

function Signin(){
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("Successfully Signed Up!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully Signed In!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  return (
    <React.Fragment>
      <div className="flex justify-center">
        <div className="border-2 border-solid border-black max-w-sm rounded overflow-hidden shadow-lg mb-2 mt-4">
          <h1 className="text-center text-xl mt-4">Sign Up</h1>
          <form className="bg-white shadow-sm rounded px-8 pt-6 pb-8" onSubmit={doSignUp}>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
              type='text'
              name='email'
              placeholder='Email' />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
              type='password'
              name='password'
              placeholder='Password' />
            <div className="flex justify-center">
              <button className="bg-yellow-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full mt-2" type='submit'>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="border-2 border-solid border-black max-w-sm rounded overflow-hidden shadow-lg mb-2 mt-4">
          <h1 className="text-xl text-center mt-4">Sign In</h1>
          <form className="bg-white shadow-sm rounded px-8 pt-6 pb-8" onSubmit={doSignIn}>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
              type='text'
              name='signinEmail'
              placeholder='Email' />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
              type='password'
              name='signinPassword'
              placeholder='Password' />
            <div className="flex justify-center">
              <button className="bg-yellow-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full mt-2" type='submit'>Sign In</button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="border-2 border-solid border-black max-w-sm rounded overflow-hidden shadow-lg mb-2 mt-4 px-4 py-4">
          <h1 className="text-center text-xl mb-4">Sign Out</h1>
          <div className="flex justify-center">
            <button className="bg-yellow-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full" onClick={doSignOut}>Sign Out</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Signin;