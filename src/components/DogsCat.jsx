import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { dogsCategory } from "../hooks/Data";

export default function DogsCat() {
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
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-5xl text-center mb-5">Dogs Category</h2>
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
        {dogsCategory.map((event) => (
          <Link to={`/dogs/${event.id}`} key={event.id}>
            <div className="bg-gray-200 p-3 m-1 rounded-lg hover:bg-gray-300 text-slate-500 shadow-lg">
              <h3 className="text-2xl text-center">{event.name}</h3>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}
