import { BiUser } from "react-icons/bi";
import { FaMoneyBill } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { sliderDog } from "../hooks/Data";
export default function Hero() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={["desktop", "tablet", "mobile"]}
      dotListClass="custom-dot-list-style bg-transparent"
      itemClass="carousel-item-padding-40-px"
    >
      {sliderDog.map((event) => (
        <div key={event.id} className="relative">
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
            <h2 className="text-2xl text-center text-wrap font-bold">
              {event.name}
            </h2>
            <p className="text-lg text-center text-wrap">{event.description}</p>
            <div className="flex flex-col md:flex-row  justify-center items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <FaLocationDot />
                <p>{event.breed}</p>
              </div>
              <div className="flex items-center gap-2">
                <BiUser />
                <p>{event.age}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaMoneyBill />
                <p>{event.price}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
