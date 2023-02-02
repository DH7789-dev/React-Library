import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'



const SwiperJSPerView = () => {
    return(
        <>
            <Swiper slidesPerView={'auto'} spaceBetween={30}  className="mySwiperPerView">
                <SwiperSlide className="mySwiperSlidePerView">

                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default SwiperJSPerView;