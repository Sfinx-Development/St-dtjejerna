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
      {/* <Typography
        variant={"h4"}
        gutterBottom
        sx={{
          textAlign: "center",
          color: "#d29bbf",
          position: "relative",
          marginBottom: "40px",
        }}
      >
        Recensioner
        <Box
          sx={{
            position: "absolute",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80px",
            height: "2px",
            backgroundColor: "#c490ac",
            borderRadius: "5px",
            opacity: 0.7,
          }}
        />
      </Typography> */}
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
