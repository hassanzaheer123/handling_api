import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaStar, FaRegStar } from "react-icons/fa"; // Import React Icons
import { FaRegStarHalfStroke } from "react-icons/fa6";

const SingleProduct = ({
  thumbnail,
  title,
  description,
  category,
  price,
  discountPercentage,
  rating,
  stock,
}) => {
  const [showDescription, setShowDescription] = useState(false); // State to toggle description

  // Function to toggle the description
  const handleToggleDescription = () => {
    setShowDescription((prev) => !prev);
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Full stars (integer part)
    const halfStar = rating % 1 >= 0.5 ? 1 : 0; // Half star if fractional part >= 0.5
    const emptyStars = 5 - fullStars - halfStar; // Empty stars

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} />
        ))}
        {halfStar === 1 && <FaRegStarHalfStroke />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} />
        ))}
      </>
    );
  };

  return (
    <div className="col-lg-2 p-2 m-2 border rounded-2 text-center">
      <img
        src={thumbnail}
        alt={title}
        className="card-img-top"
        style={{ height: "150px", objectFit: "cover" }}
      />
      <h6 className="card-title mt-3">{title}</h6>
      <p className="text-muted mt-2"> <b>Category : </b> {category}</p>
      <p className=""> <b>Price</b>  : <del>${price}</del> <b> {discountPercentage}</b></p>
    
      <p>Stock: {stock>5?stock:"low stock"}</p>
      
      {/* Render stars based on rating */}
      <div className="d-flex justify-content-center mt-2">
        {renderStars(rating)}
      </div>

      {showDescription && <p className="mt-3">{description}</p>}
      <button
        className="btn btn-primary btn-sm mt-2"
        onClick={handleToggleDescription}
      >
        {showDescription ? (
          <>
            <FaEyeSlash /> Hide Description
          </>
        ) : (
          <>
            <FaEye /> Show Description
          </>
        )}
      </button>
    </div>
  );
};

export default SingleProduct;
