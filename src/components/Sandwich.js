import React from "react"

export default function Sandwich(props) {  
    return (
        <div className="card">
            <img src={props.item.image}/>
            <h1>Review Title: {props.item.title}</h1>
            <h1>Sandwich Name: {props.item.sandwich}</h1>
            <h1>Location: {props.item.location}</h1>
            <h1>Star Rating: {props.item.stars}</h1>
            <h1>Comments: {props.item.comments}</h1>
        </div>
    )
}