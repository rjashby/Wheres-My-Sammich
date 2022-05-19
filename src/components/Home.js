import React from "react"
import Axios from 'axios';
// import Sandwich from "./Sandwich"
// import data from "../data"

export default function Home() {
  // const sandwiches = data.map(item => {
  //   return (
  //     <Sandwich
  //         key={item.id}
  //         item={item}
  //     />
  //   )
  // })        
  // return (
  //   <React.Fragment>
  //     <section className="cards-list">
  //       {sandwiches}
  //     </section>
  //   </React.Fragment>
  // )
// }

  const [sandwichList, setSandwichList] = React.useState([]);

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
      <div className='sandwiches'>
        <div>
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded m-4 border-2 border-solid border-black" onClick={getSandwiches}>Show All Sandwiches</button>
        </div>
        <div>
        {sandwichList.map((val, key) => {
        
          return (
            <div className="row">
              <div className="card rounded bg-gray-400 border-2 border-solid border-black">
                <h3 className="shadow rounded py-2 px-3 mb-2 max-w-xs border-2 border-solid border-gray-400">
                  Title: {val.title}</h3>
                <h3 className="shadow rounded py-2 px-3 mb-2 max-w-xs border-2 border-solid border-gray-400">
                  Sandwich: {val.sandwich}</h3>
                <h3 className="shadow rounded py-2 px-3 mb-2 max-w-xs border-2 border-solid border-gray-400">
                  Location: {val.location}</h3>
                <h3 className="shadow rounded py-2 px-3 mb-2 max-w-xs border-2 border-solid border-gray-400">
                  Stars: {val.stars}</h3>
                <h3 className="shadow rounded py-2 px-3 mb-2 max-w-xs border-2 border-solid border-gray-400">
                  Comments: {val.comments}</h3>
                <img src={val.image} alt="sandwich" className="max-w-xs rounded border-2 border-solid border-gray-400"/>
              </div>
              <div>
                <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded m-4 border-2 border-solid border-black" onClick={() => 
                  {
                    deleteSandwich(val.id);
                  }}
                  >
                  Delete Sandwich
                </button>
                <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded m-4 border-2 border-solid border-black" onClick={() => 
                  {
                    // deleteSandwich(val.id);
                  }}
                  >
                  Edit Sandwich
                </button>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    );
}