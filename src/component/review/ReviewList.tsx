import React, { useEffect } from 'react';
import ReviewCard from './ReviewCard';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getAllTestimonial, selectIsLoading } from '../../redux/features/testimonials/testimonialSlice';
import Review from './Review';
const ReviewList = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const { testimonials } = useAppSelector((state) => state.testimonial);

  // get all testimonials
  useEffect(() => {
    if (testimonials.length === 0) {
      dispatch(getAllTestimonial());
    }
  }, []);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        effect="slide"
        speed={800}
        loop={true}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {testimonials &&
          testimonials.map((review) => (
            <SwiperSlide key={review._id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ReviewList;
