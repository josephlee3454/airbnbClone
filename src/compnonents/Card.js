import React from "react"
import '../style.css';
/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card(props) {
    return (
       
        <div className="card-group">
            
        <div className="card">
            <img src={props.img} alt="swimmer"   className='card--image'/>
            <div className="card-stats">
                <img src="../star.png" alt="star"  className='card--star'/>
                <span>{props.stars}</span>
                <span className="gray">({props.reviewCount}) * </span>
                <span className="gray">{props.country}</span>
            </div>
            <h2>{props.description}</h2>
            <p><strong>From {props.price}</strong> / person</p>
        </div>
        </div>
    
    )
}


