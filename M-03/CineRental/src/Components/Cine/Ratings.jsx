import React from "react";
import Star from "../../assets/star.svg";

const Ratings = ({ value }) => {
  const starts = Array(value).fill(Star);
  return (
    <>
      {starts.map((star, index) => (
        <img key={index} src={star} width="14" height="14" alt="" />
      ))}
    </>
  );
};

export default Ratings;
