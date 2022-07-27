import { useState } from "react"
import "./works.scss"

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/weather-icon-png-11074.png",
      title: "Weather App",
      desc:
      "Check the weather anywhere, with the react weather app",
      img: "./assets/React weather pic 2.png",
    },
    {
      id: "2",
      icon: "./assets/shopping-cart-icon-.png",
      title: "Ecommerce",
      desc:
      "Explore your favorite artists website and purchase their merchandise",
      img:"./assets/Rod Wave portfolio 2.png"
    },
    {
      id: "3",
      icon: "./assets/music-notes3.png",
      title: "Piano",
      desc:
      "Play your favorite tunes on the piano app",
      img:"./assets/piano yellow.png"
    },

  ];

  const handleClick = (way)=>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
    setCurrentSlide(currentSlide<data.length -1 ? currentSlide + 1 : 0 );
  };

  return (
    <div className="works" id="works">
      <div className="slider" 
      style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>

        {data.map((d) => (
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                <img src={d.icon}></img>
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
              </div>
            </div>
              <div className="right">
                <img src={d.img}/>
                </div>           
          </div>
        </div>
         ))}
      </div>   
      <img src="assets/white-arrow-transparent-png-22.png" 
      className="arrow left" alt="" 
      onClick={() => handleClick("left")}/>  
      <img src="assets/white-arrow-transparent-png-22.png" 
      className="arrow right" alt="" 
      onClick={() => handleClick("right")}/>

    </div>
  )
}
