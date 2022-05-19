import React from "react"
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
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

  let navigate = useNavigate();

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

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/')
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
      <div className="flex justify-center formPage">
        <div className="border-2 border-solid border-black max-w-sm rounded overflow-hidden shadow-lg mb-2 mt-4">
          <h1 className="text-center text-xl bg-yellow-500">Leave a Review</h1>
          <form className=" bg-gray-400 shadow-sm rounded px-8 pt-6 pb-8" onSubmit={handleSubmit}>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2" 
            type="text"
            placeholder="Review Title"
            onChange={(event) => {
              setTitle(event.target.value)
            }}
            // name="title"
            // value={formData.title} 
            required />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
            type="text"
            placeholder="Sandwich"
            onChange={(event) => {
              setSandwich(event.target.value)
            }}
            // name="sandwich"
            // value={formData.sandwich}
            required />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
            type="text"
            placeholder="Location"
            onChange={(event) => {
              setLocation(event.target.value)
            }}
            // name="location"
            // value={formData.location}
            required />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
            type="text"
            placeholder="How Many Stars out of 5?"
            onChange={(event) => {
              setStars(event.target.value)
            }}
            // name="stars"
            // value={formData.stars}
            required />
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
                placeholder="Comments"
                onChange={(event) => {
                  setComments(event.target.value)
                }}
                // name="comments"
                // value={formData.comments}
            required />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
            type="text"
            placeholder="Insert Image URL"
            onChange={(event) => {
              setImage(event.target.value)
            }}
            // name="stars"
            // value={formData.stars}
            required />
            <div className="flex justify-center">
              <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded border-2 border-solid border-black" onClick={addSandwich}>Submit Review</button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}
