import { Typography } from "@mui/material";
import React from "react";
import "./GoogleReviews.css";

interface Review {
  user: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    user: "Alexander F",
    rating: 5,
    text: "",
  },
  {
    user: "Viveka J",
    rating: 5,
    text: "",
  },
  {
    user: "Lina Ö",
    rating: 5,
    text: "",
  },
  {
    user: "Dzeki M",
    rating: 5,
    text: "De gjorde ett mycket bra jobb, blev mer än nöjd",
  },
  {
    user: "Catrin A",
    rating: 4,
    text: "Tycker att städtjejerna gör ett kanonjobb så nöjd",
  },
  {
    user: "Sandra Nilsson",
    rating: 5,
    text: "Supernöjd! Så trevliga tjejer! Hade ett skinande rent hem",
  },
];

const GoogleReviews: React.FC = () => {
  return (
    <div className="reviews-container">
      <Typography
        sx={{
          fontSize: 32,
          fontWeight: "bold",
          color: "white",
          letterSpacing: 2,
          textAlign: "center",
          marginBottom: 2,
        }}
      >
        Recensioner
      </Typography>
      <div className="reviews-marquee">
        <div className="reviews-track">
          {reviews.map((review, index) => (
            <div key={index} className="review">
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {review.user}
              </Typography>
              <div className="rating">
                {Array(review.rating)
                  .fill(null)
                  .map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
              </div>
              <Typography>{review.text || "Ingen text tillgänglig"}</Typography>
            </div>
          ))}
          {reviews.map((review, index) => (
            <div key={index + reviews.length} className="review">
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {review.user}
              </Typography>
              <div className="rating">
                {Array(review.rating)
                  .fill(null)
                  .map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
              </div>
              <Typography>{review.text || "Ingen text tillgänglig"}</Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoogleReviews;
