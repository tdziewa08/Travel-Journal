import React from "react"
import travelData from "./TravelData.js"
import Card from "./Card.jsx"
import earth from "../public/assets/Earth.png"

export default function App () {

  const travelArray = travelData.map((item) => <Card item={item}/>)

  return (
    <div>
      <header><img id="ball" src={earth}></img>my travel journal.</header>
      {travelArray}
    </div>
  )
}
