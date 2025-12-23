import { useState } from "react";

import StarDivider from "../StarDivider/StarDivider";

import img1 from "../../assets/cake.png";
import img2 from "../../assets/cake.png";
import img3 from "../../assets/circus.png";
import img4 from "../../assets/cabin.png";
import img5 from "../../assets/cake.png";
import img6 from "../../assets/circus.png";
import StarDividerdark from "../StarDividerdark/StarDividerdark";

export default function Portfolio() {
  const images = [img1, img2, img3, img4, img5, img6];
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <section className="portfolio-section text-center">
        <div className="container">
          <h2 className="fw-bold mb-3 text-uppercase">portfolio component</h2>
           <StarDividerdark/>

          <div className="row g-4 mt-4">
            {images.map((img, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="portfolio-item"
                  onClick={() => setSelectedImg(img)}
                >
                  <img src={img} className="img-fluid rounded" />
                  <div className="overlay">
                    <span>+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   
      {selectedImg && (
        <div className="custom-modal" onClick={() => setSelectedImg(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
           
            <img src={selectedImg} />
          </div>
        </div>
      )}
    </>
  );
}
