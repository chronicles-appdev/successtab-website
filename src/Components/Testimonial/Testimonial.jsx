import "./Testimonial.css";
import commisioner_testimonial from "/commisioner_testimonial.mp4";
import parent_testimonial from "/parent_testimonial.mp4";
import student_testimonial from "/student_testimonial.mp4";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Testimonial = () => {
  return (
    <Splide
      options={{
        type: "loop",
        padding: "5rem",
        perPage: 1,
        pagination: true,
        autoplay: true,
        arrows: true,
        drag: "free",
        rewind: true,
      }}
      className="splidee"
    >
      <video src={commisioner_testimonial} controls className="videos" />
      {/* <SplideSlide className="video_wrapper">
        <video src={commisioner_testimonial} controls className="videos" />
      </SplideSlide>
      <SplideSlide className="video_wrapper">
        <video src={parent_testimonial} controls className="videos" />
      </SplideSlide>
      <SplideSlide className="video_wrapper">
        <video src={student_testimonial} controls className="videos" />
      </SplideSlide> */}
    </Splide>
  );
};

export default Testimonial;
