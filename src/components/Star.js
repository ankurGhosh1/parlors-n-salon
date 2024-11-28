import { FaStar, FaRegStar } from "react-icons/fa";

export default function RatingStars({ rating, maxRating = 5 }) {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: maxRating }).map((_, index) => (
        <span key={index}>
          {index < rating ? (
            <FaStar className="text-yellow-500" />
          ) : (
            <FaRegStar className="text-gray-400" />
          )}
        </span>
      ))}
    </div>
  );
}
