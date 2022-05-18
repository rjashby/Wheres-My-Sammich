import React from "react"
import { useFirestore } from 'react-redux-firebase';

export default function NewReviewForm() {

  const firestore = useFirestore();

  const [formData, setFormData] = React.useState(
      {
        title: "", 
        sandwich: "", 
        location: "", 
        comments: "",
        stars: "",
        // user: ,
        // photo: ,  
      }
  ) 

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }


  function addReview(event) {
    event.preventDefault();
    return firestore.collection('sandwiches').add(
      {
        title: event.target.title.value,
        sandwich: event.target.sandwich.value,
        location: event.target.location.value, 
        stars: event.target.stars.value,
        comments: event.target.comments.value
      }
    );
  }

  return (
    <React.Fragment>
      <div className="flex justify-center">
        <div className="border-2 border-solid border-black max-w-sm rounded overflow-hidden shadow-lg mb-2 mt-4">
          <h1 className="text-center text-xl">Leave a Review</h1>
          <form className="bg-white shadow-sm rounded px-8 pt-6 pb-8" onSubmit={addReview}>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2" 
            type="text"
            placeholder="Review Title"
            onChange={handleChange}
            name="title"
            value={formData.title} 
            />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
            type="text"
            placeholder="Sandwich"
            onChange={handleChange}
            name="sandwich"
            value={formData.sandwich}
            />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
            type="text"
            placeholder="Location"
            onChange={handleChange}
            name="location"
            value={formData.location}
            />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
            type="text"
            placeholder="How Many Stars out of 5?"
            onChange={handleChange}
            name="stars"
            value={formData.stars}
            />
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
            <div className="flex justify-center">
              <button className="bg-yellow-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full">Submit Review</button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}
