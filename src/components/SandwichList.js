// import React from "react";
// import Sandwich from "./Sandwich";
// import { useSelector } from 'react-redux';
// import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

// export default function SandwichList(){
  
//   useFirestoreConnect([
//     { collection: 'sandwiches' }
//   ]);

//   const sandwiches = useSelector(state => state.firestore.ordered.sandwiches);

//   if(isLoaded(sandwiches)) {
//     return (
//       <React.Fragment>
//         <div className="grid grid-cols-5">
//           {sandwiches.map((sandwich) => {
//             return <Sandwich 
//             title={sandwich.title}
//             sandwich={sandwich.sandwich}
//             location={sandwich.location}
//             stars={sandwich.stars}
//             comments={sandwich.comments}
//             key={sandwich.id}/>
//         })}
//         </div>
//       </React.Fragment>
//     );
//   } else {
//     return (
//       <React.Fragment>
//         <h1 className="text-center">Loading...</h1>
//       </React.Fragment>
//     )
//   }
// }