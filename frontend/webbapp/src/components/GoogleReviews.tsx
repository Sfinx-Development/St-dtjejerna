// GoogleReviews.tsx

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
    user: "Alexander F",
    rating: 5,
    text: "",
  },
  {
    user: "Sandra Nilsson",
    rating: 5,
    text: "Supernöjd! Så trevliga tjejer! Hade ett skinande rent hem",
  },
  {
    user: "Lina Ö",
    rating: 5,
    text: "",
  },
  {
    user: "Viveka J",
    rating: 5,
    text: "",
  },
];

const GoogleReviews: React.FC = () => {
  return (
    <div className="reviews-container">
      <div className="reviews-scroll">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {review.user}
            </Typography>
            <div className="rating">
              {Array(review.rating)
                .fill(null)
                .map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
            </div>
            <Typography variant="body1">{review.text || ""}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleReviews;
