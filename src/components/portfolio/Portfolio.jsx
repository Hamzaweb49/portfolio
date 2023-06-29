import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/portfolio1.png";
import Img2 from "../../assets/portfolio2.png";
import Img3 from "../../assets/portfolio3.png";
import Img4 from "../../assets/portfolio4.png";
import Img5 from "../../assets/portfolio5.png";
import Img6 from "../../assets/portfolio6.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: Img1,
      title: "Fashion Website",
      github: "https://github.com",
      preview: "https://github.com",
    },
    {
      id: 2,
      image: Img2,
      title: "Hospital Website",
      github: "https://github.com",
      preview: "https://github.com",
    },
    {
      id: 3,
      image: Img3,
      title: "Restuarant Website",
      github: "https://github.com",
      preview: "https://github.com",
    },
    {
      id: 4,
      image: Img4,
      title: "Tour&Travel Website",
      github: "https://github.com",
      preview: "https://github.com",
    },
    {
      id: 5,
      image: Img5,
      title: "Jobs Website",
      github: "https://github.com",
      preview: "https://github.com",
    },
    {
      id: 6,
      image: Img6,
      title: "Social Media App",
      github: "https://github.com",
      preview: "https://github.com",
    },
  ];

  return (
    <section className="services section" id="portfolio">
      <h2 className="sectionTitle">Portfolio</h2>
      <span className="sectionSubtitle">My Recent Work</span>

      <div className="portfolioContainer container grid">
        {data.map(({ id, image, title, github, preview }) => {
          return (
            <div className="portfolioContent" key={id}>
              <div className="portfolioItemImg">
                <img src={image} alt={title} />
              </div>
              <h3 className="portfolioTitle">{title}</h3>
              {/* <div className="portfolioButtons">
                <a href={github} className="portfolioButton" target="_blank">
                  Github
                </a>
                <a href={preview} className="portfolioButton" target="_blank">
                  Live Preview
                </a>
              </div> */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
