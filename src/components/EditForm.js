import React from "react"
import Axios from 'axios';

export default function EditForm() {

  const [title, setTitle] = React.useState("");
  const [sandwich, setSandwich] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [stars, setStars] = React.useState("");
  const [comments, setComments] = React.useState("");
  const [image, setImage] = React.useState("");
  const [id, setId] = React.useState(0)

  const [sandwichList, setSandwichList] = React.useState([]);

  const updateReview = (id) => {
    Axios.put("http://localhost:3001/update", { 
      title: newTitle,
      sandwich: newSandwich,
      location: newLocation,
      stars: newStars,
      comments: newComments, id: id }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id === id
              ? {
                title: newTitle,
                sandwich: newSandwich,
                location: newLocation,
                stars: newStars,
                comments: newComments,
                id: val.id
                }
              : val;
          })
        );
      }
    );
  };

  return (
    <React.Fragment>
      <div className="flex justify-center">
        <div className="border-2 border-solid border-black max-w-sm rounded overflow-hidden shadow-lg mb-2 mt-4">
          <h1 className="text-center text-xl">Edit Your Review</h1>
          <form className="bg-white shadow-sm rounded px-8 pt-6 pb-8">
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
              <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded border-2 border-solid border-black" onClick={updateReview}>Update Review</button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}
