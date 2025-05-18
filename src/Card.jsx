import React from "react"
import pin from "../public/assets/Earth.png"

export default function Card(props) {

    let tripDate;

    if(props.item.dates.end)
        {
            tripDate = props.item.dates.start + " - " + props.item.dates.end
        }
        else if(!props.item.dates.end)
        {
            tripDate = props.item.dates.start
        }

    return (
        <>
        <div className="journalEntry">
           <img id="stockPhoto"src={props.item.img}/>
            <section className="info">
            <h2> <img id="pin" src={pin}/> {props.item.location} <a className="map--link" href={props.item.link}>View on Google Maps</a> </h2> 
            <h1>{props.item.title}</h1>
            <h3>{tripDate}</h3>
            <p>{props.item.description}</p>
            </section>
        </div>
        <hr/>
        </>
    )
}