import React from "react"
import NavBar from './compnonents/NavBar'
import Hero from './compnonents/Hero'
import Card from "./compnonents/Card";
import './style.css';

function App() {
  return (
    <div >
      <NavBar/>
      <Hero/>
      <div className="card-group">
      <Card 
        img='../swimmer-Kaite.png'
        description='Life lessons with Kaitie Zaferes'
        reviewCount='6'
        country='USA'
        stars= '5'
        price='$136'
      />
      <Card 
        img='../wedding.png'
        description='Learn wedding photography'
        reviewCount='30'
        country='USA'
        stars= '5'
        price='$125'
      />
        <Card 
        img='../mtb.png'
        description='Group Moutain Biking'
        reviewCount='2'
        country='USA'
        stars= '4.8'
        price='$50'
      />
      </div>
    </div>

  );
}

export default App;
