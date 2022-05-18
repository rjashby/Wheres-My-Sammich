import React, { useState } from 'react';
import Axios from 'axios';

export default function Test() {
  const [title, setTitle] = useState("");
  const [sandwich, setSandwich] = useState("");
  const [location, setLocation] = useState("");
  const [stars, setStars] = useState("");
  const [comments, setComments] = useState("");

  const [sandwichList, setSandwichList] = useState([]);

  const addSandwich = () => {
    console.log(title);
    Axios.post('http://localhost:3001/create', {
      title: title, 
      sandwich: sandwich, 
      location: location, 
      stars: stars, 
      comments: comments
    }).then(() => {
      setSandwichList([...sandwichList, 
        {
        title: title, 
        sandwich: sandwich, 
        location: location, 
        stars: stars, 
        comments: comments
        }, 
      ]);
    })
  };

  const getSandwiches = () => {
    Axios.get('http://localhost:3001/sandwiches').then((response) => {
      setSandwichList(response.data);
    });
  }

  const deleteSandwich = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setSandwichList(
        sandwichList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  return (
    <div className="Test">
      <div className='information'>
        <label>Title: </label>
        <input type="text" onChange={(event) => {
          setTitle(event.target.value)
        }}
        />
        <label>Sandwich: </label>
        <input type="text" onChange={(event) => {
          setSandwich(event.target.value)
        }}
        />
        <label>Location: </label>
        <input type="text" onChange={(event) => {
          setLocation(event.target.value)
        }}
        />
        <label>Stars: </label>
        <input type="text" onChange={(event) => {
          setStars(event.target.value)
        }}
        />
        <label>Comments: </label>
        <input type="text" onChange={(event) => {
          setComments(event.target.value)
        }}
        />
        <button onClick={addSandwich}>Add New Sandwich</button>
      </div>
      <div className='sandwiches'>
        <button onClick={getSandwiches}>Show All Sandwiches</button>
        {sandwichList.map((val, key) => {
          return (
            <div className="sandwich">
              <div>
                <h3>Title: {val.title}</h3>
                <h3>Sandwich: {val.sandwich}</h3>
                <h3>Location: {val.location}</h3>
                <h3>Stars: {val.stars}</h3>
                <h3>Comments: {val.comments}</h3>
              </div>
              <div>
                <button onClick={() => 
                  {
                    deleteSandwich(val.id);
                  }}
                  >
                  Delete Sandwich
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}