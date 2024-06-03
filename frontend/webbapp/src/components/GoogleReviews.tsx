import React from 'react';
import './GoogleReviews.css';

interface Review {
    user: string;
    rating: number;
    text: string;
}

const reviews: Review[] = [
    {
        user: 'Alexander F',
        rating: 5,
        text: '',
    },   {
        user: 'Viveka J',
        rating: 5,
        text: '',
    },
    {
        user: 'Lina Ö',
        rating: 5,
        text: '',
    },
    {
        user: 'Dzeki M',
        rating: 5,
        text: 'De gjorde ett mycket bra jobb, blev mer än nöjd',
    },
    {
        user: 'Catrin A',
        rating: 4,
        text: 'Tycker att städtjejerna gör ett kanonjobb så nöjd',
    },
    {
        user: 'Sandra Nilsson',
        rating: 5,
        text: 'Supernöjd! Så trevliga tjejer! Hade ett skinande rent hem',
    },
];

const GoogleReviews: React.FC = () => {
    return (
        <div className="reviews-container">
            <h1>Recensioner</h1>
            <div className="reviews-marquee">
                <div className="reviews-track">
                    {reviews.map((review, index) => (
                        <div key={index} className="review">
                            <h2>{review.user}</h2>
                            <div className="rating">
                                {Array(review.rating).fill(null).map((_, i) => (
                                    <span key={i}>⭐</span>
                                ))}
                            </div>
                            <p>{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GoogleReviews;


// import React from 'react';
// import './GoogleReviews.css'


// interface Review {
//     user: string;
//     rating: number;
//     text: string;
// }

// const reviews: Review[] = [
//     {
//         user: 'John Doe',
//         rating: 5,
//         text: 'Great service and friendly staff!',
//     },
//     {
//         user: 'Jane Smith',
//         rating: 4,
//         text: 'Good experience overall, but the wait time was a bit long.',
//     },
//     {
//         user: 'Alice Johnson',
//         rating: 3,
//         text: 'Average experience, nothing special.',
//     },
// ];

// const GoogleReviews: React.FC = () => {
//     return (
//         <div className="reviews-container">
//             <h1>Google Reviews</h1>
//             <ul>
//                 {reviews.map((review, index) => (
//                     <li key={index} className="review">
//                         <h2>{review.user}</h2>
//                         <div className="rating">
//                             {Array(review.rating).fill(null).map((_, i) => (
//                                 <span key={i}>⭐</span>
//                             ))}
//                         </div>
//                         <p>{review.text}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default GoogleReviews;
