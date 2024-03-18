/* eslint-disable react/prop-types */
// Testimonial.js

import "./Testimonial.scss";

const Testimonial = ({ name, description, image }) => {
  return (
    <div className="testimonial">
      <div className="testimonial__image-container">
        <img
          src={image}
          alt="Imagen de muestra"
          className="testimonial__image"
        />
      </div>
      <div className="testimonial__content">
        <h3 className="testimonial__name">{name}</h3>
        <p className="testimonial__description">{description}</p>
      </div>
    </div>
  );
};

export default Testimonial;
