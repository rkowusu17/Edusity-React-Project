import React, { useRef } from "react";
import "./testimonials.css";
import next_btn from "../../assets/next-icon.png";
import back_btn from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  // Using useRef to get the slider element
  // and use it to slide the testimonials
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img
        src={next_btn}
        alt="Next"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_btn}
        alt="back"
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="User1-image" />
                <div>
                  <h3>Jacqueline Carter</h3>
                  <span>Software Engineer, Google</span>
                </div>
              </div>
              <p>
                Pursuing my degree here was one of the best decisions of my
                life. The supportive community, state-of-the-art facilities, and
                dedicated faculty members provided me with the foundation I
                needed to excel in my career
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="User1-image" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Amazon, USA</span>
                </div>
              </div>
              <p>
                Cool school to pursue a degree. The supportive communtiy,
                state-of-the-art facilities, and commited faculty members is
                simply the best
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="User1-image" />
                <div>
                  <h3>Harriet Daand</h3>
                  <span>Product Manager, Amazon</span>
                </div>
              </div>
              <p>
                The university's focus on innovation and collaboration prepared
                me for real-world challenges. I am grateful for the lifelong
                connections and opportunities I gained here.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="User1-image" />
                <div>
                  <h3>Reginald Miles</h3>
                  <span>Data Scientist, Microsoft</span>
                </div>
              </div>
              <p>
                This university gave me the skills and confidence to thrive in
                the tech industry. The hands-on projects and mentorship from
                experienced professors were invaluable in shaping my career.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
