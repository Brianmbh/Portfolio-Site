import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"

export default function Portfolio() {
    const [selected,setSelected] = useState("featured")
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
      {list.map((item) => (
        <PortfolioList 
        title={item.title} 
        active={selected === item.id} 
        setSelected = {setSelected}
        id={item.id}
        />
      ))}
        </ul>
        <div className="container">
          <div className="item">
            <img className="banking" src="/assets/React weather pic 1.png" alt=""/>
            <h3> React Weather App</h3> 
          </div>
          <div className="item">
            <img className="banking" src="/assets/Rod Wave portfolio 1 .png" alt=""/>
            <h3>Entreprenuer Site</h3>
          </div>
          <div className="item">
            <img className="banking" src="/assets/piano js.png" alt=""/>
            <h3>Piano</h3>
          </div>
          <div className="item">
            <img className="banking" src="/assets/simple clock.png" alt=""/>
            <h3>Clock</h3>
          </div>
        </div>
    </div>
  )
}
