import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

function Portfolio(props) {
  const [data, setDate] = useState([]);
  const [selected, setSelected] = useState("featured");

  const list = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web app" },
    { id: "mobile", title: "Mobile app" },
    { id: "design", title: "Design" },
    { id: "content", title: "Content" },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setDate(featuredPortfolio);
        break;
      case "web":
        setDate(webPortfolio);
        break;
      case "mobile":
        setDate(mobilePortfolio);
        break;
      case "design":
        setDate(designPortfolio);
        break;
      case "content":
        setDate(contentPortfolio);
        break;

      default:
        setDate(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            active={selected === item.id}
            title={item.title}
            id={item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item" key={d.id}>
            <img src={d.img} alt="img" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
