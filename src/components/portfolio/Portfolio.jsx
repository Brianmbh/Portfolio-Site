import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  emailPortfolio,
  cssPortfolio,
} from "../../data";

 
export default function Portfolio() {
    const [selected,setSelected] = useState("featured");
    const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "email",
      title: "HTML Emails",
    },
    {
      id: "css",
      title: "CSS Animations",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
         break;
         case "email":
        setData(emailPortfolio);
        break;
         case "css":
        setData(cssPortfolio);
        break;
      }
    }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
      
      <ul>
      {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
        </ul>
        
        <div className="container">
        {data.map((d) => (
           <a target="blank" href={d.link}>
          <div className="item">
           
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>  
          </div>
          </a>
        ))}
      </div>
        </div>
  );
}
