import Carousel from "react-multi-carousel";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { reviewsData } from "../hooks/Data";

function Reviews() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-5xl text-center mb-5">Reviews</h2>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        deviceType={["desktop", "tablet", "mobile"]}
        dotListClass="custom-dot-list-style bg-transparent"
        itemClass="carousel-item-padding-40-px"
      >
        {reviewsData.map((review) => (
          <div key={review.id}>
            <div className="bg-gray-200 p-3 m-1 rounded-lg hover:bg-gray-300 text-slate-500 shadow-lg">
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full mx-auto"
              />
              <h3 className="text-2xl text-center">{review.name}</h3>
              <p className="text-center">{review.review}</p>
              <div className="flex justify-center">
                {[...Array(review.rating)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Reviews;
