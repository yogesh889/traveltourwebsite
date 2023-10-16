import React, { useEffect } from "react";
import "./main.css";
import "./Main.scss";
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Rio de Janeiro",
    location: "Brazil",
    grade: "CULTURAL & BEACH",
    fees: "$950",
    description:
      "Explore the vibrant culture of Rio de Janeiro, enjoy samba music, and relax on the famous Copacabana Beach.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Barcelona",
    location: "Spain",
    grade: "CITY & ARCHITECTURE",
    fees: "$1100",
    description:
      "Visit the architectural wonders of Antoni Gaudí, stroll down La Rambla, and savor delicious tapas in Barcelona.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Krabi",
    location: "Thailand",
    grade: "BEACH PARADISE",
    fees: "$800",
    description:
      "Relax on the beautiful beaches of Krabi, go island hopping, and enjoy the stunning limestone cliffs.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Cairo",
    location: "Egypt",
    grade: "HISTORICAL JOURNEY",
    fees: "$850",
    description:
      "Witness the grandeur of the Pyramids, explore ancient tombs, and sail the Nile River in the heart of Egypt.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Sydney",
    location: "Australia",
    grade: "URBAN ADVENTURE",
    fees: "$1200",
    description:
      "Experience the iconic Sydney Opera House, Sydney Harbour Bridge, and stunning beaches in this Aussie metropolis.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Banff National Park",
    location: "Canada",
    grade: "NATURE ESCAPE",
    fees: "$1000",
    description:
      "Discover the breathtaking landscapes of Banff National Park with its majestic mountains, turquoise lakes, and wildlife.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Dubai",
    location: "United Arab Emirates",
    grade: "LUXURY RETREAT",
    fees: "$1500",
    description:
      "Indulge in opulent living, shop in extravagant malls, and witness futuristic architecture in the heart of the desert.",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Marrakech",
    location: "Morocco",
    grade: "CULTURAL EXPLORATION",
    fees: "$900",
    description:
      "Immerse yourself in the vibrant souks, stunning palaces, and delicious Moroccan cuisine in Marrakech.",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali",
    location: "Indonesia",
    grade: "ISLAND PARADISE",
    fees: "$1100",
    description:
      "Relax in the tropical paradise of Bali, explore lush rice terraces, and experience Balinese culture.",
  },
];

const Main = () => {
  // scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>
      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="distTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
