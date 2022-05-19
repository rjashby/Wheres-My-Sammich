import React from "react"

export default function Sandwich(props) {  
    return (
        <div className="card">
            <h1>Review Title: {props.item.title}</h1>
            <h1>Sandwich Name: {props.item.sandwich}</h1>
            <h1>Location: {props.item.location}</h1>
            <h1>Star Rating: {props.item.stars}</h1>
            <h1>Comments: {props.item.comments}</h1>
            <img src={props.item.image} alt="sandwich photo"/>
        </div>
    )
}