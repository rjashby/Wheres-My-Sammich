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
          <button className="bg-yellow-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full m-4" onClick={getSandwiches}>Show All Sandwiches</button>
        </div>
        <div>
        {sandwichList.map((val, key) => {
          return (
            <div className="row">
              <div className="card">
                <h3 className="shadow rounded py-2 px-3 mb-2 max-w-xs">
                  Title: {val.title}</h3>
                <h3 className="shadow rounded py-2 px-3 mb-2 max-w-xs">
                  Sandwich: {val.sandwich}</h3>
                <h3 className="shadow rounded py-2 px-3 mb-2 max-w-xs">
                  Location: {val.location}</h3>
                <h3 className="shadow rounded py-2 px-3 mb-2 max-w-xs">
                  Stars: {val.stars}</h3>
                <h3 className="shadow rounded py-2 px-3 mb-2 max-w-xs">
                  Comments: {val.comments}</h3>
                <img src={val.image} alt="sandwich" className="max-w-xs rounded"/>
              </div>
              <div>
                <button className="bg-yellow-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full m-4" onClick={() => 
                  {
                    deleteSandwich(val.id);
                  }}
                  >
                  Delete Sandwich Review
                </button>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    );
}