import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from './reducers/index';
// import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
// import { createFirestoreInstance } from 'redux-firestore';
// import firebase from "./firebase/firebase";
// import 'firebase/compat/auth';

// const store = createStore(rootReducer);

// const rrfProps = {
//   firebase,
//   config: {
//     userProfile: "users",
//     useFirestoreForProfile: true
//   },
//   dispatch: store.dispatch,
//   createFirestoreInstance
// }

ReactDOM.render(
  <React.Fragment>
    {/* <ReactReduxFirebaseProvider {...rrfProps}> */}
      <App />
    {/* </ReactReduxFirebaseProvider> */}
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
