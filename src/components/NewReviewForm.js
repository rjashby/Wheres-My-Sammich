import React from "react"
import Axios from 'axios';
// import { useFirestore } from 'react-redux-firebase';

export default function NewReviewForm() {

  // const firestore = useFirestore();

  // const [formData, setFormData] = React.useState(
  //     {
  //       title: "", 
  //       sandwich: "", 
  //       location: "", 
  //       comments: "",
  //       stars: "",
  //       // user: ,
  //       // photo: ,  
  //     }
  // ) 

  const [title, setTitle] = React.useState("");
  const [sandwich, setSandwich] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [stars, setStars] = React.useState("");
  const [comments, setComments] = React.useState("");
  const [image, setImage] = React.useState("");

  const [sandwichList, setSandwichList] = React.useState([]);

  const addSandwich = () => {
    console.log(title);
    Axios.post('http://localhost:3001/create', {
      title: title, 
      sandwich: sandwich, 
      location: location, 
      stars: stars, 
      comments: comments,
      image: image
    }).then(() => {
      setSandwichList([...sandwichList, 
        {
        title: title, 
        sandwich: sandwich, 
        location: location, 
        stars: stars, 
        comments: comments,
        image: image
        }, 
      ]);
    })
  };

  // const getSandwiches = () => {
  //   Axios.get('http://localhost:3001/sandwiches').then((response) => {
  //     setSandwichList(response.data);
  //   });
  // }

  // const deleteSandwich = (id) => {
  //   Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
  //     setSandwichList(
  //       sandwichList.filter((val) => {
  //         return val.id !== id;
  //       })
  //     );
  //   });
  // };

  // function handleChange(event) {
  //   const {name, value} = event.target
  //   setFormData(prevFormData => {
  //     return {
  //       ...prevFormData,
  //       [name]: value
  //     }
  //   })
  // }


  // function addReview(event) {
  //   event.preventDefault();
  //   return firestore.collection('sandwiches').add(
  //     {
  //       title: event.target.title.value,
  //       sandwich: event.target.sandwich.value,
  //       location: event.target.location.value, 
  //       stars: event.target.stars.value,
  //       comments: event.target.comments.value
  //     }
  //   );
  // }
  
  // console.log(formData);
  return (
    <React.Fragment>
      <div className="flex justify-center">
        <div className="border-2 border-solid border-black max-w-sm rounded overflow-hidden shadow-lg mb-2 mt-4">
          <h1 className="text-center text-xl">Leave a Review</h1>
          <form className="bg-white shadow-sm rounded px-8 pt-6 pb-8">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2" 
            type="text"
            placeholder="Review Title"
            onChange={(event) => {
              setTitle(event.target.value)
            }}
            // name="title"
            // value={formData.title} 
            />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
            type="text"
            placeholder="Sandwich"
            onChange={(event) => {
              setSandwich(event.target.value)
            }}
            // name="sandwich"
            // value={formData.sandwich}
            />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
            type="text"
            placeholder="Location"
            onChange={(event) => {
              setLocation(event.target.value)
            }}
            // name="location"
            // value={formData.location}
            />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
            type="text"
            placeholder="How Many Stars out of 5?"
            onChange={(event) => {
              setStars(event.target.value)
            }}
            // name="stars"
            // value={formData.stars}
            />
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
                placeholder="Comments"
                onChange={(event) => {
                  setComments(event.target.value)
                }}
                // name="comments"
                // value={formData.comments}
            />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
            type="text"
            placeholder="Insert Image URL"
            onChange={(event) => {
              setImage(event.target.value)
            }}
            // name="stars"
            // value={formData.stars}
            />
            <div className="flex justify-center">
              <button className="bg-yellow-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full" onClick={addSandwich}>Submit Review</button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}
