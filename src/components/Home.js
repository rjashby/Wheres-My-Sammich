import React from "react"
import Sandwich from "./Sandwich"
import data from "../data"

export default function Home() {
  const sandwiches = data.map(item => {
    return (
      <Sandwich
          key={item.id}
          item={item}
      />
    )
  })        
  return (
    <React.Fragment>
      <section className="cards-list">
        {sandwiches}
      </section>
    </React.Fragment>
  )
}